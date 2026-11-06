const axios = require('axios');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') return res.status(200).end();

    let { mediaUrl, type, filename } = req.query;
    if (!mediaUrl) return res.status(400).send('URL ausente.');

    if (!mediaUrl.startsWith('http')) {
        mediaUrl = `https://www.tikwm.com${mediaUrl.startsWith('/') ? '' : '/'}${mediaUrl}`;
    }

    try {
        const response = await axios({
            method: 'GET',
            url: mediaUrl,
            responseType: 'arraybuffer',
            timeout: 30000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://www.instagram.com/'
            }
        });

        const buffer = Buffer.from(response.data);
        let ext = type === 'mp3' ? 'mp3' : (type === 'image' ? 'jpg' : 'mp4');
        let contentType = type === 'mp3' ? 'audio/mpeg' : (ext === 'jpg' ? 'image/jpeg' : 'video/mp4');

        if (response.headers['content-type'] && !response.headers['content-type'].includes('text')) {
            contentType = response.headers['content-type'];
        }

        const safeName = filename ? filename.replace(/[^a-zA-Z0-9._-]/g, '_') : `download_${Date.now()}.${ext}`;

        res.setHeader('Content-Disposition', `attachment; filename="${safeName}"`);
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Length', buffer.length);

        return res.end(buffer);
    } catch (err) {
        if (!res.headersSent) res.status(502).send('Erro ao obter mídia.');
    }
};