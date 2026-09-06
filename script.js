// Dicionário de traduções
const translations = {
    pt: {
        name: "Português",
        hero_title: "Baixar vídeos do TikTok",
        hero_subtitle: "Sem marca d'água, em alta qualidade e direto no seu aparelho.",
        input_placeholder: "Cole o link do TikTok aqui...",
        btn_paste: "Colar",
        btn_download: "Baixar",
        loading_title: "Processando publicação",
        loading_desc: "Buscando link direto sem marca d'água...",
        error_title: "Falha ao extrair",
        error_desc: "Não foi possível processar este link. Verifique se o vídeo é público.",
        btn_mp4_title: "Vídeo Sem Marca d'Água",
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
        card1_badge: "Vídeos HD",
        card1_title: "Qualidade Original",
        card1_desc: "Baixe vídeos sem marca d'água no formato MP4 original sem nenhuma compressão adicional.",
        card2_badge: "Fotos",
        card2_title: "Carrossel Completo",
        card2_desc: "Extraia e salve todas as imagens de posts com múltiplos slides em alta resolução.",
        card3_badge: "Áudio",
        card3_title: "Conversor MP3",
        card3_desc: "Extraia e guarde a música ou áudio viral de qualquer vídeo de forma imediata.",
        faq_heading: "Perguntas Frequentes",
        faq_q1: "Como baixar vídeos do TikTok sem marca d'água?",
        faq_a1: "Abra o TikTok, clique em 'Compartilhar' no vídeo, selecione 'Copiar link', cole no campo de pesquisa acima e clique em 'Baixar'.",
        faq_q2: "É possível baixar fotos de carrossel em HD?",
        faq_a2: "Sim! O TikDownload reconhece posts com slides de fotos e disponibiliza os botões para download de cada imagem em qualidade original.",
        faq_q3: "Preciso pagar ou instalar algum app?",
        faq_a3: "Não. O TikDownload funciona de forma 100% gratuita diretamente no navegador do celular ou PC.",
        toast_started: "Download iniciado com sucesso!",
        toast_rendering: "Criando vídeo com as fotos e áudio...",
        toast_ready: "Vídeo gerado com sucesso!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Ferramenta Gratuita"
    },
    en: {
        name: "English",
        hero_title: "Download TikTok Videos",
        hero_subtitle: "No watermark, high quality, and straight to your device.",
        input_placeholder: "Paste TikTok link here...",
        btn_paste: "Paste",
        btn_download: "Download",
        loading_title: "Processing post",
        loading_desc: "Fetching direct link without watermark...",
        error_title: "Extraction Failed",
        error_desc: "Could not process this link. Please ensure the video is public.",
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
        card1_badge: "HD Videos",
        card1_title: "Original Quality",
        card1_desc: "Download TikTok videos without watermark in original MP4 format without compression.",
        card2_badge: "Photos",
        card2_title: "Full Carousel",
        card2_desc: "Extract and save all images from multi-photo slide posts in high definition.",
        card3_badge: "Audio",
        card3_title: "MP3 Converter",
        card3_desc: "Extract background music and viral audio tracks directly into MP3 format.",
        faq_heading: "Frequently Asked Questions",
        faq_q1: "How to download TikTok videos without watermark?",
        faq_a1: "Open TikTok, tap 'Share', copy the link, paste it into the search box above and click 'Download'.",
        faq_q2: "Can I download carousel photos in HD?",
        faq_a2: "Yes! TikDownload automatically detects multi-photo posts and generates instant download links for each slide.",
        faq_q3: "Do I need to pay or install an app?",
        faq_a3: "No. TikDownload works 100% free directly in your browser on mobile and desktop.",
        toast_started: "Download started successfully!",
        toast_rendering: "Creating video with photos and audio...",
        toast_ready: "Video generated successfully!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Free Online Tool"
    },
    es: {
        name: "Español",
        hero_title: "Descargar Videos de TikTok",
        hero_subtitle: "Sin marca de agua, en alta calidad y directo a tu dispositivo.",
        input_placeholder: "Pega el enlace de TikTok aquí...",
        btn_paste: "Pegar",
        btn_download: "Descargar",
        loading_title: "Procesando publicação",
        loading_desc: "Obteniendo enlace directo sin marca de agua...",
        error_title: "Error al extraer",
        error_desc: "No se pudo procesar este enlace. Verifica que el video sea público.",
        btn_mp4_title: "Video Sin Marca de Agua",
        btn_mp4_desc: "Formato MP4 en Alta Definición",
        btn_image_title: "Descargar Foto",
        btn_image_desc: "Imagen en Alta Definición (JPG)",
        btn_mp3_title: "Audio MP3",
        btn_mp3_desc: "Pista de audio original",
        btn_slide: "Descargar Foto",
        btn_download_all: "Descargar Todas las Fotos",
        btn_carousel_audio: "Música de Fondo (MP3)",
        btn_create_video: "Crear Video con Música (MP4)",
        select_all: "Marcar Todas",
        deselect_all: "Desmarcar",
        card1_badge: "Videos HD",
        card1_title: "Calidad Original",
        card1_desc: "Descarga videos sin marca de agua en formato MP4 original sin compresión adicional.",
        card2_badge: "Fotos",
        card2_title: "Carrusel Completo",
        card2_desc: "Extrae y guarda todas las imágenes de publicaciones múltiples en alta resolución.",
        card3_badge: "Audio",
        card3_title: "Convertidor MP3",
        card3_desc: "Extrae la música o audio viral de cualquier video de forma inmediata.",
        faq_heading: "Preguntas Frecuentes",
        faq_q1: "¿Cómo descargar videos de TikTok sin marca de agua?",
        faq_a1: "Abre TikTok, toca 'Compartir', copia el enlace, pégalo en la barra de búsqueda y haz clic en 'Descargar'.",
        faq_q2: "¿Se pueden descargar fotos de carrusel en HD?",
        faq_a2: "¡Sí! TikDownload detecta publicaciones de fotos y genera botones para descargar cada imagen en HD.",
        faq_q3: "¿Necesito pagar o instalar alguna app?",
        faq_a3: "No. TikDownload funciona 100% gratis en cualquier navegador móvil o PC.",
        toast_started: "¡Descarga iniciada con éxito!",
        toast_rendering: "Creando video con fotos y audio...",
        toast_ready: "¡Video creado con éxito!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Herramienta Gratuita"
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

    document.querySelectorAll('.lang-item').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLanguage);

    const langBtn = document.getElementById('langDropdownBtn');
    const langMenu = document.getElementById('langDropdownMenu');

    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('.lang-item').forEach(btn => {
            btn.addEventListener('click', () => {
                applyLanguage(btn.getAttribute('data-lang'));
                langMenu.classList.add('hidden');
            });
        });

        document.addEventListener('click', () => {
            langMenu.classList.add('hidden');
        });
    }

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

    // Download estável via Blob direto no navegador (sem 'Failed - No file')
    async function executeDownload(url, filename, type = 'video') {
        showToast('toast_started');

        const fullUrl = url.startsWith('http') ? url : `https://www.tikwm.com${url.startsWith('/') ? '' : '/'}${url}`;
        let blob = null;

        // 1. Tenta baixar via fetch direto no navegador
        try {
            const resp = await fetch(fullUrl);
            if (resp.ok) {
                const b = await resp.blob();
                if (b.size > 200) blob = b;
            }
        } catch (e) {
            console.warn('Download direto falhou, tentando proxy...', e);
        }

        // 2. Se o direto falhar por CORS, tenta a rota proxy
        if (!blob) {
            try {
                const proxyUrl = `/api/file-download?type=${encodeURIComponent(type)}&filename=${encodeURIComponent(filename)}&mediaUrl=${encodeURIComponent(fullUrl)}`;
                const proxyResp = await fetch(proxyUrl);
                if (proxyResp.ok) {
                    const b = await proxyResp.blob();
                    if (b.size > 200) blob = b;
                }
            } catch (err) {
                console.warn('Proxy também falhou:', err);
            }
        }

        // 3. Se obteve o Blob, dispara o salvamento local na mesma tela
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

        // 4. Fallback final: se tudo falhar, abre a mídia original para salvar
        window.open(fullUrl, '_blank');
    }

    // Download de todas as fotos em sequência na mesma tela
    async function downloadAllImages(images) {
        showToast('toast_started');
        for (let i = 0; i < images.length; i++) {
            const imgUrl = typeof images[i] === 'string' ? images[i] : images[i].url;
            await executeDownload(imgUrl, `tikdownload_photo_${i + 1}.jpg`, 'image');
            if (i < images.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 600));
            }
        }
    }

    // Motor de Vídeo com Sincronização Estrita de Timeline
    async function generateMergedVideo(selectedImgUrls, musicUrl, progressBar, progressText, progressCard, onDone) {
        showToast('toast_rendering');
        progressCard.style.display = 'flex';
        progressBar.style.width = '0%';
        progressText.textContent = 'Carregando áudio da publicação...';

        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            let audioArrayBuffer = null;

            // 1. Download do áudio via proxy ou rota direta
            const proxyAudioUrl = `/api/file-download?type=mp3&mediaUrl=${encodeURIComponent(musicUrl)}`;
            try {
                const audioResp = await fetch(proxyAudioUrl);
                if (audioResp.ok) {
                    const audioBlob = await audioResp.blob();
                    if (audioBlob.size > 1000) {
                        audioArrayBuffer = await audioBlob.arrayBuffer();
                    }
                }
            } catch (e) {
                console.warn('Proxy de áudio falhou, tentando rota direta...', e);
            }

            if (!audioArrayBuffer) {
                try {
                    const directResp = await fetch(musicUrl);
                    if (directResp.ok) {
                        const directBlob = await directResp.blob();
                        audioArrayBuffer = await directBlob.arrayBuffer();
                    }
                } catch (e2) { }
            }

            if (!audioArrayBuffer) {
                throw new Error('Falha ao descarregar áudio da publicação.');
            }

            const decodedAudio = await audioCtx.decodeAudioData(audioArrayBuffer);
            const totalDuration = decodedAudio.duration; // Duração exata do áudio
            const photoCount = selectedImgUrls.length;
            const timePerPhoto = totalDuration / photoCount; // Tempo exato por foto

            // 2. Carregar imagens como Blobs locais
            progressText.textContent = `Preparando ${photoCount} fotos...`;
            const loadedImages = await Promise.all(selectedImgUrls.map(async (url) => {
                const proxyImgUrl = `/api/file-download?type=image&mediaUrl=${encodeURIComponent(url)}`;
                let b = null;
                try {
                    const r = await fetch(proxyImgUrl);
                    if (r.ok) b = await r.blob();
                } catch (err) { }

                if (!b || b.size < 500) {
                    const r2 = await fetch(url);
                    b = await r2.blob();
                }

                const blobObjUrl = URL.createObjectURL(b);

                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve({ img, blobUrl: blobObjUrl });
                    img.onerror = reject;
                    img.src = blobObjUrl;
                });
            }));

            // 3. Configuração de streams e FPS garantido
            const FPS = 25; // Garante fluidez e timeline exata para os players
            const canvasStream = canvas.captureStream(FPS);
            const audioDest = audioCtx.createMediaStreamDestination();

            const audioSource = audioCtx.createBufferSource();
            audioSource.buffer = decodedAudio;
            audioSource.connect(audioDest);

            const combinedStream = new MediaStream([
                ...canvasStream.getVideoTracks(),
                ...audioDest.stream.getAudioTracks()
            ]);

            const mimeType = MediaRecorder.isTypeSupported('video/mp4;codecs=avc1')
                ? 'video/mp4;codecs=avc1'
                : (MediaRecorder.isTypeSupported('video/mp4') ? 'video/mp4' : 'video/webm');

            const recorder = new MediaRecorder(combinedStream, {
                mimeType,
                videoBitsPerSecond: 3000000
            });

            const chunks = [];
            recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };

            const finished = new Promise(resolve => {
                recorder.onstop = () => resolve(new Blob(chunks, { type: mimeType }));
            });

            recorder.start();
            audioSource.start(0);

            const startEpoch = performance.now();
            let frameCounter = 0;

            // Função de desenho de quadro único
            function renderCurrentFrame(elapsed) {
                let idx = Math.floor(elapsed / timePerPhoto);
                if (idx >= loadedImages.length) idx = loadedImages.length - 1;
                if (idx < 0) idx = 0;

                const item = loadedImages[idx];
                if (item && item.img && item.img.width) {
                    // Limpa com fundo preto
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    // Força modificação de 1 pixel imperceptível para o captureStream() não descartar o frame estático
                    frameCounter = (frameCounter + 1) % 2;
                    ctx.fillStyle = frameCounter === 0 ? '#000001' : '#000000';
                    ctx.fillRect(0, 0, 1, 1);

                    const hRatio = canvas.width / item.img.width;
                    const vRatio = canvas.height / item.img.height;
                    const ratio = Math.min(hRatio, vRatio);
                    const x = (canvas.width - item.img.width * ratio) / 2;
                    const y = (canvas.height - item.img.height * ratio) / 2;

                    ctx.drawImage(item.img, 0, 0, item.img.width, item.img.height, x, y, item.img.width * ratio, item.img.height * ratio);
                }
            }

            // Desenha o primeiro quadro imediatamente no tempo 0
            renderCurrentFrame(0);

            // Timer de alta precisão via setInterval sincronizado com o clock
            const intervalMs = 1000 / FPS;
            const timerId = setInterval(() => {
                const elapsed = (performance.now() - startEpoch) / 1000;
                const percent = Math.min(100, Math.round((elapsed / totalDuration) * 100));

                progressBar.style.width = `${percent}%`;
                progressText.textContent = `Gerando vídeo: ${percent}% (${elapsed.toFixed(1)}s / ${totalDuration.toFixed(1)}s · ${timePerPhoto.toFixed(1)}s por foto)`;

                renderCurrentFrame(elapsed);

                if (elapsed >= totalDuration) {
                    clearInterval(timerId);
                    recorder.stop();
                    try { audioSource.stop(); } catch (e) { }
                    audioCtx.close();
                }
            }, intervalMs);

            const videoBlob = await finished;
            const videoUrl = URL.createObjectURL(videoBlob);

            loadedImages.forEach(i => URL.revokeObjectURL(i.blobUrl));

            // Download automático do MP4 gerado
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = videoUrl;
            a.download = `tikdownload_slideshow_${Date.now()}.${mimeType.includes('mp4') ? 'mp4' : 'webm'}`;
            document.body.appendChild(a);
            a.click();

            setTimeout(() => {
                if (document.body.contains(a)) document.body.removeChild(a);
                URL.revokeObjectURL(videoUrl);
            }, 3000);

            showToast('toast_ready');
            progressCard.style.display = 'none';
            if (onDone) onDone();

        } catch (err) {
            console.error('Erro detalhado:', err);
            alert('Não foi possível gerar o vídeo: ' + (err.message || 'Erro inesperado.'));
            progressCard.style.display = 'none';
            if (onDone) onDone();
        }
    }
    // Formulário Principal
    downloadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = tiktokUrlInput.value.trim();
        if (!url) return;

        errorState.classList.add('hidden');
        resultSection.classList.add('hidden');
        loadingState.classList.remove('hidden');
        submitBtn.disabled = true;

        try {
            const response = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
            const data = await response.json();

            if (data.code === 0 && data.data) {
                const item = data.data;
                const t = translations[currentLanguage] || translations.pt;

                authorName.textContent = item.author ? `@${item.author.unique_id || item.author.nickname}` : '@tiktok';
                videoTitle.textContent = item.title || 'TikTok Media';

                const musicUrl = item.music || item.music_info?.play;

                // ====================================================
                // CASO 1: CARROSSEL DE FOTOS COM OPÇÃO DE VÍDEO
                // ====================================================
                if (item.images && item.images.length > 0) {
                    resultSection.classList.add('is-carousel');
                    if (videoCoverBox) videoCoverBox.classList.add('hidden');

                    btnMp4.parentElement.classList.add('hidden');
                    carouselItems.innerHTML = '';

                    const slideText = t.btn_slide || 'Baixar Foto';
                    const downloadAllText = t.btn_download_all || 'Baixar Todas as Fotos';
                    const carouselAudioText = t.btn_carousel_audio || 'Música de Fundo (MP3)';
                    const createVideoText = t.btn_create_video || 'Criar Vídeo com Música (MP4)';

                    // Array de controle de seleção de fotos
                    const photoState = item.images.map(imgUrl => ({
                        url: imgUrl,
                        selected: true
                    }));

                    // Barra Superior de Ações
                    const topBar = document.createElement('div');
                    topBar.className = 'carousel-top-bar';

                    topBar.innerHTML = `
                        <div class="carousel-actions-row">
                            <button type="button" class="btn-download-all" id="btnDownloadAll">
                                <i class="ph ph-folder-arrow-down"></i>
                                <span>${downloadAllText} (${item.images.length})</span>
                            </button>

                            ${musicUrl ? `
                            <button type="button" class="btn-create-video" id="btnCreateVideo">
                                <i class="ph ph-film-strip"></i>
                                <span>${createVideoText}</span>
                            </button>
                            <button type="button" class="btn-download-music" id="btnCarouselMusic">
                                <i class="ph ph-music-notes"></i>
                                <span>${carouselAudioText}</span>
                            </button>
                            ` : ''}
                        </div>

                        <!-- Barra de Progresso da Criação do Vídeo -->
                        <div id="renderProgressCard" class="render-progress-card" style="display: none;">
                            <div class="render-progress-label">
                                <span id="renderProgressText">Processando vídeo...</span>
                            </div>
                            <div class="render-progress-track">
                                <div id="renderProgressBar" class="render-progress-bar"></div>
                            </div>
                        </div>

                        <!-- Barra de Atalho de Seleção -->
                        <div class="carousel-select-bar">
                            <span id="selectedPhotosCounter">${photoState.length} de ${photoState.length} selecionadas</span>
                            <div>
                                <button type="button" id="btnCheckAll" class="btn-text-action">${t.select_all || 'Marcar Todas'}</button>
                                <span style="color: var(--border-light); margin: 0 4px;">|</span>
                                <button type="button" id="btnUncheckAll" class="btn-text-action">${t.deselect_all || 'Desmarcar'}</button>
                            </div>
                        </div>
                    `;

                    carouselItems.appendChild(topBar);

                    const btnCreateVideo = topBar.querySelector('#btnCreateVideo');
                    const selectedCounter = topBar.querySelector('#selectedPhotosCounter');
                    const renderCard = topBar.querySelector('#renderProgressCard');
                    const renderBar = topBar.querySelector('#renderProgressBar');
                    const renderText = topBar.querySelector('#renderProgressText');

                    function updateSelectionVisuals() {
                        const selectedCount = photoState.filter(p => p.selected).length;
                        selectedCounter.textContent = `${selectedCount} de ${photoState.length} selecionadas`;

                        if (btnCreateVideo) {
                            btnCreateVideo.disabled = selectedCount === 0;
                            btnCreateVideo.querySelector('span').textContent = selectedCount === 0
                                ? 'Selecione fotos'
                                : `${createVideoText} (${selectedCount})`;
                        }
                    }

                    // Ação: Baixar todas as fotos soltas
                    topBar.querySelector('#btnDownloadAll').onclick = () => {
                        downloadAllImages(item.images);
                    };

                    // Ação: Baixar apenas a música MP3
                    if (musicUrl) {
                        topBar.querySelector('#btnCarouselMusic').onclick = () => {
                            executeDownload(musicUrl, `tikdownload_audio_${item.id || 'music'}.mp3`, 'mp3');
                        };

                        // Ação: Criar o vídeo mesclado das fotos selecionadas com o áudio
                        btnCreateVideo.onclick = () => {
                            const selectedUrls = photoState.filter(p => p.selected).map(p => p.url);
                            if (!selectedUrls.length) return;

                            btnCreateVideo.disabled = true;
                            generateMergedVideo(selectedUrls, musicUrl, renderBar, renderText, renderCard, () => {
                                btnCreateVideo.disabled = false;
                            });
                        };
                    }

                    // Grid de Cards com Checkbox
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

                        const preview = card.querySelector('.carousel-preview');
                        const check = card.querySelector('.photo-check');

                        // Alternar seleção da foto ao clicar no preview
                        preview.addEventListener('click', (ev) => {
                            if (ev.target !== check) {
                                photo.selected = !photo.selected;
                                check.checked = photo.selected;
                            } else {
                                photo.selected = check.checked;
                            }
                            card.classList.toggle('is-selected', photo.selected);
                            updateSelectionVisuals();
                        });

                        // Botão individual: baixa apenas a foto clicada
                        card.querySelector('.carousel-btn').onclick = (ev) => {
                            ev.preventDefault();
                            executeDownload(photo.url, `tikdownload_photo_${index + 1}.jpg`, 'image');
                        };

                        gridContainer.appendChild(card);
                    });

                    carouselItems.appendChild(gridContainer);

                    // Ações de Marcar / Desmarcar todas
                    topBar.querySelector('#btnCheckAll').onclick = () => {
                        photoState.forEach(p => p.selected = true);
                        gridContainer.querySelectorAll('.carousel-card').forEach(c => c.classList.add('is-selected'));
                        gridContainer.querySelectorAll('.photo-check').forEach(k => k.checked = true);
                        updateSelectionVisuals();
                    };

                    topBar.querySelector('#btnUncheckAll').onclick = () => {
                        photoState.forEach(p => p.selected = false);
                        gridContainer.querySelectorAll('.carousel-card').forEach(c => c.classList.remove('is-selected'));
                        gridContainer.querySelectorAll('.photo-check').forEach(k => k.checked = false);
                        updateSelectionVisuals();
                    };

                } else {
                    // ====================================================
                    // CASO 2: VÍDEO CONVENCIONAL
                    // ====================================================
                    resultSection.classList.remove('is-carousel');
                    if (videoCoverBox) {
                        videoCoverBox.classList.remove('hidden');
                        videoCover.src = item.cover || item.origin_cover || '';
                    }

                    btnMp4.parentElement.classList.remove('hidden');
                    carouselItems.innerHTML = '';

                    const videoUrl = item.play || item.wmplay;

                    btnMp4.onclick = (ev) => {
                        ev.preventDefault();
                        executeDownload(videoUrl, `tikdownload_${item.id || 'video'}.mp4`, 'video');
                    };

                    if (musicUrl) {
                        btnMp3.classList.remove('hidden');
                        btnMp3.onclick = (ev) => {
                            ev.preventDefault();
                            executeDownload(musicUrl, `tikdownload_audio_${item.id || 'audio'}.mp3`, 'mp3');
                        };
                    } else {
                        btnMp3.classList.add('hidden');
                    }
                }

                resultSection.classList.remove('hidden');
                resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            } else {
                throw new Error(data.msg || 'Erro na API');
            }
        } catch (err) {
            errorState.classList.remove('hidden');
        } finally {
            loadingState.classList.add('hidden');
            submitBtn.disabled = false;
        }
    });
});