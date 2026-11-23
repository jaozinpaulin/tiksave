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
        error_desc: "Não foi possível processar este link. Verifique se o conteúdo é público.",
        btn_mp4_title: "Vídeo Sem Marca d'Água",
        btn_mp4_desc: "Formato MP4 em Alta Resolução",
        btn_mp3_title: "Áudio MP3",
        btn_mp3_desc: "Faixa de áudio original",
        merge_time_label: "Tempo de duração por foto:",
        merge_time_auto: "Sincronizar com o áudio completo",
        btn_merge_title: "Gerar Videoclipe",
        btn_merge_desc: "Slideshow sincronizado (MP4)",
        btn_slide: "Baixar Foto",
        btn_download_all: "Baixar Todas as Fotos",
        toast_started: "Download iniciado com sucesso!"
    },
    en: {
        name: "English",
        hero_title: "Download TikTok Videos",
        hero_subtitle: "No watermark, high quality, and straight to your device.",
        input_placeholder: "Paste TikTok link here...",
        btn_paste: "Paste",
        btn_download: "Download",
        loading_title: "Processing post",
        loading_desc: "Fetching direct link...",
        error_title: "Extraction Failed",
        error_desc: "Could not process this link. Please ensure content is public.",
        btn_mp4_title: "Video Without Watermark",
        btn_mp4_desc: "High Resolution MP4 format",
        btn_mp3_title: "MP3 Audio",
        btn_mp3_desc: "Original audio track",
        merge_time_label: "Duration per photo:",
        merge_time_auto: "Sync with full audio length",
        btn_merge_title: "Create Music Video",
        btn_merge_desc: "Synchronized Slideshow (MP4)",
        btn_slide: "Download Photo",
        btn_download_all: "Download All Photos",
        toast_started: "Download started successfully!"
    }
};

function detectLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && translations[langParam]) return langParam;

    const saved = localStorage.getItem('tikdownload_lang');
    if (saved && translations[saved]) return saved;

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

    const langBtn = document.getElementById('langDropdownBtn');
    const langMenu = document.getElementById('langDropdownMenu');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        langMenu.classList.add('hidden');
    });

    document.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', () => {
            applyLanguage(item.getAttribute('data-lang'));
            langMenu.classList.add('hidden');
        });
    });

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
    const btnMerge = document.getElementById('btnMerge');
    const mergeOptions = document.getElementById('mergeOptions');
    const mergeTimeSelect = document.getElementById('mergeTimeSelect');
    const btnMergeTitle = document.getElementById('btnMergeTitle');
    const carouselItems = document.getElementById('carouselItems');
    const toast = document.getElementById('toastNotification');

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

        try {
            const proxyUrl = `/api/file-download?type=${encodeURIComponent(type)}&filename=${encodeURIComponent(filename)}&mediaUrl=${encodeURIComponent(fullUrl)}`;
            const proxyResp = await fetch(proxyUrl);
            if (proxyResp.ok) {
                const b = await proxyResp.blob();
                if (b.size > 200) blob = b;
            }
        } catch (err) {
            console.warn('Proxy falhou:', err);
        }

        if (!blob) {
            try {
                const resp = await fetch(fullUrl);
                if (resp.ok) {
                    const b = await resp.blob();
                    if (b.size > 200) blob = b;
                }
            } catch (e) { }
        }

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

        window.open(fullUrl, '_blank');
    }

    async function executeMergeDownload(imagesArray, audioUrl, filename, timeOption) {
        const originalHtml = btnMerge.innerHTML;

        btnMerge.innerHTML = `
            <div class="spinner" style="width: 20px; height: 20px; border-width: 2px; border-top-color: var(--accent-blue); flex-shrink: 0;"></div>
            <div class="dl-button-text">
                <strong>Processando Vídeo...</strong>
                <small>Isso pode levar alguns segundos</small>
            </div>
        `;
        btnMerge.disabled = true;
        btnMerge.style.opacity = '0.7';
        btnMerge.style.cursor = 'wait';

        try {
            const response = await fetch('/api/merge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ images: imagesArray, audioUrl, filename, timeOption })
            });

            if (!response.ok) throw new Error('Erro ao processar o vídeo no servidor.');

            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();

            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(blobUrl);
            }, 3000);

            showToast('toast_started');
        } catch (error) {
            console.error('Erro no Merge:', error);
            alert('Falha ao mesclar o vídeo. Verifique se as imagens ou áudio estão disponíveis.');
        } finally {
            btnMerge.innerHTML = originalHtml;
            btnMerge.disabled = false;
            btnMerge.style.opacity = '1';
            btnMerge.style.cursor = 'pointer';
        }
    }

    async function downloadAllImages(images) {
        showToast('toast_started');
        for (let i = 0; i < images.length; i++) {
            const imgUrl = typeof images[i] === 'string' ? images[i] : images[i].url;
            await executeDownload(imgUrl, `tiktok_photo_${i + 1}.jpg`, 'image');
            if (i < images.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 600));
            }
        }
    }

    downloadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = tiktokUrlInput.value.trim();
        if (!url) return;

        if (!url.includes('tiktok.com') && !url.includes('douyin.com')) {
            alert('Por favor, insira um link válido do TikTok.');
            return;
        }

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
            const response = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
            const json = await response.json();

            if (json.code === 0 && json.data) {
                const item = json.data;
                const t = translations[currentLanguage] || translations.pt;

                authorName.textContent = item.author ? `@${item.author.unique_id || item.author.nickname || item.author}` : '@tiktok';
                videoTitle.textContent = item.title || 'TikTok Mídia';

                const musicUrl = item.music || item.music_info?.play;

                if (!item.images || item.images.length === 0) {
                    const videoUrl = item.play || item.wmplay;
                    resultSection.classList.remove('is-carousel');

                    if (videoCoverBox) {
                        videoCoverBox.classList.remove('hidden');
                        if (videoCover && videoPlayer) {
                            videoCover.classList.add('hidden');
                            videoPlayer.classList.remove('hidden');
                            videoPlayer.src = videoUrl;
                            videoPlayer.load();

                            videoPlayer.onerror = () => {
                                videoPlayer.classList.add('hidden');
                                videoCover.classList.remove('hidden');
                                videoCover.src = item.cover || '';
                            };
                        }
                    }

                    btnMp4.parentElement.classList.remove('hidden');
                    btnMp4.classList.remove('hidden');
                    btnMerge.classList.add('hidden');
                    mergeOptions.classList.add('hidden');
                    carouselItems.innerHTML = '';

                    btnMp4.onclick = (ev) => {
                        ev.preventDefault();
                        executeDownload(videoUrl, `tiktok_video_${Date.now()}.mp4`, 'video');
                    };

                    if (musicUrl) {
                        btnMp3.classList.remove('hidden');
                        btnMp3.onclick = (ev) => {
                            ev.preventDefault();
                            executeDownload(musicUrl, `tiktok_audio_${Date.now()}.mp3`, 'mp3');
                        };
                    } else {
                        btnMp3.classList.add('hidden');
                    }

                } else {
                    resultSection.classList.add('is-carousel');

                    if (videoCoverBox) {
                        videoCoverBox.classList.remove('hidden');
                        videoCover.classList.remove('hidden');
                        videoPlayer.classList.add('hidden');
                        videoCover.src = item.images[0];
                    }

                    btnMp4.parentElement.classList.remove('hidden');
                    btnMp4.classList.add('hidden');
                    carouselItems.innerHTML = '';

                    let selectedImages = [...item.images];

                    const updateMergeButtonText = () => {
                        const baseTitle = t.btn_merge_title || 'Gerar Videoclipe';
                        btnMergeTitle.textContent = `${baseTitle} (${selectedImages.length})`;
                    };

                    if (musicUrl) {
                        btnMp3.classList.remove('hidden');
                        btnMp3.onclick = (ev) => {
                            ev.preventDefault();
                            executeDownload(musicUrl, `tiktok_audio_${Date.now()}.mp3`, 'mp3');
                        };

                        btnMerge.classList.remove('hidden');
                        mergeOptions.classList.remove('hidden');
                        updateMergeButtonText();

                        btnMerge.onclick = (ev) => {
                            ev.preventDefault();
                            if (selectedImages.length === 0) {
                                alert('Selecione pelo menos uma foto no carrossel abaixo.');
                                return;
                            }
                            const chosenTime = mergeTimeSelect.value;
                            executeMergeDownload(selectedImages, musicUrl, `tiktok_slideshow_${Date.now()}.mp4`, chosenTime);
                        };
                    } else {
                        btnMp3.classList.add('hidden');
                        btnMerge.classList.add('hidden');
                        mergeOptions.classList.add('hidden');
                    }

                    const slideText = t.btn_slide || 'Baixar Foto';
                    const downloadAllText = t.btn_download_all || 'Baixar Todas as Fotos';

                    const topBar = document.createElement('div');
                    topBar.className = 'carousel-top-bar';
                    topBar.innerHTML = `
                        <div class="carousel-actions-row">
                            <button type="button" class="btn-download-all" id="btnDownloadAll">
                                <i class="ph ph-folder-arrow-down"></i>
                                <span>${downloadAllText} (${item.images.length})</span>
                            </button>
                        </div>
                    `;

                    carouselItems.appendChild(topBar);
                    topBar.querySelector('#btnDownloadAll').onclick = () => downloadAllImages(item.images);

                    const gridContainer = document.createElement('div');
                    gridContainer.className = 'carousel-grid';

                    item.images.forEach((photoUrl, index) => {
                        const card = document.createElement('div');
                        card.className = 'carousel-card is-selected';
                        card.innerHTML = `
                            <div class="carousel-preview" title="Clique para selecionar/remover do videoclipe">
                                <img src="${photoUrl}" alt="Foto ${index + 1}" loading="lazy">
                                <span class="carousel-badge">#${index + 1}</span>
                                <div class="check-indicator"><i class="ph ph-check-bold"></i></div>
                            </div>
                            <button type="button" class="carousel-btn">
                                <i class="ph ph-download-simple"></i>
                                <span>${slideText} ${index + 1}</span>
                            </button>
                        `;

                        const previewElement = card.querySelector('.carousel-preview');
                        previewElement.onclick = (ev) => {
                            ev.stopPropagation();
                            const isSelected = card.classList.toggle('is-selected');

                            if (isSelected) {
                                if (!selectedImages.includes(photoUrl)) selectedImages.push(photoUrl);
                            } else {
                                selectedImages = selectedImages.filter(url => url !== photoUrl);
                            }

                            selectedImages.sort((a, b) => item.images.indexOf(a) - item.images.indexOf(b));
                            updateMergeButtonText();
                        };

                        card.querySelector('.carousel-btn').onclick = (ev) => {
                            ev.preventDefault();
                            executeDownload(photoUrl, `tiktok_photo_${index + 1}.jpg`, 'image');
                        };

                        gridContainer.appendChild(card);
                    });

                    carouselItems.appendChild(gridContainer);
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