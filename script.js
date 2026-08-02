const form = document.getElementById('downloadForm');
const tiktokUrlInput = document.getElementById('tiktokUrl');
const pasteBtn = document.getElementById('pasteBtn');
const clearBtn = document.getElementById('clearBtn');
const toastNotification = document.getElementById('toastNotification');

const loadingState = document.getElementById('loading');
const resultSection = document.getElementById('result');
const errorBox = document.getElementById('errorMessage');

const videoCover = document.getElementById('videoCover');
const authorName = document.getElementById('authorName');
const videoTitle = document.getElementById('videoTitle');
const btnMp4 = document.getElementById('btnMp4');
const btnMp3 = document.getElementById('btnMp3');
const errorText = document.getElementById('errorText');

function checkInputState() {
    const hasValue = tiktokUrlInput.value.trim() !== '';

    if (hasValue) {
        pasteBtn.classList.add('hidden');
        clearBtn.classList.remove('hidden');
    } else {
        pasteBtn.classList.remove('hidden');
        clearBtn.classList.add('hidden');
    }
}

tiktokUrlInput.addEventListener('input', checkInputState);

clearBtn.addEventListener('click', () => {
    tiktokUrlInput.value = '';
    checkInputState();
    tiktokUrlInput.focus();
});

pasteBtn.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        tiktokUrlInput.value = text;
        checkInputState();
    } catch (err) {
        alert('Permissão para acessar a área de transferência negada.');
    }
});

// Exibe mesg toast
function showToast(message = 'Download iniciado com sucesso!') {
    const toastText = toastNotification.querySelector('span');
    if (toastText) toastText.textContent = message;

    toastNotification.classList.remove('hidden');
    void toastNotification.offsetWidth;
    toastNotification.classList.add('show');

    setTimeout(() => {
        toastNotification.classList.remove('show');
        setTimeout(() => toastNotification.classList.add('hidden'), 300);
    }, 3000);
}

btnMp4.addEventListener('click', () => showToast('Download do MP4 iniciado!'));
btnMp3.addEventListener('click', () => showToast('Download do MP3 iniciado!'));

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const url = tiktokUrlInput.value.trim();
    if (!url) return;

    hideAllStates();
    loadingState.classList.remove('hidden');

    try {
        const response = await fetch('http://localhost:3000/api/download', {
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

        const downloadMp4Url = `http://localhost:3000/api/file-download?mediaUrl=${encodeURIComponent(data.videoNoWatermark)}&type=mp4`;
        const downloadMp3Url = `http://localhost:3000/api/file-download?mediaUrl=${encodeURIComponent(data.audio)}&type=mp3`;

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