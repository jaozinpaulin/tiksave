const express = require('express');
const cors = require('cors');
const downloadHandler = require('./api/download');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/download', downloadHandler);

app.listen(PORT, () => {
    console.log(`TikSave rodando em: http://localhost:${PORT}`);
});