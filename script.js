const isLiveServer = window.location.port === '5500' || window.location.port === '5501';
const API_BASE_URL = isLiveServer ? 'http://localhost:3000' : '';

// ============================================================
// DICIONÁRIO DE TRADUÇÃO (i18n) - PT / EN / ES
// ============================================================
const translations = {
    pt: {
        title: "TikSave — Baixar Vídeos do TikTok Sem Marca d'Água (HD)",
        ad_badge: "Anúncio",
        hero_title: "Baixar vídeos do TikTok",
        hero_subtitle: "Sem marca d'água, em alta qualidade (HD) e direto no seu dispositivo.",
        input_placeholder: "Cole o link do TikTok aqui...",
        btn_paste: "Colar",
        btn_download: "Baixar",
        loading_title: "Processando publicação",
        loading_desc: "Buscando link direto sem marca d'água...",
        error_title: "Falha ao extrair",
        error_desc: "Não foi possível processar este link. Verifique se o vídeo é público.",
        btn_mp4_title: "Vídeo Sem Marca d'Água",
        btn_mp4_desc: "Formato MP4 em Alta Resolução",
        btn_mp3_title: "Áudio MP3",
        btn_mp3_desc: "Faixa de áudio original",
        carousel_btn: "Baixar",
        card1_badge: "Velocidade",
        card1_title: "Download Imediato",
        card1_desc: "Conexão direta aos servidores para entrega ultrarrápida do arquivo.",
        card2_badge: "Fotos e Slides",
        card2_title: "Suporte a Carrossel",
        card2_desc: "Baixe todas as imagens de publicações com múltiplos slides em HD.",
        card3_badge: "Privacidade",
        card3_title: "Sem Rastreamento",
        card3_desc: "Nenhum dado pessoal ou histórico de downloads é gravado.",
        faq_heading: "Perguntas Frequentes",
        faq_q1: "Como baixar vídeos do TikTok sem marca d'água?",
        faq_a1: "Copie o link do vídeo no aplicativo do TikTok, cole na caixa de busca acima e clique em \"Baixar\".",
        faq_q2: "Preciso pagar ou instalar algum aplicativo?",
        faq_a2: "Não. O TikSave funciona de forma totalmente online no navegador de qualquer celular ou PC.",
        toast_started: "Transferindo arquivo...",
        toast_completed: "Download concluído!",
        toast_paste_error: "Permissão de colar negada.",
        footer_rights: "© 2026 <strong>TikSave</strong> · Ferramenta Gratuita",
        footer_home: "Início"
    },
    en: {
        title: "TikSave — TikTok Video Downloader Without Watermark (HD)",
        ad_badge: "Advertisement",
        hero_title: "Download TikTok Videos",
        hero_subtitle: "No watermark, high quality (HD) and straight to your device.",
        input_placeholder: "Paste TikTok link here...",
        btn_paste: "Paste",
        btn_download: "Download",
        loading_title: "Processing media",
        loading_desc: "Fetching direct link without watermark...",
        error_title: "Extraction Failed",
        error_desc: "Could not process this link. Please check if the video is public.",
        btn_mp4_title: "Video Without Watermark",
        btn_mp4_desc: "High Definition MP4 Format",
        btn_mp3_title: "Audio MP3",
        btn_mp3_desc: "Original background audio track",
        carousel_btn: "Download",
        card1_badge: "Speed",
        card1_title: "Instant Download",
        card1_desc: "Direct connection to source servers for lightning-fast file delivery.",
        card2_badge: "Photos & Slides",
        card2_title: "Carousel Support",
        card2_desc: "Download all HD images from multi-slide photo posts effortlessly.",
        card3_badge: "Privacy",
        card3_title: "Zero Tracking",
        card3_desc: "No personal data, logs, or search history are ever stored.",
        faq_heading: "Frequently Asked Questions",
        faq_q1: "How to download TikTok videos without watermark?",
        faq_a1: "Copy the video link inside TikTok app, paste it into the search box above and click \"Download\".",
        faq_q2: "Do I need to pay or install any software?",
        faq_a2: "No. TikSave works 100% online directly in your browser on mobile and desktop.",
        toast_started: "Downloading file...",
        toast_completed: "Download finished!",
        toast_paste_error: "Clipboard permission denied.",
        footer_rights: "© 2026 <strong>TikSave</strong> · Free Online Tool",
        footer_home: "Home"
    },
    es: {
        title: "TikSave — Descargar Videos de TikTok Sin Marca de Agua (HD)",
        ad_badge: "Anuncio",
        hero_title: "Descargar videos de TikTok",
        hero_subtitle: "Sin marca de agua, en alta calidad (HD) y directo a tu dispositivo.",
        input_placeholder: "Pega el enlace de TikTok aquí...",
        btn_paste: "Pegar",
        btn_download: "Descargar",
        loading_title: "Procesando publicación",
        loading_desc: "Obteniendo enlace directo sin marca de agua...",
        error_title: "Error al extraer",
        error_desc: "No se pudo procesar este enlace. Comprueba si el video es público.",
        btn_mp4_title: "Video Sin Marca de Agua",
        btn_mp4_desc: "Formato MP4 en Alta Definición",
        btn_mp3_title: "Audio MP3",
        btn_mp3_desc: "Pista de audio original",
        carousel_btn: "Descargar",
        card1_badge: "Velocidad",
        card1_title: "Descarga Inmediata",
        card1_desc: "Conexión directa para una transferencia de archivos ultrarrápida.",
        card2_badge: "Fotos y Diapositivas",
        card2_title: "Soporte para Carrusel",
        card2_desc: "Descarga todas las imágenes de publicaciones de fotos en HD.",
        card3_badge: "Privacidad",
        card3_title: "Sin Rastreo",
        card3_desc: "No se guardan datos personales ni registros de descargas.",
        faq_heading: "Preguntas Frecuentes",
        faq_q1: "¿Cómo descargar videos de TikTok sin marca de agua?",
        faq_a1: "Copia el enlace del video en TikTok, pégalo en el cuadro de búsqueda y haz clic en \"Descargar\".",
        faq_q2: "¿Necesito pagar o instalar alguna app?",
        faq_a2: "No. TikSave funciona completamente en línea desde cualquier navegador.",
        toast_started: "Descargando archivo...",
        toast_completed: "¡Descarga finalizada!",
        toast_paste_error: "Permiso para pegar denegado.",
        footer_rights: "© 2026 <strong>TikSave</strong> · Herramienta Gratuita",
        footer_home: "Inicio"
    }
};

