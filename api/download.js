const axios = require('axios');

async function extractInstagram(url) {
    try {
        const response = await axios.post(
            'https://api.cobalt.tools/',
            {
                url: url,
                videoQuality: 'max',
                downloadMode: 'auto'
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                },
                timeout: 10000
            }
        );

        const data = response.data;

        if (data.status === 'picker' && Array.isArray(data.picker) && data.picker.length > 0) {
            return {
                platform: 'instagram',
                isCarousel: true,
                title: 'Carrossel do Instagram',
                cover: data.picker[0]?.thumb || data.picker[0]?.url,
                author: 'Instagram User',
                medias: data.picker.map((item, i) => ({
                    type: item.type === 'photo' ? 'image' : 'video',
                    url: item.url,
                    label: item.type === 'photo' ? `Foto ${i + 1}` : `Vídeo ${i + 1}`
                })),
                audio: null
            };
        }

        if (data.status === 'tunnel' || data.status === 'redirect' || data.url) {
            const mediaUrl = data.url;
            const isImage = mediaUrl.includes('.jpg') || mediaUrl.includes('.jpeg') || mediaUrl.includes('.webp') || mediaUrl.includes('.png');

            return {
                platform: 'instagram',
                isCarousel: false,
                title: data.filename ? data.filename.replace(/\.[^/.]+$/, "") : 'Instagram Post / Reel',
                cover: mediaUrl,
                author: 'Instagram User',
                medias: [{
                    type: isImage ? 'image' : 'video',
                    url: mediaUrl,
                    label: isImage ? 'Foto (HD)' : 'Vídeo MP4'
                }],
                audio: null
            };
        }
    } catch (err) {
        throw new Error('Não foi possível extrair a mídia do Instagram. Verifique se o post é público.');
    }
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido.' });

    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'Insira uma URL válida.' });

    if (url.includes('tiktok.com')) {
        try {
            const response = await axios.post('https://www.tikwm.com/api/', { url, hd: 1 });
            const data = response.data.data;
            if (!data) return res.status(400).json({ error: 'Erro ao buscar no TikTok.' });

            let medias = [];
            if (data.images && data.images.length > 0) {
                medias = data.images.map((img, i) => ({ type: 'image', url: img, label: `Foto ${i + 1}` }));
            } else if (data.play) {
                medias.push({ type: 'video', url: data.play, label: 'Vídeo Sem Marca d’Água' });
            }

            return res.json({
                platform: 'tiktok',
                isCarousel: medias.length > 1,
                title: data.title || 'TikTok Post',
                cover: data.cover || medias[0]?.url,
                author: data.author?.nickname || 'TikTok User',
                medias,
                audio: data.music || null
            });
        } catch (e) {
            return res.status(500).json({ error: 'Erro na API do TikTok.' });
        }
    }

    if (url.includes('instagram.com')) {
        try {
            const igData = await extractInstagram(url);
            return res.json(igData);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    return res.status(400).json({ error: 'Insira um link do TikTok ou Instagram.' });
};