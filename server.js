require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname));

app.get('/api/file-download', require('./api/file-download'));
app.post('/api/merge', require('./api/merge'));

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});

module.exports = app;