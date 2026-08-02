const form = document.getElementById('downloadForm');
const tiktokUrlInput = document.getElementById('tiktokUrl');
const pasteBtn = document.getElementById('pasteBtn');

const loadingState = document.getElementById('loading');
const resultSection = document.getElementById('result');
const errorBox = document.getElementById('errorMessage');

const videoCover = document.getElementById('videoCover');
const authorName = document.getElementById('authorName');
const videoTitle = document.getElementById('videoTitle');
const btnMp4 = document.getElementById('btnMp4');
const btnMp3 = document.getElementById('btnMp3');
const errorText = document.getElementById('errorText');

pasteBtn.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        tiktokUrlInput.value = text;
    } catch (err) {
        alert('Permissão para acessar a área de transferência negada.');
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const url = tiktokUrlInput.value.trim();
    if (!url) return;

    hideAllStates();
    loadingState.classList.remove('hidden');

    try {
        // Rota relativa apontando para a Serverless Function da Vercel (/api/download)
        const response = await fetch('/api/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Falha ao processar o vídeo.');
        }

        videoCover.src = data.cover;
        authorName.textContent = `@${data.author}`;
        videoTitle.textContent = data.title;

        // Rotas relativas para download de mídia no proxy da Vercel
        const downloadMp4Url = `/api/file-download?mediaUrl=${encodeURIComponent(data.videoNoWatermark)}&type=mp4`;
        const downloadMp3Url = `/api/file-download?mediaUrl=${encodeURIComponent(data.audio)}&type=mp3`;

        btnMp4.href = downloadMp4Url;
        btnMp3.href = downloadMp3Url;

        btnMp4.setAttribute('download', '');
        btnMp3.setAttribute('download', '');

        loadingState.classList.add('hidden');
        resultSection.classList.remove('hidden');

    } catch (err) {
        loadingState.classList.add('hidden');
        errorText.textContent = err.message;
        errorBox.classList.remove('hidden');
    }
});

function hideAllStates() {
    loadingState.classList.add('hidden');
    resultSection.classList.add('hidden');
    errorBox.classList.add('hidden');
}