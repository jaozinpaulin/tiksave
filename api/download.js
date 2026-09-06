const axios = require('axios');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido.' });

    const { url } = req.body;
    if (!url || (!url.includes('tiktok.com') && !url.includes('douyin.com'))) {
        return res.status(400).json({ error: 'Insira uma URL válida do TikTok.' });
    }

    try {
        const params = new URLSearchParams();
        params.append('url', url.trim());
        params.append('hd', '1');

        const response = await axios.post('https://www.tikwm.com/api/', params, {
            timeout: 10000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                'Accept': 'application/json, text/javascript, */*; q=0.01'
            }
        });

        const resData = response.data;

        if (!resData || resData.code !== 0 || !resData.data) {
            return res.status(400).json({
                error: resData?.msg || 'Não foi possível extrair a mídia. Verifique se o perfil e o vídeo são públicos.'
            });
        }

        const data = resData.data;
        const formatUrl = (u) => {
            if (!u) return '';
            return u.startsWith('http') ? u : `https://www.tikwm.com${u}`;
        };

        let medias = [];

        if (data.images && Array.isArray(data.images) && data.images.length > 0) {
            medias = data.images.map((imgUrl, i) => ({
                type: 'image',
                url: formatUrl(imgUrl),
                label: `Foto ${i + 1}`
            }));
        } else {
            const videoUrl = formatUrl(data.hdplay || data.play || data.wmplay);
            if (videoUrl) {
                medias.push({
                    type: 'video',
                    url: videoUrl,
                    label: 'Vídeo Sem Marca d’Água (HD)'
                });
            }
        }

        if (medias.length === 0) {
            return res.status(400).json({ error: 'Nenhuma mídia encontrada nesta publicação.' });
        }

        return res.status(200).json({
            platform: 'tiktok',
            isCarousel: medias.length > 1,
            title: data.title || 'TikTok Vídeo',
            cover: formatUrl(data.cover || (medias[0] ? medias[0].url : '')),
            author: data.author?.nickname || data.author?.unique_id || 'TikTok User',
            medias,
            audio: formatUrl(data.music) || null
        });

    } catch (err) {
        console.error('Erro na extração TikTok:', err.message);
        return res.status(500).json({ error: 'Erro ao conectar aos servidores de download. Tente novamente.' });
    }
};