const axios = require('axios');

module.exports = async (req, res) => {
    // Configura os cabeçalhos de CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { mediaUrl, type } = req.query;

    if (!mediaUrl) {
        return res.status(400).send('URL ausente.');
    }

    try {
        const response = await axios({
            method: 'GET',
            url: mediaUrl,
            responseType: 'stream',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://www.instagram.com/'
            }
        });

        let ext = 'mp4';
        let contentType = 'video/mp4';

        if (type === 'mp3') {
            ext = 'mp3';
            contentType = 'audio/mpeg';
        } else if (type === 'image' || type === 'jpg' || type === 'jpeg') {
            ext = 'jpg';
            contentType = 'image/jpeg';
        }

        res.setHeader('Content-Disposition', `attachment; filename="download_${Date.now()}.${ext}"`);
        res.setHeader('Content-Type', contentType);

        response.data.pipe(res);
    } catch (err) {
        console.error('Erro no streaming:', err.message);
        res.status(500).send('Erro no download do arquivo.');
    }
};