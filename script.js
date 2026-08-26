/**
 * TikDownload - Frontend Controller & Multi-Language Engine (12 Languages)
 */

const translations = {
    pt: {
        name: "Português",
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
        btn_slide: "Baixar Foto",
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
        faq_a1: "Copie o link do vídeo no aplicativo do TikTok, cole na caixa de busca acima e clique em 'Baixar'.",
        faq_q2: "Preciso pagar ou instalar algum aplicativo?",
        faq_a2: "Não. O TikDownload funciona de forma totalmente online no navegador de qualquer celular ou PC.",
        toast_started: "Download iniciado com sucesso!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Ferramenta Gratuita",
        footer_home: "Início",
        ad_badge: "Patrocinado & Recomendações"
    },
    en: {
        name: "English",
        hero_title: "Download TikTok Videos",
        hero_subtitle: "No watermark, high quality (HD), and straight to your device.",
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
        faq_a1: "Copy the video link inside TikTok app, paste it into the search box above and click 'Download'.",
        faq_q2: "Do I need to pay or install any software?",
        faq_a2: "No. TikDownload works 100% online directly in your browser on mobile and desktop.",
        toast_started: "Download started successfully!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Free Online Tool",
        footer_home: "Home",
        ad_badge: "Sponsored & Recommendations"
    },
    es: {
        name: "Español",
        hero_title: "Descargar Videos de TikTok",
        hero_subtitle: "Sin marca de agua, en alta calidad (HD) y directo a tu dispositivo.",
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
        card1_badge: "Velocidad",
        card1_title: "Descarga Instantánea",
        card1_desc: "Conexión directa a los servidores para una entrega ultrarrápida.",
        card2_badge: "Fotos y Diapositivas",
        card2_title: "Soporte para Carrusel",
        card2_desc: "Descarga todas las imágenes de publicaciones de fotos múltiples en HD.",
        card3_badge: "Privacidad",
        card3_title: "Sin Rastreo",
        card3_desc: "No se guardan datos personales ni historial de descargas.",
        faq_heading: "Preguntas Frecuentes",
        faq_q1: "¿Cómo descargar videos de TikTok sin marca de agua?",
        faq_a1: "Copia el enlace en TikTok, pégalo en la barra de búsqueda arriba y haz clic en 'Descargar'.",
        faq_q2: "¿Necesito pagar o instalar alguna app?",
        faq_a2: "No. TikDownload funciona de forma 100% online en cualquier navegador móvil o PC.",
        toast_started: "¡Descarga iniciada con éxito!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Herramienta Gratuita",
        footer_home: "Inicio",
        ad_badge: "Patrocinado y Recomendaciones"
    },
    fr: {
        name: "Français",
        hero_title: "Télécharger Vidéos TikTok",
        hero_subtitle: "Sans filigrane, en haute définition (HD) et directement sur votre appareil.",
        input_placeholder: "Collez le lien TikTok ici...",
        btn_paste: "Coller",
        btn_download: "Télécharger",
        loading_title: "Traitement en cours",
        loading_desc: "Recherche du lien direct sans filigrane...",
        error_title: "Échec de l'extraction",
        error_desc: "Impossible de traiter ce lien. Vérifiez que la vidéo est publique.",
        btn_mp4_title: "Vidéo Sans Filigrane",
        btn_mp4_desc: "Format MP4 Haute Définition",
        btn_mp3_title: "Audio MP3",
        btn_mp3_desc: "Piste audio originale",
        btn_slide: "Télécharger Photo",
        card1_badge: "Vitesse",
        card1_title: "Téléchargement Immédiat",
        card1_desc: "Connexion directe aux serveurs pour un transfert ultra-rapide.",
        card2_badge: "Photos & Slides",
        card2_title: "Support Carrousel",
        card2_desc: "Téléchargez toutes les photos des carrousels en HD.",
        card3_badge: "Vie Privée",
        card3_title: "Aucun Traçage",
        card3_desc: "Aucune donnée personnelle n'est enregistrée.",
        faq_heading: "Foire Aux Questions",
        faq_q1: "Comment télécharger des vidéos TikTok sans filigrane ?",
        faq_a1: "Copiez le lien de la vidéo sur TikTok, collez-le ci-dessus et cliquez sur 'Télécharger'.",
        faq_q2: "Dois-je payer ou installer une application ?",
        faq_a2: "Non. TikDownload fonctionne 100% en ligne sur tous les navigateurs.",
        toast_started: "Téléchargement lancé !",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Outil Gratuit",
        footer_home: "Accueil",
        ad_badge: "Sponsorisé & Recommandations"
    },
    de: {
        name: "Deutsch",
        hero_title: "TikTok Videos Herunterladen",
        hero_subtitle: "Ohne Wasserzeichen, in HD-Qualität direkt auf Ihr Gerät.",
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
        card1_badge: "Geschwindigkeit",
        card1_title: "Sofort-Download",
        card1_desc: "Direkte Serververbindung für maximale Download-Geschwindigkeit.",
        card2_badge: "Fotos & Karussell",
        card2_title: "Karussell-Unterstützung",
        card2_desc: "Laden Sie alle Bilder von mehrteiligen Fotoposts in HD herunter.",
        card3_badge: "Privatsphäre",
        card3_title: "Keine Speicherung",
        card3_desc: "Es werden keine personenbezogenen Daten gespeichert.",
        faq_heading: "Häufig gestellte Fragen",
        faq_q1: "Wie lade ich TikTok-Videos ohne Wasserzeichen herunter?",
        faq_a1: "Link in der TikTok-App kopieren, oben einfügen und auf 'Herunterladen' klicken.",
        faq_q2: "Muss ich etwas bezahlen oder installieren?",
        faq_a2: "Nein. TikDownload läuft vollständig online im Browser.",
        toast_started: "Download erfolgreich gestartet!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Kostenloses Tool",
        footer_home: "Startseite",
        ad_badge: "Gesponsert & Empfehlungen"
    },
    it: {
        name: "Italiano",
        hero_title: "Scarica Video da TikTok",
        hero_subtitle: "Senza filigrana, in alta qualità (HD) e direttamente sul tuo dispositivo.",
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
        card1_badge: "Velocità",
        card1_title: "Download Immediato",
        card1_desc: "Connessione diretta ai server per una velocità fulminea.",
        card2_badge: "Foto & Carosello",
        card2_title: "Supporto Carosello",
        card2_desc: "Scarica tutte le immagini dei post carosello in HD.",
        card3_badge: "Privacy",
        card3_title: "Zero Tracciamento",
        card3_desc: "Nessun dato personale viene mai salvato.",
        faq_heading: "Domande Frequenti",
        faq_q1: "Come scaricare video TikTok senza filigrana?",
        faq_a1: "Copia il link da TikTok, incollalo sopra e clicca su 'Scarica'.",
        faq_q2: "Devo pagare o installare un'app?",
        faq_a2: "No. TikDownload funziona 100% online dal browser.",
        toast_started: "Download avviato con successo!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Strumento Gratuito",
        footer_home: "Home",
        ad_badge: "Sponsorizzato & Consigliati"
    },
    id: {
        name: "Bahasa Indonesia",
        hero_title: "Download Video TikTok",
        hero_subtitle: "Tanpa watermark, kualitas HD, langsung ke perangkat Anda.",
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
        card1_badge: "Kecepatan",
        card1_title: "Download Cepat",
        card1_desc: "Koneksi langsung ke server untuk pengiriman super cepat.",
        card2_badge: "Foto & Slide",
        card2_title: "Dukungan Carousel",
        card2_desc: "Download semua gambar slide foto dalam kualitas HD.",
        card3_badge: "Privasi",
        card3_title: "Tanpa Pelacakan",
        card3_desc: "Data pribadi tidak pernah disimpan.",
        faq_heading: "Pertanyaan Umum",
        faq_q1: "Bagaimana cara download video TikTok tanpa watermark?",
        faq_a1: "Salin tautan video di aplikasi TikTok, tempel di atas dan klik 'Download'.",
        faq_q2: "Apakah perlu membayar atau instal aplikasi?",
        faq_a2: "Tidak. TikDownload bekerja 100% online di browser apa pun.",
        toast_started: "Download berhasil dimulai!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Alat Gratis",
        footer_home: "Beranda",
        ad_badge: "Disponsori & Rekomendasi"
    },
    tr: {
        name: "Türkçe",
        hero_title: "TikTok Video İndir",
        hero_subtitle: "Filigransız, yüksek kaliteli (HD) ve doğrudan cihazınıza.",
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
        card1_badge: "Hız",
        card1_title: "Anında İndirme",
        card1_desc: "Işık hızında dosya teslimi için doğrudan sunucu bağlantısı.",
        card2_badge: "Fotoğraf & Kaydırma",
        card2_title: "Kaydırma Desteği",
        card2_desc: "Çoklu slaytlı gönderilerdeki tüm HD resimleri indirin.",
        card3_badge: "Gizlilik",
        card3_title: "Sıfır Takip",
        card3_desc: "Hiçbir kişisel veri kaydedilmez.",
        faq_heading: "Sıkça Sorulan Sorular",
        faq_q1: "TikTok videosu filigransız nasıl indirilir?",
        faq_a1: "TikTok uygulamasında bağlantıyı kopyalayın, yukarıya yapıştırın ve 'İndir'e tıklayın.",
        faq_q2: "Ücret ödemem veya uygulama yüklemem gerekir mi?",
        faq_a2: "Hayır. TikDownload tamamen çevrimiçi olarak tarayıcınızda çalışır.",
        toast_started: "İndirme başarıyla başlatıldı!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Ücretsiz Araç",
        footer_home: "Ana Sayfa",
        ad_badge: "Sponsorlu ve Öneriler"
    },
    ru: {
        name: "Русский",
        hero_title: "Скачать видео с TikTok",
        hero_subtitle: "Без водяного знака, в высоком качестве (HD) прямо на устройство.",
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
        card1_badge: "Скорость",
        card1_title: "Мгновенное скачивание",
        card1_desc: "Прямое подключение к серверам для быстрой загрузки.",
        card2_badge: "Фото и слайды",
        card2_title: "Поддержка каруселей",
        card2_desc: "Скачивайте все фото из каруселей в HD качестве.",
        card3_badge: "Конфиденциальность",
        card3_title: "Без отслеживания",
        card3_desc: "Никакие личные данные не сохраняются.",
        faq_heading: "Частые вопросы",
        faq_q1: "Как скачать видео с TikTok без водяного знака?",
        faq_a1: "Скопируйте ссылку в приложении TikTok, вставьте её выше и нажмите 'Скачать'.",
        faq_q2: "Нужно ли платить или устанавливать программы?",
        faq_a2: "Нет. TikDownload работает на 100% онлайн прямо в браузере.",
        toast_started: "Загрузка началась!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · Бесплатный сервис",
        footer_home: "Главная",
        ad_badge: "Реклама и Рекомендации"
    },
    ar: {
        name: "العربية",
        hero_title: "تحميل مقاطع تيك توك",
        hero_subtitle: "بدون علامة مائية وبجودة عالية (HD) مباشرة إلى جهازك.",
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
        card1_badge: "السرعة",
        card1_title: "تحميل فوري",
        card1_desc: "اتصال مباشر بالخوادم لتنزيل الملفات بسرعة فائقة.",
        card2_badge: "الصور والشرائح",
        card2_title: "دعم ألبومات الصور",
        card2_desc: "قم بتنزيل جميع الصور بدقة HD بسهولة.",
        card3_badge: "الخصوصية",
        card3_title: "بدون تتبع",
        card3_desc: "لا يتم حفظ أي بيانات شخصية على الإطلاق.",
        faq_heading: "الأسئلة الشائعة",
        faq_q1: "كيف أقوم بتحميل فيديو تيك توك بدون علامة مائية؟",
        faq_a1: "انسخ رابط الفيديو من تطبيق TikTok، والصقه في المربع أعلاه واضغط على 'تحميل'.",
        faq_q2: "هل يجب علي دفع رسوم أو تثبيت برامج؟",
        faq_a2: "لا. يعمل TikDownload مباشرة عبر المتصفح مجاناً بالكامل.",
        toast_started: "بدأ التحميل بنجاح!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · أداة مجانية",
        footer_home: "الرئيسية",
        ad_badge: "إعلانات ومقترحات"
    },
    hi: {
        name: "हिन्दी",
        hero_title: "टिकटॉक वीडियो डाउनलोड करें",
        hero_subtitle: "बिना वॉटरमार्क, हाई क्वालिटी (HD) में सीधे अपने डिवाइस पर।",
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
        card1_badge: "स्पीड",
        card1_title: "तुरंत डाउनलोड",
        card1_desc: "सुपरफ़ास्ट डिलीवरी के लिए सर्वर से सीधा कनेक्शन।",
        card2_badge: "फोटो और स्लाइड",
        card2_title: "कैरोजल सपोर्ट",
        card2_desc: "मल्टी-फोटो पोस्ट की सभी तस्वीरें HD में डाउनलोड करें।",
        card3_badge: "प्राइवेसी",
        card3_title: "शून्य ट्रैकिंग",
        card3_desc: "कोई भी व्यक्तिगत डेटा कभी स्टोर नहीं किया जाता।",
        faq_heading: "अक्सर पूछे जाने वाले प्रश्न",
        faq_q1: "बिना वॉटरमार्क टिकटॉक वीडियो कैसे डाउनलोड करें?",
        faq_a1: "TikTok ऐप में लिंक कॉपी करें, ऊपर पेस्ट करें और 'डाउनलोड' पर क्लिक करें।",
        faq_q2: "क्या मुझे भुगतान या ऐप इंस्टॉल करने की आवश्यकता है?",
        faq_a2: "नहीं। TikDownload पूरी तरह से ऑनलाइन और मुफ्त काम करता है।",
        toast_started: "डाउनलोड सफलतापूर्वक शुरू हुआ!",
        footer_rights: "© 2026 <strong>TikDownload</strong> · मुफ़्त टूल",
        footer_home: "होम",
        ad_badge: "प्रायोजित और सुझाव"
    },
    ja: {
        name: "日本語",
        hero_title: "TikTok 動画 保存",
        hero_subtitle: "透かし（ロゴ）なし、高画質HDでデバイスに直接ダウンロード。",
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
        card1_badge: "高速",
        card1_title: "瞬時ダウンロード",
        card1_desc: "高速サーバー接続で瞬時にファイルをお届けします。",
        card2_badge: "写真・スライド",
        card2_title: "複数写真対応",
        card2_desc: "スライドショーの全画像をHD画質で一括保存できます。",
        card3_badge: "プライバシー",
        card3_title: "安心・安全",
        card3_desc: "個人データや履歴は一切保存されません。",
        faq_heading: "よくある質問",
        faq_q1: "ロゴなしでTikTok動画を保存する方法は？",
        faq_a1: "TikTokアプリでリンクをコピーし、上に貼り付けて「保存」をクリックします。",
        faq_q2: "アプリのインストールや料金は必要ですか？",
        faq_a2: "いいえ。ブラウザ上ですべて完全無料で動作します。",
        toast_started: "ダウンロードを開始しました！",
        footer_rights: "© 2026 <strong>TikDownload</strong> · 無料ツール",
        footer_home: "ホーム",
        ad_badge: "おすすめ・広告"
    }
};

