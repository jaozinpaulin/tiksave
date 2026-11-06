// Dicionário de traduções
const translations = {
    pt: {
        name: "Português",
        hero_title: "Baixar vídeos do TikTok e Instagram",
        hero_subtitle: "Sem marca d'água, em alta qualidade e direto no seu aparelho.",
        input_placeholder: "Cole o link do TikTok ou Instagram aqui...",
        btn_paste: "Colar",
        btn_download: "Baixar",
        loading_title: "Processando publicação",
        loading_desc: "Buscando link direto sem marca d'água...",
        error_title: "Falha ao extrair",
        error_desc: "Não foi possível processar este link. Verifique se o conteúdo é público.",
        btn_mp4_title: "Vídeo / Reels Sem Marca d'Água",
        btn_mp4_desc: "Formato MP4 em Alta Resolução",
        btn_image_title: "Baixar Foto",
        btn_image_desc: "Imagem em Alta Resolução (JPG)",
        btn_mp3_title: "Áudio MP3",
        btn_mp3_desc: "Faixa de áudio original",
        btn_slide: "Baixar Foto",
        btn_download_all: "Baixar Todas as Fotos",
        btn_carousel_audio: "Música de Fundo (MP3)",
        btn_create_video: "Criar Vídeo com Música (MP4)",
        select_all: "Marcar Todas",
        deselect_all: "Desmarcar",
        toast_started: "Download iniciado com sucesso!",
        toast_rendering: "Criando vídeo com as fotos e áudio...",
        toast_ready: "Vídeo gerado com sucesso!"
    },
    en: {
        name: "English",
        hero_title: "Download TikTok & Instagram Videos",
        hero_subtitle: "No watermark, high quality, and straight to your device.",
        input_placeholder: "Paste TikTok or Instagram link here...",
        btn_paste: "Paste",
        btn_download: "Download",
        loading_title: "Processing post",
        loading_desc: "Fetching direct link...",
        error_title: "Extraction Failed",
        error_desc: "Could not process this link. Please ensure content is public.",
        btn_mp4_title: "Video Without Watermark",
        btn_mp4_desc: "High Resolution MP4 format",
        btn_image_title: "Download Photo",
        btn_image_desc: "High Resolution Image (JPG)",
        btn_mp3_title: "MP3 Audio",
        btn_mp3_desc: "Original audio track",
        btn_slide: "Download Photo",
        btn_download_all: "Download All Photos",
        btn_carousel_audio: "Background Music (MP3)",
        btn_create_video: "Create Video with Music (MP4)",
        select_all: "Select All",
        deselect_all: "Deselect",
        toast_started: "Download started successfully!",
        toast_rendering: "Creating video with photos and audio...",
        toast_ready: "Video generated successfully!"
    }
};

function detectLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && translations[langParam]) return langParam;

    const saved = localStorage.getItem('tikdownload_lang');
    if (saved && translations[saved]) return saved;

    const browserLang = (navigator.language || navigator.userLanguage || '').substring(0, 2).toLowerCase();
    if (translations[browserLang]) return browserLang;

    return 'pt';
}

let currentLanguage = detectLanguage();

