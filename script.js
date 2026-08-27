/**
 * TikDownload - Frontend Controller & Multi-Language Engine (12 Languages)
 */

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
        btn_mp3_title: "Áudio MP3",
        btn_mp3_desc: "Faixa de áudio original",
        btn_slide: "Baixar Foto",
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
        footer_rights: "© 2026 <strong>TikDownload</strong> · Ferramenta Gratuita",
        ad_badge: "Publicidade",
        ad_grid_title: "Recomendações em Destaque"
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
        btn_mp3_title: "MP3 Audio",
        btn_mp3_desc: "Original audio track",
        btn_slide: "Download Photo",
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
        footer_rights: "© 2026 <strong>TikDownload</strong> · Free Online Tool",
        ad_badge: "Advertisement",
        ad_grid_title: "Featured Recommendations"
    },
    es: {
        name: "Español",
        hero_title: "Descargar Videos de TikTok",
        hero_subtitle: "Sin marca de agua, en alta calidad y directo a tu dispositivo.",
        input_placeholder: "Pega el enlace de TikTok aquí...",
        btn_paste: "Pegar",
        btn_download: "Descargar",
        loading_title: "Procesando publicación",
        loading_desc: "Obteniendo enlace directo sin marca de agua...",
        error_title: "Error al extraer",
        error_desc: "No se pudo procesar este enlace. Verifica que el video sea público.",
        btn_mp4_title: "Video Sin Marca de Agua",
        btn_mp4_desc: "Formato MP4 en Alta Definición",
        btn_mp3_title: "Audio MP3",
        btn_mp3_desc: "Pista de audio original",
        btn_slide: "Descargar Foto",
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
        footer_rights: "© 2026 <strong>TikDownload</strong> · Herramienta Gratuita",
        ad_badge: "Publicidad",
        ad_grid_title: "Recomendaciones Destacadas"
    },
    fr: {
        name: "Français",
        hero_title: "Télécharger Vidéos TikTok",
        hero_subtitle: "Sans filigrane, en haute qualité et directement sur votre appareil.",
        input_placeholder: "Collez le lien TikTok ici...",
        btn_paste: "Coller",
        btn_download: "Télécharger",
        loading_title: "Traitement en cours",
        loading_desc: "Recherche du lien sans filigrane...",
        error_title: "Échec de l'extraction",
        error_desc: "Impossible de traiter ce lien. Vérifiez que la vidéo est publique.",
        btn_mp4_title: "Vidéo Sans Filigrane",
        btn_mp4_desc: "Format MP4 Haute Définition",
        btn_mp3_title: "Audio MP3",
        btn_mp3_desc: "Piste audio originale",
        btn_slide: "Télécharger Photo",
        card1_badge: "Vidéos HD",
        card1_title: "Qualité Originale",
        card1_desc: "Téléchargez des vidéos sans filigrane au format MP4 sans compression.",
        card2_badge: "Photos",
        card2_title: "Carrousel Complet",
        card2_desc: "Enregistrez toutes les images des carrousels en haute résolution.",
        card3_badge: "Audio",
        card3_title: "Convertisseur MP3",
        card3_desc: "Extrayez la piste audio de n'importe quelle vidéo instantanément.",
        faq_heading: "Foire Aux Questions",
        faq_q1: "Comment télécharger des vidéos TikTok sans filigrane ?",
        faq_a1: "Copiez le lien de la vidéo sur TikTok, collez-le ci-dessus et cliquez sur 'Télécharger'.",
        faq_q2: "Puis-je télécharger les photos d'un carrousel en HD ?",
        faq_a2: "Oui ! TikDownload permet de télécharger chaque photo du diaporama individuellement en HD.",
        faq_q3: "Dois-je payer ou installer une application ?",
        faq_a3: "Non. TikDownload est 100% gratuit et s'utilise directement dans le navigateur.",
        toast_started: "Téléchargement lancé !",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Outil Gratuit",
        ad_badge: "Publicité",
        ad_grid_title: "Recommandations"
    },
    de: {
        name: "Deutsch",
        hero_title: "TikTok Videos Herunterladen",
        hero_subtitle: "Ohne Wasserzeichen, in hoher Qualität direkt auf Ihr Gerät.",
        input_placeholder: "TikTok-Link hier einfügen...",
        btn_paste: "Einfügen",
        btn_download: "Herunterladen",
        loading_title: "Wird verarbeitet",
        loading_desc: "Direktlink ohne Wasserzeichen wird gesucht...",
        error_title: "Fehler beim Extrahieren",
        error_desc: "Link konnte nicht verarbeitet werden. Bitte prüfen Sie, ob das Video öffentlich ist.",
        btn_mp4_title: "Video Ohne Wasserzeichen",
        btn_mp4_desc: "MP4-Format in HD",
        btn_mp3_title: "MP3 Audio",
        btn_mp3_desc: "Originalton herunterladen",
        btn_slide: "Foto Speichern",
        card1_badge: "HD-Videos",
        card1_title: "Originalqualität",
        card1_desc: "Laden Sie Videos ohne Wasserzeichen im originalen MP4-Format herunter.",
        card2_badge: "Fotos",
        card2_title: "Komplettes Karussell",
        card2_desc: "Speichern Sie alle Bilder von mehrteiligen Fotoposts in HD.",
        card3_badge: "Audio",
        card3_title: "MP3-Konverter",
        card3_desc: "Extrahieren Sie den Originalton jedes Videos sofort im MP3-Format.",
        faq_heading: "Häufig gestellte Fragen",
        faq_q1: "Wie lade ich TikTok-Videos ohne Wasserzeichen herunter?",
        faq_a1: "Link in der TikTok-App kopieren, oben einfügen und auf 'Herunterladen' klicken.",
        faq_q2: "Kann ich Karussell-Fotos in HD speichern?",
        faq_a2: "Ja! TikDownload erkennt Fotobeiträge und ermöglicht den Download jedes einzelnen Bildes.",
        faq_q3: "Muss ich etwas bezahlen oder installieren?",
        faq_a3: "Nein. TikDownload ist 100% kostenlos und läuft direkt im Browser.",
        toast_started: "Download erfolgreich gestartet!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Kostenloses Tool",
        ad_badge: "Werbung",
        ad_grid_title: "Empfehlungen"
    },
    it: {
        name: "Italiano",
        hero_title: "Scarica Video da TikTok",
        hero_subtitle: "Senza filigrana, in alta qualità e direttamente sul tuo dispositivo.",
        input_placeholder: "Incolla qui il link di TikTok...",
        btn_paste: "Incolla",
        btn_download: "Scarica",
        loading_title: "Elaborazione in corso",
        loading_desc: "Ricerca del link diretto senza filigrana...",
        error_title: "Estrazione fallita",
        error_desc: "Impossibile elaborare il link. Assicurati che il video sia pubblico.",
        btn_mp4_title: "Video Senza Filigrana",
        btn_mp4_desc: "Formato MP4 in Alta Risoluzione",
        btn_mp3_title: "Audio MP3",
        btn_mp3_desc: "Traccia audio originale",
        btn_slide: "Scarica Foto",
        card1_badge: "Video HD",
        card1_title: "Qualità Originale",
        card1_desc: "Scarica video senza watermark in formato MP4 originale senza perdita di qualità.",
        card2_badge: "Foto",
        card2_title: "Carosello Completo",
        card2_desc: "Estrai e salva tutte le immagini dei post carosello in alta risoluzione.",
        card3_badge: "Audio",
        card3_title: "Convertitore MP3",
        card3_desc: "Estrai e salva l'audio virale da qualsiasi video immediatamente in MP3.",
        faq_heading: "Domande Frequenti",
        faq_q1: "Come scaricare video TikTok senza filigrana?",
        faq_a1: "Copia il link da TikTok, incollalo sopra e clicca su 'Scarica'.",
        faq_q2: "È possibile scaricare le foto carosello in HD?",
        faq_a2: "Sì! TikDownload mostra pulsanti individuali per salvare ogni singola foto in HD.",
        faq_q3: "Devo pagare o installare un'app?",
        faq_a3: "No. TikDownload funziona al 100% online gratis nel browser.",
        toast_started: "Download avviato con successo!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Strumento Gratuito",
        ad_badge: "Pubblicità",
        ad_grid_title: "In Evidenza"
    },
    id: {
        name: "Bahasa Indonesia",
        hero_title: "Download Video TikTok",
        hero_subtitle: "Tanpa watermark, kualitas tinggi, langsung ke perangkat Anda.",
        input_placeholder: "Tempel tautan TikTok di sini...",
        btn_paste: "Tempel",
        btn_download: "Download",
        loading_title: "Memproses postingan",
        loading_desc: "Mengambil tautan langsung tanpa watermark...",
        error_title: "Gagal Mengekstrak",
        error_desc: "Tidak dapat memproses tautan ini. Pastikan video bersifat publik.",
        btn_mp4_title: "Video Tanpa Watermark",
        btn_mp4_desc: "Format MP4 Resolusi Tinggi",
        btn_mp3_title: "Audio MP3",
        btn_mp3_desc: "Musik audio asli",
        btn_slide: "Download Foto",
        card1_badge: "Video HD",
        card1_title: "Kualitas Asli",
        card1_desc: "Download video tanpa watermark dalam format MP4 asli tanpa kompresi.",
        card2_badge: "Foto",
        card2_title: "Slide Carousel",
        card2_desc: "Ekstrak dan simpan semua gambar slide foto dalam kualitas HD.",
        card3_badge: "Audio",
        card3_title: "Konverter MP3",
        card3_desc: "Ekstrak musik latar belakang dari video langsung ke format MP3.",
        faq_heading: "Pertanyaan Umum",
        faq_q1: "Bagaimana cara download video TikTok tanpa watermark?",
        faq_a1: "Salin tautan video di aplikasi TikTok, tempel di atas dan klik 'Download'.",
        faq_q2: "Bisakah download foto carousel dalam HD?",
        faq_a2: "Ya! TikDownload menyediakan tombol untuk mengunduh setiap slide foto dalam HD.",
        faq_q3: "Apakah perlu membayar atau instal aplikasi?",
        faq_a3: "Tidak. TikDownload 100% gratis dan berjalan langsung di browser.",
        toast_started: "Download berhasil dimulai!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Alat Gratis",
        ad_badge: "Iklan",
        ad_grid_title: "Rekomendasi Pilihan"
    },
    tr: {
        name: "Türkçe",
        hero_title: "TikTok Video İndir",
        hero_subtitle: "Filigransız, yüksek kaliteli ve doğrudan cihazınıza.",
        input_placeholder: "TikTok bağlantısını buraya yapıştırın...",
        btn_paste: "Yapıştır",
        btn_download: "İndir",
        loading_title: "İşleniyor",
        loading_desc: "Filigransız doğrudan bağlantı alınıyor...",
        error_title: "Çıkarma Başarısız",
        error_desc: "Bu bağlantı işlenemedi. Lütfen videonun herkese açık olduğundan emin olun.",
        btn_mp4_title: "Filigransız Video",
        btn_mp4_desc: "Yüksek Çözünürlüklü MP4",
        btn_mp3_title: "MP3 Ses",
        btn_mp3_desc: "Orijinal ses parçası",
        btn_slide: "Fotoğraf İndir",
        card1_badge: "HD Videolar",
        card1_title: "Orijinal Kalite",
        card1_desc: "Videoları filigransız orijinal MP4 formatında kayıpsız indirin.",
        card2_badge: "Fotoğraflar",
        card2_title: "Kaydırmalı Gönderi",
        card2_desc: "Çoklu fotoğraf gönderilerindeki tüm HD resimleri tek tek indirin.",
        card3_badge: "Ses",
        card3_title: "MP3 Dönüştürücü",
        card3_desc: "Herhangi bir videonun ses parçasını anında MP3 olarak ayıklayın.",
        faq_heading: "Sıkça Sorulan Sorular",
        faq_q1: "TikTok videosu filigransız nasıl indirilir?",
        faq_a1: "TikTok uygulamasında bağlantıyı kopyalayın, yukarıya yapıştırın ve 'İndir'e tıklayın.",
        faq_q2: "Kaydırmalı fotoğraflar HD olarak indirilebilir mi?",
        faq_a2: "Evet! TikDownload slayt fotoğraflarını algılar ve her birini tek tek kaydetmenizi sağlar.",
        faq_q3: "Ücret ödemem veya uygulama yüklemem gerekir mi?",
        faq_a3: "Hayır. TikDownload tarayıcınızda %100 ücretsiz çalışır.",
        toast_started: "İndirme başarıyla başlatıldı!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Ücretsiz Araç",
        ad_badge: "Reklam",
        ad_grid_title: "Öne Çıkanlar"
    },
    ru: {
        name: "Русский",
        hero_title: "Скачать видео с TikTok",
        hero_subtitle: "Без водяного знака, в высоком качестве прямо на устройство.",
        input_placeholder: "Вставьте ссылку на TikTok...",
        btn_paste: "Вставить",
        btn_download: "Скачать",
        loading_title: "Обработка публикации",
        loading_desc: "Поиск прямой ссылки без водяного знака...",
        error_title: "Ошибка извлечения",
        error_desc: "Не удалось обработать ссылку. Убедитесь, что видео общедоступно.",
        btn_mp4_title: "Видео Без Водяного Знака",
        btn_mp4_desc: "Формат MP4 в высоком разрешении",
        btn_mp3_title: "Аудио MP3",
        btn_mp3_desc: "Оригинальная звуковая дорожка",
        btn_slide: "Скачать фото",
        card1_badge: "HD Видео",
        card1_title: "Оригинальное качество",
        card1_desc: "Скачивайте видео без логотипа в оригинальном формате MP4.",
        card2_badge: "Фото",
        card2_title: "Карусель фото",
        card2_desc: "Скачивайте все фото из многостраничных постов в HD качестве.",
        card3_badge: "Аудио",
        card3_title: "Конвертер в MP3",
        card3_desc: "Извлекайте фоновую музыку из любого видео прямо в MP3.",
        faq_heading: "Частые вопросы",
        faq_q1: "Как скачать видео с TikTok без водяного знака?",
        faq_a1: "Скопируйте ссылку в приложении TikTok, вставьте её выше и нажмите 'Скачать'.",
        faq_q2: "Можно ли скачать фото из карусели в HD?",
        faq_a2: "Да! TikDownload позволяет скачивать каждую фотографию слайда отдельно в HD.",
        faq_q3: "Нужно ли платить или устанавливать программы?",
        faq_a3: "Нет. Сервис работает бесплатно прямо в браузере.",
        toast_started: "Загрузка началась!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Бесплатный сервис",
        ad_badge: "Реклама",
        ad_grid_title: "Рекомендации"
    },
    ar: {
        name: "العربية",
        hero_title: "تحميل مقاطع تيك توك",
        hero_subtitle: "بدون علامة مائية وبجودة عالية مباشرة إلى جهازك.",
        input_placeholder: "الصق رابط تيك توك هنا...",
        btn_paste: "لصق",
        btn_download: "تحميل",
        loading_title: "جارٍ المعالجة",
        loading_desc: "البحث عن رابط مباشر بدون علامة مائية...",
        error_title: "فشل الاستخراج",
        error_desc: "تعذر معالجة هذا الرابط. يرجى التأكد من أن الفيديو عام.",
        btn_mp4_title: "فيديو بدون علامة مائية",
        btn_mp4_desc: "صيغة MP4 بجودة عالية",
        btn_mp3_title: "صوت MP3",
        btn_mp3_desc: "المقطع الصوتي الأصلي",
        btn_slide: "تحميل الصورة",
        card1_badge: "فيديو HD",
        card1_title: "جودة أصلية",
        card1_desc: "قم بتنزيل مقاطع الفيديو بدون علامة مائية وبدون ضغط.",
        card2_badge: "الصور",
        card2_title: "ألبومات الصور",
        card2_desc: "احفظ جميع صور المنشورات المتعددة بدقة عالية.",
        card3_badge: "الصوت",
        card3_title: "محول MP3",
        card3_desc: "استخرج المسار الصوتي لأي فيديو مباشرة بصيغة MP3.",
        faq_heading: "الأسئلة الشائعة",
        faq_q1: "كيف أقوم بتحميل فيديو تيك توك بدون علامة مائية؟",
        faq_a1: "انسخ رابط الفيديو من تطبيق TikTok، والصقه في المربع أعلاه واضغط على 'تحميل'.",
        faq_q2: "هل يمكن تحميل صور الألبوم بجودة عالية؟",
        faq_a2: "نعم! يتيح لك الموقع حفظ كل صورة من الألبوم بشكل منفصل بدقة أصلية.",
        faq_q3: "هل يجب علي دفع رسوم أو تثبيت تطبيق؟",
        faq_a3: "لا. الموقع مجاني تماماً ويعمل مباشرة عبر المتصفح.",
        toast_started: "بدأ التحميل بنجاح!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · أداة مجانية",
        ad_badge: "إعلان",
        ad_grid_title: "إعلانات مميزة"
    },
    hi: {
        name: "हिन्दी",
        hero_title: "टिकटॉक वीडियो डाउनलोड करें",
        hero_subtitle: "बिना वॉटरमार्क, हाई क्वालिटी में सीधे अपने डिवाइस पर।",
        input_placeholder: "टिकटॉक लिंक यहाँ पेस्ट करें...",
        btn_paste: "पेस्ट",
        btn_download: "डाउनलोड",
        loading_title: "प्रोसेस हो रहा है",
        loading_desc: "बिना वॉटरमार्क सीधा लिंक खोजा जा रहा है...",
        error_title: "डाउनलोड विफल",
        error_desc: "लिंक प्रोसेस नहीं हो सका। कृपया जांचें कि वीडियो सार्वजनिक है।",
        btn_mp4_title: "बिना वॉटरमार्क वीडियो",
        btn_mp4_desc: "HD MP4 फॉर्मेट",
        btn_mp3_title: "MP3 ऑडियो",
        btn_mp3_desc: "ओरिजिनल ऑडियो ट्रैक",
        btn_slide: "फोटो डाउनलोड करें",
        card1_badge: "HD वीडियो",
        card1_title: "मूल गुणवत्ता",
        card1_desc: "बिना किसी कम्प्रेशन के ओरिजिनल MP4 फॉर्मेट में वीडियो डाउनलोड करें।",
        card2_badge: "तस्वीरें",
        card2_title: "फोटो कैरोजल",
        card2_desc: "मल्टी-फोटो पोस्ट की सभी तस्वीरों को HD में अलग-अलग डाउनलोड करें।",
        card3_badge: "ऑडियो",
        card3_title: "MP3 कनवर्टर",
        card3_desc: "किसी भी वीडियो के साउंडट्रैक को सीधे MP3 में बदलें।",
        faq_heading: "अक्सर पूछे जाने वाले प्रश्न",
        faq_q1: "बिना वॉटरमार्क टिकटॉक वीडियो कैसे डाउनलोड करें?",
        faq_a1: "TikTok ऐप में लिंक कॉपी करें, ऊपर पेस्ट करें और 'डाउनलोड' पर क्लिक करें।",
        faq_q2: "क्या कैरोजल फोटो HD में डाउनलोड हो सकती हैं?",
        faq_a2: "हाँ! TikDownload हर फोटो को अलग से HD में डाउनलोड करने का विकल्प देता है।",
        faq_q3: "क्या मुझे भुगतान या ऐप इंस्टॉल करने की आवश्यकता है?",
        faq_a3: "नहीं। यह पूरी तरह से मुफ्त है और ब्राउज़र में काम करता है।",
        toast_started: "डाउनलोड सफलतापूर्वक शुरू हुआ!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · मुफ़्त टूल",
        ad_badge: "विज्ञापन",
        ad_grid_title: "खास सुझाव"
    },
    ja: {
        name: "日本語",
        hero_title: "TikTok 動画 保存",
        hero_subtitle: "透かし（ロゴ）なし、高画質でデバイスに直接ダウンロード。",
        input_placeholder: "TikTokのリンクを貼り付け...",
        btn_paste: "貼付",
        btn_download: "保存",
        loading_title: "処理中",
        loading_desc: "透かしなしのリンクを取得しています...",
        error_title: "取得に失敗しました",
        error_desc: "リンクを処理できませんでした。動画が公開されているか確認してください。",
        btn_mp4_title: "透かしなし動画",
        btn_mp4_desc: "高画質 MP4 フォーマット",
        btn_mp3_title: "MP3 音声のみ",
        btn_mp3_desc: "オリジナル音源",
        btn_slide: "写真を保存",
        card1_badge: "HD動画",
        card1_title: "オリジナル画質",
        card1_desc: "劣化なしのオリジナルMP4フォーマットで動画を保存できます。",
        card2_badge: "写真",
        card2_title: "複数写真対応",
        card2_desc: "スライドショーの全画像をHD画質で1枚ずつ保存可能。",
        card3_badge: "音声",
        card3_title: "MP3変換",
        card3_desc: "動画の音源やBGMをMP3として直接保存します。",
        faq_heading: "よくある質問",
        faq_q1: "ロゴなしでTikTok動画を保存する方法は？",
        faq_a1: "TikTokアプリでリンクをコピーし、上に貼り付けて「保存」をクリックします。",
        faq_q2: "複数写真のスライドをHDで保存できますか？",
        faq_a2: "はい！すべての写真を個別にHD画質で保存できます。",
        faq_q3: "料金やアプリのインストールは必要ですか？",
        faq_a3: "いいえ。ブラウザ上ですべて完全無料で動作します。",
        toast_started: "ダウンロードを開始しました！",
        footer_rights: "© 2026 <strong>TikDownload</strong> · 無料ツール",
        ad_badge: "広告",
        ad_grid_title: "おすすめ広告"
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

    // Dropdown de Idiomas
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

    // Modal Intersticial (1 Anúncio)
    const modalOverlay = document.getElementById('adModalOverlay');
    const closeBtn = document.getElementById('closeAdModal');
    const countdownNumber = document.getElementById('countdownNumber');

    if (modalOverlay && closeBtn) {
        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.add('hidden-modal');
        });
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.add('hidden-modal');
            }
        });
    }

    // Card Fixo Retrátil no Rodapé (4 Anúncios)
    const stickyAdBar = document.getElementById('stickyAdBar');
    const toggleStickyAd = document.getElementById('toggleStickyAd');

    if (toggleStickyAd && stickyAdBar) {
        toggleStickyAd.addEventListener('click', () => {
            stickyAdBar.classList.toggle('collapsed');
        });
    }

    // Elementos do Formulário
    const downloadForm = document.getElementById('downloadForm');
    const tiktokUrlInput = document.getElementById('tiktokUrl');
    const clearBtn = document.getElementById('clearBtn');
    const pasteBtn = document.getElementById('pasteBtn');
    const submitBtn = document.getElementById('submitBtn');
    const loadingState = document.getElementById('loading');
    const errorState = document.getElementById('errorMessage');
    const resultSection = document.getElementById('result');

    const videoCover = document.getElementById('videoCover');
    const authorName = document.getElementById('authorName');
    const videoTitle = document.getElementById('videoTitle');
    const btnMp4 = document.getElementById('btnMp4');
    const btnMp3 = document.getElementById('btnMp3');
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

    function showToast() {
        if (!toast) return;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
    }

    async function executeDownload(url, filename) {
        showToast();
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(blobUrl);
            document.body.removeChild(a);
        } catch (e) {
            window.open(url, '_blank');
        }
    }

    function triggerSmartDownload(url, filename) {
        if (modalOverlay) {
            modalOverlay.classList.remove('hidden-modal');
            let timeLeft = 3;
            if (countdownNumber) countdownNumber.textContent = timeLeft;

            const countdownInterval = setInterval(() => {
                timeLeft--;
                if (countdownNumber) countdownNumber.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(countdownInterval);
                    modalOverlay.classList.add('hidden-modal');
                    executeDownload(url, filename);
                }
            }, 1000);
        } else {
            executeDownload(url, filename);
        }
    }

    // Requisição à API TikWM
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

                videoCover.src = item.cover || item.origin_cover || '';
                authorName.textContent = item.author ? `@${item.author.unique_id || item.author.nickname}` : '@tiktok';
                videoTitle.textContent = item.title || 'TikTok Video';

                // Post de Fotos / Slides
                if (item.images && item.images.length > 0) {
                    btnMp4.parentElement.classList.add('hidden');
                    carouselItems.innerHTML = '';

                    const slideText = translations[currentLanguage].btn_slide || 'Baixar Foto';

                    item.images.forEach((imgUrl, index) => {
                        const btn = document.createElement('button');
                        btn.className = 'carousel-btn';
                        btn.innerHTML = `<i class="ph ph-image"></i> ${slideText} ${index + 1}`;
                        btn.onclick = () => triggerSmartDownload(imgUrl, `tikdownload_photo_${index + 1}.jpg`);
                        carouselItems.appendChild(btn);
                    });
                } else {
                    btnMp4.parentElement.classList.remove('hidden');
                    carouselItems.innerHTML = '';

                    const videoUrl = item.play || item.wmplay;
                    const musicUrl = item.music || item.music_info?.play;

                    btnMp4.onclick = (ev) => {
                        ev.preventDefault();
                        triggerSmartDownload(videoUrl, `tikdownload_${item.id || 'video'}.mp4`);
                    };

                    if (musicUrl) {
                        btnMp3.classList.remove('hidden');
                        btnMp3.onclick = (ev) => {
                            ev.preventDefault();
                            triggerSmartDownload(musicUrl, `tikdownload_audio_${item.id || 'audio'}.mp3`);
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