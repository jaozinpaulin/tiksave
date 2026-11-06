const axios = require('axios');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido.' });

    const { url } = req.body;
    if (!url || (!url.includes('instagram.com') && !url.includes('instagr.am'))) {
        return res.status(400).json({ error: 'Insira uma URL válida do Instagram.' });
    }

    try {
        const options = {
            method: 'GET',
            url: 'https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/get-info',
            params: { url: url.trim() },
            headers: {
                'X-RapidAPI-Key': ' SUA_API_KEY_AQUI ',
                'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        const resData = response.data;

        if (!resData || !resData.result) {
            return res.status(400).json({ error: 'Não foi possível extrair a mídia do Instagram. Verifique se o perfil é público.' });
        }

        const data = resData.result;
        let medias = [];

        if (Array.isArray(data)) {
            medias = data.map((item, i) => ({
                type: item.type === 'video' ? 'video' : 'image',
                url: item.url,
                label: item.type === 'video' ? `Vídeo ${i + 1}` : `Foto ${i + 1}`
            }));
        } else {
            medias.push({
                type: data.type === 'video' ? 'video' : 'image',
                url: data.url,
                label: data.type === 'video' ? 'Vídeo do Instagram' : 'Foto do Instagram'
            });
        }

        return res.status(200).json({
            platform: 'instagram',
            isCarousel: medias.length > 1,
            title: data.caption || 'Instagram Mídia',
            cover: data.thumbnail || medias[0].url,
            author: data.owner_username || 'Instagram User',
            medias,
            audio: null
        });

    } catch (err) {
        console.error('Erro na extração Instagram:', err.message);
        return res.status(500).json({ error: 'Erro ao conectar aos servidores de download do Instagram.' });
    }
};