// Detecção de Idioma (URL -> LocalStorage -> Navegador -> Fallback PT)
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

    // Atualiza o Label do Dropdown
    const currentLabel = document.getElementById('currentLangLabel');
    if (currentLabel) currentLabel.textContent = data.name;

    // Atualiza todos os elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            el.innerHTML = data[key];
        }
    });

    // Atualiza placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (data[key]) {
            el.setAttribute('placeholder', data[key]);
        }
    });

    // Marca o ativo no menu dropdown
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Inicialização do DOM
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLanguage);

    // Controle do Dropdown de Idiomas
    const langBtn = document.getElementById('langDropdownBtn');
    const langMenu = document.getElementById('langDropdownMenu');

    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                applyLanguage(lang);
                langMenu.classList.add('hidden');
            });
        });

        document.addEventListener('click', () => {
            langMenu.classList.add('hidden');
        });
    }

    // Elementos da Interface de Download
    const downloadForm = document.getElementById('downloadForm');
    const tiktokUrlInput = document.getElementById('tiktokUrl');
    const clearBtn = document.getElementById('clearBtn');
    const pasteBtn = document.getElementById('pasteBtn');
    const submitBtn = document.getElementById('submitBtn');
    const loadingState = document.getElementById('loading');
    const errorState = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    const resultSection = document.getElementById('result');

    const videoCover = document.getElementById('videoCover');
    const authorName = document.getElementById('authorName');
    const videoTitle = document.getElementById('videoTitle');
    const btnMp4 = document.getElementById('btnMp4');
    const btnMp3 = document.getElementById('btnMp3');
    const carouselItems = document.getElementById('carouselItems');
    const toast = document.getElementById('toastNotification');

    // Input Actions (Limpar / Colar)
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

    // Helper para forçar download direto sem abrir em aba
    async function triggerDirectDownload(url, filename) {
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

    // Processamento do Formulário (Chamada TikWM)
    downloadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = tiktokUrlInput.value.trim();
        if (!url) return;

        // Reset UI
        errorState.classList.add('hidden');
        resultSection.classList.add('hidden');
        loadingState.classList.remove('hidden');
        submitBtn.disabled = true;

        try {
            const response = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
            const data = await response.json();

            if (data.code === 0 && data.data) {
                const item = data.data;

                // Preenchimento dos Metadados
                videoCover.src = item.cover || item.origin_cover || '';
                authorName.textContent = item.author ? `@${item.author.unique_id || item.author.nickname}` : '@tiktok';
                videoTitle.textContent = item.title || 'TikTok Video';

                // Verificação: Carrossel (Imagens) ou Vídeo Único
                if (item.images && item.images.length > 0) {
                    btnMp4.parentElement.classList.add('hidden');
                    carouselItems.innerHTML = '';

                    const slideText = translations[currentLanguage].btn_slide || 'Baixar Foto';

                    item.images.forEach((imgUrl, index) => {
                        const btn = document.createElement('button');
                        btn.className = 'carousel-btn';
                        btn.innerHTML = `<i class="ph ph-image"></i> ${slideText} ${index + 1}`;
                        btn.onclick = () => triggerDirectDownload(imgUrl, `tikdownload_photo_${index + 1}.jpg`);
                        carouselItems.appendChild(btn);
                    });
                } else {
                    btnMp4.parentElement.classList.remove('hidden');
                    carouselItems.innerHTML = '';

                    const videoUrl = item.play || item.wmplay;
                    const musicUrl = item.music || item.music_info?.play;

                    btnMp4.onclick = (ev) => {
                        ev.preventDefault();
                        triggerDirectDownload(videoUrl, `tikdownload_${item.id || 'video'}.mp4`);
                    };

                    if (musicUrl) {
                        btnMp3.classList.remove('hidden');
                        btnMp3.onclick = (ev) => {
                            ev.preventDefault();
                            triggerDirectDownload(musicUrl, `tikdownload_audio_${item.id || 'audio'}.mp3`);
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