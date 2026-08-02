const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// O CORS DEVE VIR ANTES DE TUDO
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('API TikSave está online e pronta!');
});

// Rota de download
app.post('/api/download', async (req, res) => {
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

        return res.json({
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
});

// Proxy de arquivos
app.get('/api/file-download', async (req, res) => {
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
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});