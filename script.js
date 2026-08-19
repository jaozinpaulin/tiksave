const isLiveServer = window.location.port === '5500' || window.location.port === '5501';
const API_BASE_URL = isLiveServer ? 'http://localhost:3000' : '';

const form = document.getElementById('downloadForm');
const mediaUrlInput = document.getElementById('tiktokUrl');
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

let carouselContainer = document.getElementById('carouselItems');
if (!carouselContainer) {
    carouselContainer = document.createElement('div');
    carouselContainer.id = 'carouselItems';
    carouselContainer.className = 'carousel-grid';
    resultSection.querySelector('.result-details')?.appendChild(carouselContainer);
}

function checkInputState() {
    const hasValue = mediaUrlInput.value.trim() !== '';
    if (hasValue) {
        pasteBtn.classList.add('hidden');
        clearBtn.classList.remove('hidden');
    } else {
        pasteBtn.classList.remove('hidden');
        clearBtn.classList.add('hidden');
    }
}

mediaUrlInput.addEventListener('input', checkInputState);

clearBtn.addEventListener('click', () => {
    mediaUrlInput.value = '';
    checkInputState();
    mediaUrlInput.focus();
});

pasteBtn.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        mediaUrlInput.value = text.trim();
        checkInputState();
    } catch (err) {
        showToast('Permissão de colar negada.');
    }
});

function showToast(message = 'Download iniciado com sucesso!') {
    const toastText = toastNotification.querySelector('span');
    if (toastText) toastText.textContent = message;

    toastNotification.classList.remove('hidden');
    void toastNotification.offsetWidth;
    toastNotification.classList.add('show');

    setTimeout(() => {
        toastNotification.classList.remove('show');
        setTimeout(() => toastNotification.classList.add('hidden'), 200);
    }, 3000);
}

if (btnMp4) btnMp4.addEventListener('click', () => showToast('Download do vídeo iniciado!'));
if (btnMp3) btnMp3.addEventListener('click', () => showToast('Download do áudio iniciado!'));

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const url = mediaUrlInput.value.trim();
    if (!url) return;

    hideAllStates();
    carouselContainer.innerHTML = '';
    loadingState.classList.remove('hidden');

    try {
        const response = await fetch(`${API_BASE_URL}/api/download`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });

        const responseText = await response.text();
        let data;

        try {
            data = JSON.parse(responseText);
        } catch (jsonErr) {
            throw new Error('Servidor retornou uma resposta inesperada.');
        }

        if (!response.ok) {
            throw new Error(data.error || 'Falha ao processar o link.');
        }

        const previewBox = videoCover.closest('.preview-container');
        if (data.cover) {
            videoCover.src = data.cover;
            if (previewBox) previewBox.classList.remove('hidden');
        } else if (previewBox) {
            previewBox.classList.add('hidden');
        }

        authorName.textContent = data.author ? `@${data.author}` : '@usuario';
        videoTitle.textContent = data.title || 'Publicação extraída';

        // Post simples
        if (!data.isCarousel && data.medias && data.medias.length === 1) {
            const singleMedia = data.medias[0];
            const fileType = singleMedia.type === 'image' ? 'image' : 'mp4';

            const labelElem = btnMp4.querySelector('strong');
            if (labelElem) {
                labelElem.textContent = singleMedia.type === 'image' ? 'Baixar Foto' : 'Vídeo MP4';
            }

            btnMp4.href = `${API_BASE_URL}/api/file-download?mediaUrl=${encodeURIComponent(singleMedia.url)}&type=${fileType}`;
            btnMp4.setAttribute('download', '');
            btnMp4.classList.remove('hidden');
        } else if (data.medias && data.medias.length > 1) {
            // Post carrossel
            btnMp4.classList.add('hidden');

            data.medias.forEach((item) => {
                const btn = document.createElement('a');
                const fileType = item.type === 'image' ? 'image' : 'mp4';

                btn.href = `${API_BASE_URL}/api/file-download?mediaUrl=${encodeURIComponent(item.url)}&type=${fileType}`;
                btn.setAttribute('download', '');
                btn.className = 'carousel-btn';
                btn.innerHTML = `<i class="ph ph-download-simple"></i> <span>Baixar ${item.label}</span>`;

                btn.addEventListener('click', () => showToast(`Baixando ${item.label}...`));
                carouselContainer.appendChild(btn);
            });
        }

        // Áudio MP3
        if (data.audio) {
            btnMp3.href = `${API_BASE_URL}/api/file-download?mediaUrl=${encodeURIComponent(data.audio)}&type=mp3`;
            btnMp3.setAttribute('download', '');
            btnMp3.classList.remove('hidden');
        } else {
            btnMp3.classList.add('hidden');
        }

        loadingState.classList.add('hidden');
        resultSection.classList.remove('hidden');

    } catch (err) {
        console.error('Erro na requisição:', err);
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