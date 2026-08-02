const axios = require('axios');

module.exports = async (req, res) => {
    // Configura os cabeçalhos de CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido.' });
    }

    const { url } = req.body;

    if (!url || !url.includes('tiktok.com')) {
        return res.status(400).json({ error: 'Insira um link válido do TikTok.' });
    }

    try {
        const response = await axios.post('https://www.tikwm.com/api/', { url, hd: 1 });
        const data = response.data.data;

        if (!data) {
            return res.status(400).json({ error: 'Não foi possível obter o vídeo. Verifique se o perfil é público.' });
        }

        return res.status(200).json({
            title: data.title || 'Vídeo do TikTok',
            cover: data.cover,
            author: data.author.nickname,
            videoNoWatermark: data.play,
            audio: data.music
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Erro ao conectar à API de extração.' });
    }
};