function applyLanguage(lang) {
    if (!translations[lang]) lang = 'pt';
    currentLanguage = lang;
    localStorage.setItem('tikdownload_lang', lang);
    document.documentElement.lang = lang;

    const data = translations[lang];
    const currentLabel = document.getElementById('currentLangLabel');
    if (currentLabel) currentLabel.textContent = data.name;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.innerHTML = data[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (data[key]) el.setAttribute('placeholder', data[key]);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLanguage);

    const downloadForm = document.getElementById('downloadForm');
    const tiktokUrlInput = document.getElementById('tiktokUrl');
    const clearBtn = document.getElementById('clearBtn');
    const pasteBtn = document.getElementById('pasteBtn');
    const submitBtn = document.getElementById('submitBtn');
    const loadingState = document.getElementById('loading');
    const errorState = document.getElementById('errorMessage');
    const resultSection = document.getElementById('result');

    const videoCoverBox = document.querySelector('.result-cover-box');
    const videoCover = document.getElementById('videoCover');
    const videoPlayer = document.getElementById('videoPlayer');
    const authorName = document.getElementById('authorName');
    const videoTitle = document.getElementById('videoTitle');
    const btnMp4 = document.getElementById('btnMp4');
    const btnMp3 = document.getElementById('btnMp3');
    const carouselItems = document.getElementById('carouselItems');
    const toast = document.getElementById('toastNotification');
    const canvas = document.getElementById('renderCanvas');
    const ctx = canvas.getContext('2d');

    tiktokUrlInput.addEventListener('input', () => {
        clearBtn.classList.toggle('hidden', !tiktokUrlInput.value);
    });

    clearBtn.addEventListener('click', () => {
        tiktokUrlInput.value = '';
        clearBtn.classList.add('hidden');
        tiktokUrlInput.focus();
    });

    pasteBtn.addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            tiktokUrlInput.value = text;
            clearBtn.classList.remove('hidden');
        } catch (err) {
            tiktokUrlInput.focus();
        }
    });

    function showToast(msgKey = 'toast_started') {
        if (!toast) return;
        const msg = translations[currentLanguage][msgKey] || translations.pt[msgKey] || msgKey;
        toast.querySelector('span').textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
    }

    async function executeDownload(url, filename, type = 'video') {
        showToast('toast_started');
        const fullUrl = url.startsWith('http') ? url : `https://www.tikwm.com${url.startsWith('/') ? '' : '/'}${url}`;
        let blob = null;

        // Para links do Instagram ou de CDNs protegidas, o fetch direto falha por CORS.
        // Forçamos diretamente a rota de proxy do nosso backend (/api/file-download) para baixar o arquivo com segurança.
        try {
            const proxyUrl = `/api/file-download?type=${encodeURIComponent(type)}&filename=${encodeURIComponent(filename)}&mediaUrl=${encodeURIComponent(fullUrl)}`;
            const proxyResp = await fetch(proxyUrl);
            if (proxyResp.ok) {
                const b = await proxyResp.blob();
                if (b.size > 200) blob = b;
            }
        } catch (err) {
            console.warn('Proxy falhou, tentando fallback direto...', err);
        }

        // Se por acaso o proxy falhar, tentamos o fetch direto comum
        if (!blob) {
            try {
                const resp = await fetch(fullUrl);
                if (resp.ok) {
                    const b = await resp.blob();
                    if (b.size > 200) blob = b;
                }
            } catch (e) { }
        }

        // Se obteve o Blob com sucesso, dispara o download automático na mesma tela
        if (blob) {
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                if (document.body.contains(a)) document.body.removeChild(a);
                URL.revokeObjectURL(blobUrl);
            }, 3000);
            return;
        }

        // Último caso: se tudo falhar, abre a aba
        window.open(fullUrl, '_blank');
    }

    async function downloadAllImages(images) {
        showToast('toast_started');
        for (let i = 0; i < images.length; i++) {
            const imgUrl = typeof images[i] === 'string' ? images[i] : images[i].url;
            await executeDownload(imgUrl, `media_photo_${i + 1}.jpg`, 'image');
            if (i < images.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 600));
            }
        }
    }

    // Formulário Principal com suporte a TikTok e Instagram
    downloadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = tiktokUrlInput.value.trim();
        if (!url) return;

        const isTikTok = url.includes('tiktok.com') || url.includes('douyin.com');
        const isInstagram = url.includes('instagram.com') || url.includes('instagr.am');

        if (!isTikTok && !isInstagram) {
            alert('Por favor, insira um link válido do TikTok ou do Instagram.');
            return;
        }

        // Reseta o player de vídeo e imagem antes de nova busca
        if (videoCover && videoPlayer) {
            videoCover.classList.remove('hidden');
            videoPlayer.classList.add('hidden');
            videoPlayer.pause();
            videoPlayer.src = '';
        }

        errorState.classList.add('hidden');
        resultSection.classList.add('hidden');
        loadingState.classList.remove('hidden');
        submitBtn.disabled = true;

        try {
            let item = null;

            if (isTikTok) {
                const response = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
                const json = await response.json();
                if (json.code === 0 && json.data) {
                    item = json.data;
                }
            } else {
                const response = await fetch('/api/instagram', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url })
                });
                item = await response.json();
            }

            if (item) {
                const t = translations[currentLanguage] || translations.pt;

                authorName.textContent = item.author ? `@${item.author.unique_id || item.author.nickname || item.author}` : (isInstagram ? '@instagram' : '@tiktok');
                videoTitle.textContent = item.title || (isInstagram ? 'Instagram Mídia' : 'TikTok Mídia');

                const musicUrl = item.music || item.music_info?.play;
                const videoUrl = item.play || item.wmplay;

                // CASO 1: SE HOUVER VÍDEO (REELS / VÍDEO COMUM)
                if (videoUrl) {
                    resultSection.classList.remove('is-carousel');
                    if (videoCoverBox) {
                        videoCoverBox.classList.remove('hidden');
                        if (videoCover && videoPlayer) {
                            videoCover.classList.add('hidden');
                            videoPlayer.classList.remove('hidden');
                            videoPlayer.src = videoUrl;
                            videoPlayer.load();

                            videoPlayer.onerror = () => {
                                console.warn('Player nativo bloqueado por CORS, exibindo capa.');
                                videoPlayer.classList.add('hidden');
                                videoCover.classList.remove('hidden');
                                videoCover.src = item.cover || '';
                            };
                        }
                    }

                    btnMp4.parentElement.classList.remove('hidden');
                    carouselItems.innerHTML = '';

                    // ATRIBUIÇÃO DIRETA E SEGURA DO LINK AO BOTÃO DE DOWNLOAD
                    btnMp4.onclick = (ev) => {
                        ev.preventDefault();
                        executeDownload(videoUrl, `instagram_video_${Date.now()}.mp4`, 'video');
                    };

                    if (musicUrl) {
                        btnMp3.classList.remove('hidden');
                        btnMp3.onclick = (ev) => {
                            ev.preventDefault();
                            executeDownload(musicUrl, `media_audio_${Date.now()}.mp3`, 'mp3');
                        };
                    } else {
                        btnMp3.classList.add('hidden');
                    }
                }
                // CASO 2: CARROSSEL DE FOTOS (APENAS FOTOS)
                else if (item.images && item.images.length > 0) {
                    resultSection.classList.add('is-carousel');
                    if (videoCoverBox) videoCoverBox.classList.add('hidden');

                    btnMp4.parentElement.classList.add('hidden');
                    carouselItems.innerHTML = '';

                    const slideText = t.btn_slide || 'Baixar Foto';
                    const downloadAllText = t.btn_download_all || 'Baixar Todas as Fotos';

                    const photoState = item.images.map(imgUrl => ({ url: imgUrl, selected: true }));

                    const topBar = document.createElement('div');
                    topBar.className = 'carousel-top-bar';
                    topBar.innerHTML = `
                        <div class="carousel-actions-row">
                            <button type="button" class="btn-download-all" id="btnDownloadAll">
                                <i class="ph ph-folder-arrow-down"></i>
                                <span>${downloadAllText} (${item.images.length})</span>
                            </button>
                        </div>
                        <div class="carousel-select-bar">
                            <span id="selectedPhotosCounter">${photoState.length} de ${photoState.length} selecionadas</span>
                            <div>
                                <button type="button" id="btnCheckAll" class="btn-text-action">Marcar</button>
                                <span style="color: var(--border-light); margin: 0 4px;">|</span>
                                <button type="button" id="btnUncheckAll" class="btn-text-action">Desmarcar</button>
                            </div>
                        </div>
                    `;

                    carouselItems.appendChild(topBar);

                    topBar.querySelector('#btnDownloadAll').onclick = () => downloadAllImages(item.images);

                    const gridContainer = document.createElement('div');
                    gridContainer.className = 'carousel-grid';

                    photoState.forEach((photo, index) => {
                        const card = document.createElement('div');
                        card.className = 'carousel-card is-selected';
                        card.innerHTML = `
                            <div class="carousel-preview">
                                <input type="checkbox" class="photo-check" checked>
                                <img src="${photo.url}" alt="Foto ${index + 1}" loading="lazy">
                                <span class="carousel-badge">#${index + 1}</span>
                            </div>
                            <button type="button" class="carousel-btn">
                                <i class="ph ph-download-simple"></i>
                                <span>${slideText} ${index + 1}</span>
                            </button>
                        `;

                        card.querySelector('.carousel-btn').onclick = (ev) => {
                            ev.preventDefault();
                            executeDownload(photo.url, `media_photo_${index + 1}.jpg`, 'image');
                        };

                        gridContainer.appendChild(card);
                    });

                    carouselItems.appendChild(gridContainer);
                } else {
                    throw new Error('Nenhuma mídia encontrada');
                }

                resultSection.classList.remove('hidden');
                resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            } else {
                throw new Error('Erro na extração');
            }
        } catch (err) {
            errorState.classList.remove('hidden');
        } finally {
            loadingState.classList.add('hidden');
            submitBtn.disabled = false;
        }
    });
});