let currentLang = localStorage.getItem('tiksave_lang') || (navigator.language.startsWith('es') ? 'es' : navigator.language.startsWith('en') ? 'en' : 'pt');

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('tiksave_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    // Atualiza elementos de texto
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Atualiza placeholders de input
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Atualiza título da aba
    document.title = translations[lang].title;

    // Atualiza botões ativos
    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Event Listeners dos botões de idioma
document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

// Inicializa idioma no carregamento
setLanguage(currentLang);

// ============================================================
// ELEMENTOS DOM E FLUXO PRINCIPAL
// ============================================================
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
if (!carouselContainer && resultSection) {
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
        showToast(translations[currentLang].toast_paste_error);
    }
});

function showToast(message) {
    const toastText = toastNotification.querySelector('span');
    if (toastText) toastText.textContent = message || translations[currentLang].toast_started;

    toastNotification.classList.remove('hidden');
    void toastNotification.offsetWidth;
    toastNotification.classList.add('show');

    setTimeout(() => {
        toastNotification.classList.remove('show');
        setTimeout(() => toastNotification.classList.add('hidden'), 200);
    }, 3000);
}

// Download Direto via Blob
async function downloadFileDirectly(fileUrl, defaultExt = 'mp4', customPrefix = 'TikSave') {
    showToast(translations[currentLang].toast_started);
    const filename = `${customPrefix}_${Date.now()}.${defaultExt}`;

    try {
        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error('CORS or Network error');

        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const tempAnchor = document.createElement('a');
        tempAnchor.style.display = 'none';
        tempAnchor.href = blobUrl;
        tempAnchor.download = filename;
        document.body.appendChild(tempAnchor);
        tempAnchor.click();

        setTimeout(() => {
            document.body.removeChild(tempAnchor);
            window.URL.revokeObjectURL(blobUrl);
        }, 200);

        showToast(translations[currentLang].toast_completed);
    } catch (err) {
        const fallbackLink = document.createElement('a');
        fallbackLink.href = fileUrl;
        fallbackLink.target = '_blank';
        fallbackLink.download = filename;
        document.body.appendChild(fallbackLink);
        fallbackLink.click();
        document.body.removeChild(fallbackLink);
    }
}

// Submit do Formulário
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = mediaUrlInput.value.trim();
    if (!url) return;

    hideAllStates();
    if (carouselContainer) carouselContainer.innerHTML = '';
    loadingState.classList.remove('hidden');

    try {
        const response = await fetch(`${API_BASE_URL}/api/download`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || translations[currentLang].error_desc);

        const previewBox = videoCover?.closest('.preview-container');
        if (data.cover) {
            videoCover.src = data.cover;
            if (previewBox) previewBox.classList.remove('hidden');
        }

        if (authorName) authorName.textContent = `@${data.author}`;
        if (videoTitle) videoTitle.textContent = data.title;

        // Vídeo Único
        if (!data.isCarousel && data.medias && data.medias.length === 1) {
            const single = data.medias[0];
            btnMp4.classList.remove('hidden');
            btnMp4.onclick = (evt) => {
                evt.preventDefault();
                downloadFileDirectly(single.url, 'mp4', 'TikSave_Video');
            };
        } else if (data.medias && data.medias.length > 1) {
            // Carrossel
            btnMp4.classList.add('hidden');
            data.medias.forEach((item, index) => {
                const btn = document.createElement('button');
                btn.className = 'carousel-btn';
                btn.type = 'button';
                const labelText = `${translations[currentLang].carousel_btn} ${item.label}`;
                btn.innerHTML = `<i class="ph ph-download-simple"></i> <span>${labelText}</span>`;

                const ext = item.type === 'image' ? 'jpg' : 'mp4';
                const prefix = item.type === 'image' ? `TikSave_Foto_${index + 1}` : `TikSave_Video_${index + 1}`;

                btn.onclick = () => downloadFileDirectly(item.url, ext, prefix);
                carouselContainer.appendChild(btn);
            });
        }

        // Áudio MP3
        if (data.audio) {
            btnMp3.classList.remove('hidden');
            btnMp3.onclick = (evt) => {
                evt.preventDefault();
                downloadFileDirectly(data.audio, 'mp3', 'TikSave_Audio');
            };
        } else {
            btnMp3.classList.add('hidden');
        }

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