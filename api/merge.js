const fs = require('fs');
const path = require('path');
const os = require('os');
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffprobeInstaller = require('@ffprobe-installer/ffprobe');

// Configura os caminhos
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).send('Use POST.');

    const { images, audioUrl, filename } = req.body;

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
        // 1. Baixa o Áudio
        const audRes = await axios({ method: 'GET', url: audioUrl, responseType: 'stream' });
        const audWriter = fs.createWriteStream(audioPath);
        audRes.data.pipe(audWriter);
        await new Promise((resolve, reject) => { audWriter.on('finish', resolve); audWriter.on('error', reject); });

        // 2. Baixa todas as Imagens do Carrossel
        for (let i = 0; i < images.length; i++) {
            const imgPath = path.join(tmpDir, `img_${sessionId}_${i}.jpg`);
            const imgRes = await axios({ method: 'GET', url: images[i], responseType: 'stream' });
            const imgWriter = fs.createWriteStream(imgPath);
            imgRes.data.pipe(imgWriter);
            await new Promise((resolve, reject) => { imgWriter.on('finish', resolve); imgWriter.on('error', reject); });
            downloadedImages.push(imgPath);
        }

        // 3. Descobre a duração total do áudio
        const getAudioDuration = () => new Promise((resolve, reject) => {
            ffmpeg.ffprobe(audioPath, (err, metadata) => {
                if (err) reject(err);
                else resolve(metadata.format.duration);
            });
        });

        let duration = await getAudioDuration();
        if (!duration || duration <= 0) duration = 15; // fallback caso falhe

        // Divide o tempo igualmente entre as fotos selecionadas (todas do carrossel)
        const timePerImage = (duration / images.length).toFixed(2);

        // 4. Cria o script para o FFmpeg mesclar as fotos em vídeo
        let listContent = '';
        for (const img of downloadedImages) {
            const safePath = img.replace(/\\/g, '/'); // Previne erro no Windows
            listContent += `file '${safePath}'\n`;
            listContent += `duration ${timePerImage}\n`;
        }
        // O FFmpeg exige que a última imagem se repita no txt (sem duração)
        listContent += `file '${downloadedImages[downloadedImages.length - 1].replace(/\\/g, '/')}'\n`;
        fs.writeFileSync(listPath, listContent);

        // 5. Mescla (Slideshow + Áudio + Formato WhatsApp)
        await new Promise((resolve, reject) => {
            ffmpeg()
                .input(listPath)
                .inputOptions(['-f concat', '-safe 0'])
                .input(audioPath)
                .outputOptions([
                    '-c:v libx264',
                    '-preset ultrafast',
                    '-pix_fmt yuv420p', // Essencial WhatsApp
                    '-c:a aac',
                    '-b:a 192k',
                    '-shortest',
                    '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2' // Evita tela verde no WPP
                ])
                .save(outputPath)
                .on('end', resolve)
                .on('error', reject);
        });

        // 6. Envia o vídeo finalizado para download
        const safeName = filename ? filename.replace(/[^a-zA-Z0-9._-]/g, '_') : `tiktok_whatsapp_${sessionId}.mp4`;
        const stat = fs.statSync(outputPath);

        res.writeHead(200, {
            'Content-Type': 'video/mp4',
            'Content-Length': stat.size,
            'Content-Disposition': `attachment; filename="${safeName}"`
        });

        const readStream = fs.createReadStream(outputPath);
        readStream.pipe(res);

        readStream.on('end', () => {
            // Limpa o lixo temporário do servidor
            [audioPath, outputPath, listPath, ...downloadedImages].forEach(file => {
                if (fs.existsSync(file)) fs.unlinkSync(file);
            });
        });

    } catch (error) {
        console.error('Erro geral no merge:', error);
        if (!res.headersSent) res.status(500).send('Erro ao processar arquivos.');
        [audioPath, outputPath, listPath, ...downloadedImages].forEach(file => {
            try { if (fs.existsSync(file)) fs.unlinkSync(file); } catch (e) { }
        });
    }
};