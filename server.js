const express = require('express');
const axios = require('axios');
const cors = require('cors');
const youtubedl = require('yt-dlp-exec');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ============================================================
// EXTRATOR NATIVO COM YT-DLP
// ============================================================
async function extractWithYtDlp(url) {
    try {
        const output = await youtubedl(url, {
            dumpSingleJson: true,
            noWarnings: true,
            noCallHome: true,
            // Força a seleção de formatos com áudio e vídeo combinados
            format: 'best[vcodec!=none][acodec!=none]/b',
            addHeader: [
                'referer:https://www.instagram.com/',
                'user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
            ]
        });

        // Identifica e extrai a melhor URL garantindo som
        function getBestMediaUrl(item) {
            if (item.formats && Array.isArray(item.formats) && item.formats.length > 0) {
                // 1. Filtra formatos com VÍDEO e ÁUDIO (descarta DASH mudo)
                const progressiveWithAudio = item.formats.filter(f => {
                    const hasVideo = f.vcodec && f.vcodec !== 'none';
                    const hasAudio = f.acodec && f.acodec !== 'none';
                    const isNotDash = !f.format_id?.toLowerCase().includes('dash-video') &&
                        !f.format_note?.toLowerCase().includes('dash video');

                    return f.url && f.url.startsWith('http') && hasVideo && (hasAudio || isNotDash);
                });

                if (progressiveWithAudio.length > 0) {
                    // Ordena pela maior resolução disponível com áudio
                    progressiveWithAudio.sort((a, b) => (b.height || 0) - (a.height || 0) || (b.tbr || 0) - (a.tbr || 0));
                    return { url: progressiveWithAudio[0].url, isVideo: true };
                }
            }

            // 2. Se a URL principal for de vídeo com som
            if (item.url && item.acodec !== 'none') {
                const isVideo = (item.vcodec && item.vcodec !== 'none') || (item.ext === 'mp4') || item.url.includes('.mp4');
                return { url: item.url, isVideo: isVideo };
            }

            // 3. Fallback para foto/thumbnail
            const fallbackImg = item.thumbnail || item.thumbnails?.[0]?.url || item.url || '';
            return { url: fallbackImg, isVideo: false };
        }

        let medias = [];

        // Caso seja Carrossel / Álbum (múltiplas fotos ou vídeos)
        if (output.entries && Array.isArray(output.entries) && output.entries.length > 0) {
            medias = output.entries.map((entry, index) => {
                const mediaInfo = getBestMediaUrl(entry);
                return {
                    type: mediaInfo.isVideo ? 'video' : 'image',
                    url: mediaInfo.url,
                    label: mediaInfo.isVideo ? `Vídeo ${index + 1}` : `Foto ${index + 1}`
                };
            });
        } else {
            // Caso seja Post Único (Reels, Vídeo ou Foto)
            const mediaInfo = getBestMediaUrl(output);

            if (mediaInfo.url) {
                medias.push({
                    type: mediaInfo.isVideo ? 'video' : 'image',
                    url: mediaInfo.url,
                    label: mediaInfo.isVideo ? 'Vídeo (MP4)' : 'Foto (HD)'
                });
            }
        }

        if (medias.length === 0 || !medias[0].url) {
            throw new Error('Nenhuma mídia encontrada na URL fornecida.');
        }

        return {
            platform: 'instagram',
            isCarousel: medias.length > 1,
            title: output.title || output.description || 'Publicação do Instagram',
            cover: output.thumbnail || medias[0].url,
            author: output.uploader || output.channel || 'Instagram User',
            medias: medias,
            audio: null
        };
    } catch (err) {
        console.error('Erro yt-dlp:', err.message || err);
        throw new Error('Não foi possível extrair a mídia do Instagram. Verifique se o perfil é público.');
    }
}

// ============================================================
// ROTAS DA API
// ============================================================
app.get('/', (req, res) => {
    res.send('API TikSave online e pronta!');
});

app.post('/api/download', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'Por favor, insira uma URL válida.' });
    }

    const isTikTok = url.includes('tiktok.com');
    const isInstagram = url.includes('instagram.com');

    if (!isTikTok && !isInstagram) {
        return res.status(400).json({ error: 'Insira um link válido do TikTok ou do Instagram.' });
    }

    // EXTRAÇÃO: TIKTOK
    if (isTikTok) {
        try {
            const response = await axios.post('https://www.tikwm.com/api/', { url, hd: 1 });
            const data = response.data.data;

            if (!data) {
                return res.status(400).json({ error: 'Não foi possível obter a mídia do TikTok. Verifique se o perfil é público.' });
            }

            let medias = [];

            if (data.images && Array.isArray(data.images) && data.images.length > 0) {
                medias = data.images.map((imgUrl, index) => ({
                    type: 'image',
                    url: imgUrl,
                    label: `Foto ${index + 1}`
                }));
            } else if (data.play) {
                medias.push({
                    type: 'video',
                    url: data.play,
                    label: 'Vídeo Sem Marca d’Água'
                });
            }

            return res.json({
                platform: 'tiktok',
                isCarousel: medias.length > 1,
                title: data.title || 'TikTok Post',
                cover: data.cover || (medias[0] ? medias[0].url : ''),
                author: data.author?.nickname || 'TikTok User',
                medias: medias,
                audio: data.music || null
            });
        } catch (err) {
            console.error('Erro TikTok:', err.message);
            return res.status(500).json({ error: 'Falha ao processar link do TikTok.' });
        }
    }

    // EXTRAÇÃO: INSTAGRAM
    if (isInstagram) {
        try {
            const igResult = await extractWithYtDlp(url);
            return res.json(igResult);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
});

// Proxy de Streaming e Download com a marca TikSave
app.get('/api/file-download', async (req, res) => {
    const { mediaUrl, type } = req.query;
    if (!mediaUrl) return res.status(400).send('URL ausente.');

    try {
        const response = await axios({
            method: 'GET',
            url: mediaUrl,
            responseType: 'stream',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
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

        // Nome padronizado com prefixo TikSave
        const fileName = `TikSave_${Date.now()}.${ext}`;

        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', contentType);

        response.data.pipe(res);
    } catch (err) {
        console.error('Erro no proxy de download:', err.message);
        res.status(500).send('Erro no download do arquivo.');
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
});