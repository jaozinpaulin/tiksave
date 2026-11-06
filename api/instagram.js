const axios = require('axios');

module.exports = async (req, res) => {
    const INSTAGRAM_SESSION_ID = process.env.INSTAGRAM_SESSION_ID;

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido.' });

    if (!INSTAGRAM_SESSION_ID) {
        return res.status(500).json({ error: 'Sessão do Instagram não configurada no servidor.' });
    }

    const { url } = req.body;
    if (!url || (!url.includes('instagram.com') && !url.includes('instagr.am'))) {
        return res.status(400).json({ error: 'URL inválida.' });
    }

    try {
        const shortcodeMatch = url.match(/(?:p|reel|tv)\/([^\/?#&]+)/);
        if (!shortcodeMatch) return res.status(400).json({ error: 'Link inválido.' });
        const shortcode = shortcodeMatch[1];

        const options = {
            method: 'GET',
            url: `https://www.instagram.com/graphql/query/?query_hash=b3055c01b4b222b8a47dc12b090e4e64&variables={"shortcode":"${shortcode}"}`,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Cookie': `sessionid=${INSTAGRAM_SESSION_ID};`,
                'X-IG-App-ID': '936619743392459',
                'Accept': '*/*'
            }
        };

        const response = await axios.request(options);
        const data = response.data;

        if (!data?.data?.shortcode_media) {
            return res.status(400).json({ error: 'Sessão expirada ou post privado.' });
        }

        const media = data.data.shortcode_media;
        let videoUrl = '';
        let images = [];
        const coverUrl = media.display_url || '';
        const authorName = media.owner?.username || 'user';
        const title = media.edge_media_to_caption?.edges?.[0]?.node?.text || 'Mídia';

        if (media.is_video) {
            videoUrl = media.video_url;
        } else if (media.edge_sidecar_to_children) {
            media.edge_sidecar_to_children.edges.forEach(item => {
                if (item.node.is_video) {
                    if (!videoUrl) videoUrl = item.node.video_url;
                } else {
                    images.push(item.node.display_url);
                }
            });
        } else {
            images.push(media.display_url);
        }

        return res.status(200).json({
            platform: 'instagram',
            cover: coverUrl,
            author: authorName,
            title: title,
            images: images.length > 0 ? images : null,
            play: videoUrl || null,
            wmplay: videoUrl || null,
            music: null
        });

    } catch (err) {
        return res.status(500).json({ error: 'Erro de conexão.' });
    }
};