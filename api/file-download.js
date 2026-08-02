const axios = require('axios');

module.exports = async (req, res) => {
    const { mediaUrl, type } = req.query;

    if (!mediaUrl) return res.status(400).send('URL ausente.');

    try {
        const response = await axios({
            method: 'GET',
            url: mediaUrl,
            responseType: 'stream',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        const ext = type === 'mp3' ? 'mp3' : 'mp4';
        res.setHeader('Content-Disposition', `attachment; filename="tiksave_${Date.now()}.${ext}"`);
        res.setHeader('Content-Type', type === 'mp3' ? 'audio/mpeg' : 'video/mp4');

        response.data.pipe(res);
    } catch (err) {
        res.status(500).send('Erro no download do arquivo.');
    }
};