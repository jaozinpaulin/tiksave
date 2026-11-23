const fs = require('fs');
const path = require('path');
const os = require('os');
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).send('Use POST.');

    const { images, audioUrl, filename, timeOption } = req.body;

    if (!images || !images.length || !audioUrl) {
        return res.status(400).send('Imagens e áudio são obrigatórios.');
    }

    const tmpDir = os.tmpdir();
    const sessionId = Date.now();
    const audioPath = path.join(tmpDir, `aud_${sessionId}.mp3`);
    const outputPath = path.join(tmpDir, `out_${sessionId}.mp4`);
    const listPath = path.join(tmpDir, `list_${sessionId}.txt`);
    const downloadedImages = [];

    try {
        const audPromise = axios({ method: 'GET', url: audioUrl, responseType: 'stream' })
            .then(res => new Promise((resolve, reject) => {
                const writer = fs.createWriteStream(audioPath);
                res.data.pipe(writer);
                writer.on('finish', resolve);
                writer.on('error', reject);
            }));

        const imgPromises = images.map((imgUrl, index) => {
            const imgPath = path.join(tmpDir, `img_${sessionId}_${index}.jpg`);
            return axios({ method: 'GET', url: imgUrl, responseType: 'stream' })
                .then(res => new Promise((resolve, reject) => {
                    const writer = fs.createWriteStream(imgPath);
                    res.data.pipe(writer);
                    writer.on('finish', () => {
                        downloadedImages[index] = imgPath;
                        resolve();
                    });
                    writer.on('error', reject);
                }));
        });

        await Promise.all([audPromise, ...imgPromises]);

        const validImages = downloadedImages.filter(p => p !== undefined);
        if (validImages.length === 0) throw new Error("Falha ao baixar imagens.");

        let timePerImage = 3;
        if (timeOption === 'auto') {
            timePerImage = (30 / validImages.length).toFixed(2);
            if (timePerImage < 1) timePerImage = 1;
        } else {
            timePerImage = parseFloat(timeOption) || 3;
        }

        let listContent = '';
        for (const img of validImages) {
            const safePath = img.replace(/\\/g, '/');
            listContent += `file '${safePath}'\n`;
            listContent += `duration ${timePerImage}\n`;
        }
        listContent += `file '${validImages[validImages.length - 1].replace(/\\/g, '/')}'\n`;
        fs.writeFileSync(listPath, listContent);

        await new Promise((resolve, reject) => {
            ffmpeg()
                .input(listPath)
                .inputOptions(['-f concat', '-safe 0'])
                .input(audioPath)
                .outputOptions([
                    '-c:v libx264',
                    '-preset ultrafast',
                    '-tune stillimage',
                    '-crf 28',
                    '-pix_fmt yuv420p',
                    '-c:a aac',
                    '-b:a 128k',
                    '-shortest',
                    '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
                ])
                .save(outputPath)
                .on('end', resolve)
                .on('error', reject);
        });

        const stat = fs.statSync(outputPath);
        const safeName = filename ? filename.replace(/[^a-zA-Z0-9._-]/g, '_') : `tiktok_slideshow_${sessionId}.mp4`;

        res.writeHead(200, {
            'Content-Type': 'video/mp4',
            'Content-Length': stat.size,
            'Content-Disposition': `attachment; filename="${safeName}"`
        });

        const readStream = fs.createReadStream(outputPath);
        readStream.pipe(res);

        res.on('finish', () => {
            cleanup([audioPath, outputPath, listPath, ...validImages]);
        });

    } catch (error) {
        console.error('Erro na Vercel:', error);
        if (!res.headersSent) res.status(500).send('Erro ao processar ficheiros.');
        cleanup([audioPath, outputPath, listPath, ...downloadedImages]);
    }
};

function cleanup(files) {
    files.forEach(file => {
        try { if (file && fs.existsSync(file)) fs.unlinkSync(file); } catch (e) { }
    });
}