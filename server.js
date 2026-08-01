const express = require('express');
const axios = require('./node_modules/axios/index.d.cts');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/download', async (req, res) => {
    const { url } = req.body;

    if (!url || !url.includes('tiktok.com')) {
        return res.status(400).json({ error: 'Por favor, insira um link válido do TikTok.' });
    }

    try {
        const response = await axios.post('https://www.tikwm.com/api/', {
            url: url,
            hd: 1
        });

        const data = response.data.data;

        if (!data) {
            return res.status(400).json({
                error: 'Não foi possível extrair o vídeo. Verifique se a conta é pública ou se o link está correto.'
            });
        }

        return res.json({
            title: data.title || 'Vídeo do TikTok',
            cover: data.cover,
            author: data.author.nickname,
            videoNoWatermark: data.play,
            audio: data.music
        });

    } catch (error) {
        console.error('Erro ao processar:', error.message);
        return res.status(500).json({ error: 'Erro interno ao tentar obter o vídeo.' });
    }
});

app.get('/api/file-download', async (req, res) => {
    const { mediaUrl, type } = req.query;

    if (!mediaUrl) {
        return res.status(400).send('URL da mídia ausente.');
    }

    try {
        const ext = type === 'mp3' ? 'mp3' : 'mp4';
        const filename = `tiksave_${Date.now()}.${ext}`;

        const response = await axios({
            method: 'GET',
            url: mediaUrl,
            responseType: 'stream',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.setHeader('Content-Type', type === 'mp3' ? 'audio/mpeg' : 'video/mp4');

        response.data.pipe(res);

    } catch (error) {
        console.error('Erro no download:', error.message);
        res.status(500).send('Erro ao baixar arquivo.');
    }
});

app.listen(PORT, () => {
    console.log(`TikSave Server rodando em http://localhost:${PORT}`);
});