const tracks = {
  web: {
    title: "Web Development",
    kicker: "Frontend foundations to real projects",
    description: "Learn HTML, CSS, JavaScript, responsive layout, APIs, and project workflow through a practical sequence designed for beginners.",
    color: "#2563eb",
    lessons: 14,
    duration: "11 hours",
    level: "Beginner friendly",
    topics: ["HTML semantics", "CSS layout", "JavaScript basics", "DOM events", "Async JS", "Portfolio project"],
    list: [
      { title: "HTML Full Course - Build a Website", channel: "freeCodeCamp", duration: "2:02:00", id: "pQN-pnXPaVg" },
      { title: "CSS Crash Course For Beginners", channel: "Traversy Media", duration: "1:25:00", id: "yfoY53QXEnI" },
      { title: "CSS Full Course", channel: "freeCodeCamp", duration: "6:18:00", id: "OXGznpKZ_sA" },
      { title: "JavaScript Tutorial for Beginners", channel: "Programming with Mosh", duration: "48:00", id: "W6NZfCO5SIk" },
      { title: "JavaScript Full Course", channel: "freeCodeCamp", duration: "3:26:00", id: "jS4aFq5-91M" },
      { title: "Build a Responsive Website", channel: "Kevin Powell", duration: "1:08:00", id: "bn-DQCifeQQ" }
    ]
  },
  cyber: {
    title: "Cyber Security",
    kicker: "Security basics and ethical practice",
    description: "Build a strong introduction to networks, Linux, web security, cryptography, and responsible security testing.",
    color: "#7c3aed",
    lessons: 11,
    duration: "9 hours",
    level: "Beginner to intermediate",
    topics: ["Networking", "Linux", "Web vulnerabilities", "Cryptography", "OSINT", "Secure habits"],
    list: [
      { title: "Cyber Security Full Course", channel: "edureka!", duration: "10:08:00", id: "inWWhr5tnEA" },
      { title: "Computer Networking Course", channel: "freeCodeCamp", duration: "9:24:00", id: "qiQR5rTSshw" },
      { title: "Linux Command Line for Beginners", channel: "freeCodeCamp", duration: "4:13:00", id: "sWbUDq4S6Y8" },
      { title: "Web Application Security", channel: "HackerSploit", duration: "1:00:00", id: "2_lswM1S264" },
      { title: "OWASP Top 10 Explained", channel: "The Cyber Mentor", duration: "46:00", id: "zv0kZKC6GAM" },
      { title: "Ethical Hacking Practical Lab", channel: "freeCodeCamp", duration: "15:00:00", id: "3Kq1MIfTWCE" }
    ]
  },
  ai: {
    title: "Artificial Intelligence",
    kicker: "Python, machine learning, and neural networks",
    description: "Start with Python for AI, then move into data preparation, classic machine learning, neural networks, NLP, and model deployment.",
    color: "#06b6d4",
    lessons: 16,
    duration: "13 hours",
    level: "Project based",
    topics: ["Python for ML", "NumPy", "Pandas", "Regression", "Neural networks", "Transformers"],
    list: [
      { title: "Python for Beginners", channel: "Programming with Mosh", duration: "1:00:00", id: "kqtD5dpn9C8" },
      { title: "Machine Learning for Everybody", channel: "freeCodeCamp", duration: "3:53:00", id: "i_LwzRVP7bg" },
      { title: "Machine Learning Course", channel: "freeCodeCamp", duration: "9:23:00", id: "NWONeJKn6kc" },
      { title: "Neural Networks Explained", channel: "3Blue1Brown", duration: "19:00", id: "aircAruvnKk" },
      { title: "Natural Language Processing", channel: "freeCodeCamp", duration: "4:05:00", id: "8S3qHHUKqYk" },
      { title: "Transformers Explained", channel: "IBM Technology", duration: "12:00", id: "SZorAJ4I-sA" }
    ]
  },
  data: {
    title: "Data Science",
    kicker: "Analysis, visualization, and dashboards",
    description: "Learn the workflow of a data professional: clean data, explore patterns, visualize insights, apply statistics, and present findings.",
    color: "#22c55e",
    lessons: 13,
    duration: "10 hours",
    level: "Analysis focused",
    topics: ["Pandas", "Data cleaning", "EDA", "Statistics", "Visualization", "Dashboards"],
    list: [
      { title: "Data Science Full Course", channel: "freeCodeCamp", duration: "12:00:00", id: "ua-CiDNNj30" },
      { title: "Pandas Tutorial", channel: "Corey Schafer", duration: "1:06:00", id: "ZyhVh-qRZPA" },
      { title: "NumPy Tutorial", channel: "freeCodeCamp", duration: "1:00:00", id: "QUT1VHiLmmI" },
      { title: "Matplotlib Tutorial", channel: "Corey Schafer", duration: "35:00", id: "UO98lJQ3QGI" },
      { title: "Statistics for Data Science", channel: "freeCodeCamp", duration: "2:20:00", id: "xxpc-HPKN28" },
      { title: "Python Data Analysis Project", channel: "Alex The Analyst", duration: "1:08:00", id: "eMOA1pPVUc4" }
    ]
  }
};

const videos = [
  { title: "HTML & CSS Intro", meta: "Web Development - Beginner", id: "pQN-pnXPaVg" },
  { title: "JavaScript Essentials", meta: "Web Development - Core skills", id: "W6NZfCO5SIk" },
  { title: "Python for Beginners", meta: "AI and Data Science - Foundation", id: "kqtD5dpn9C8" },
  { title: "Cyber Security Full Course", meta: "Cyber Security - Overview", id: "inWWhr5tnEA" },
  { title: "Data Science Full Course", meta: "Data Science - Complete path", id: "ua-CiDNNj30" },
  { title: "Neural Networks Explained", meta: "Artificial Intelligence - Deep learning", id: "aircAruvnKk" }
];

const translations = {
  en: {
    authEyebrow: "Account access",
    authTitle: "Continue your learning journey.",
    authText: "Log in first, then Trackify will save your selected tracks, watched videos, dashboard progress, theme preference, and language preference on this laptop.",
    authCheck1: "Save watched lessons automatically",
    authCheck2: "Update dashboard progress instantly",
    authCheck3: "Return to your latest track and video",
    welcomeBack: "Welcome back",
    authHint: "Use any valid details for this local demo account.",
    google: "Google",
    github: "GitHub",
    orEmail: "or use email",
    nameLabel: "Name",
    emailLabel: "Email",
    passwordLabel: "Password",
    namePlaceholder: "Ahmed Hassan",
    emailPlaceholder: "you@example.com",
    passwordPlaceholder: "Enter your password",
    login: "Log In",
    logout: "Log Out",
    navHome: "Home",
    navAbout: "About",
    navTracks: "Tracks",
    navVideos: "Videos",
    navDashboard: "Dashboard",
    navTeam: "Team",
    navContact: "Contact",
    heroEyebrow: "Free tech learning paths",
    heroTitle: "Track your learning in one place.",
    heroText: "Trackify organizes curated YouTube lessons into focused tracks, helps you continue from where you stopped, and makes your daily progress easy to understand.",
    exploreTracks: "Explore Tracks",
    watchLessons: "Watch Lessons",
    metricLessons: "YouTube lessons",
    metricTracks: "career tracks",
    metricFree: "free",
    welcomeBackSmall: "Welcome back",
    currentTrack: "Current track",
    nextLesson: "Next lesson",
    aboutEyebrow: "About Trackify",
    aboutTitle: "A cleaner way to learn from YouTube.",
    aboutText: "Instead of saving random videos and losing your place, Trackify groups lessons into clear roadmaps with progress, durations, tags, and a focused video player.",
    feature1Title: "Structured Roadmaps",
    feature1Text: "Follow tracks for Web Development, Cyber Security, Artificial Intelligence, and Data Science.",
    feature2Title: "Progress Tracking",
    feature2Text: "See completed lessons, watch time, streaks, and the next recommended step.",
    feature3Title: "Curated Videos",
    feature3Text: "Watch embedded YouTube lessons inside a distraction-light learning interface.",
    feature4Title: "Responsive Design",
    feature4Text: "Use the website smoothly on desktop, tablet, and mobile screens.",
    tracksEyebrow: "Learning tracks",
    tracksTitle: "Choose a track and follow the path.",
    tracksText: "Each track includes a practical YouTube playlist, estimated duration, video channel, and topics that build naturally from fundamentals to projects.",
    trackWeb: "Web Development",
    trackCyber: "Cyber Security",
    trackAi: "Artificial Intelligence",
    trackData: "Data Science",
    videosEyebrow: "Video classroom",
    videosTitle: "Watch selected lessons without leaving the website.",
    videosText: "Use the playlist to switch lessons. The video frame stays responsive and works cleanly on mobile.",
    featuredLessons: "Featured YouTube Lessons",
    dashboardEyebrow: "Dashboard preview",
    dashboardTitle: "Progress that feels clear, not noisy.",
    dashboardText: "The dashboard combines your active track, saved tracks, watch history, and next lesson in a single focused workspace.",
    continueLearning: "Continue Learning",
    overallProgress: "Overall progress",
    videosWatched: "Videos watched",
    hoursWatched: "Hours watched",
    currentStreak: "Current streak",
    savedTracks: "Saved tracks",
    teamEyebrow: "Our Team",
    teamTitle: "Meet the people behind Trackify.",
    teamText: "Every member had a clear role in shaping the platform, from interface design and content planning to interactivity, testing, and presentation.",
    teamRoleLeader: "Team Leader",
    teamYousefText: "Team leader who built the team page and the contact page.",
    teamYousefTask1: "Team page implementation",
    teamYousefTask2: "Contact page implementation",
    teamYousefTask3: "Team coordination",
    teamRoleLogin: "Login Page",
    teamAhmedText: "Designed and implemented the login page and account access experience.",
    teamAhmedTask1: "Login form structure",
    teamAhmedTask2: "Authentication screen UI",
    teamAhmedTask3: "Local demo login flow",
    teamRoleAbout: "About Page",
    teamMahmoudText: "Built the about page and prepared the video links plus all track-related data.",
    teamMahmoudTask1: "About page content",
    teamMahmoudTask2: "Video links preparation",
    teamMahmoudTask3: "Track data preparation",
    teamRoleVideos: "Videos Page",
    teamMohamedAhmedText: "Implemented the videos page and the lesson watching experience.",
    teamMohamedAhmedTask1: "Video page layout",
    teamMohamedAhmedTask2: "Embedded lesson player",
    teamMohamedAhmedTask3: "Playlist interaction",
    teamRoleTracks: "Tracks Page",
    teamMohamedKazemText: "Created the tracks page and organized the learning paths interface.",
    teamMohamedKazemTask1: "Track tabs and sections",
    teamMohamedKazemTask2: "Learning path presentation",
    teamMohamedKazemTask3: "Track cards and details",
    teamRoleDashboard: "Dashboard",
    teamAliText: "Built the dashboard section and the progress summary experience.",
    teamAliTask1: "Dashboard layout",
    teamAliTask2: "Progress statistics",
    teamAliTask3: "Learning history preview",
    contactEyebrow: "Contact",
    contactTitle: "Send a message to the Trackify team.",
    contactText: "Fill out the form and your message will be sent directly to the Trackify team.",
    fullName: "Full Name",
    yourName: "Your name",
    subject: "Subject",
    subjectPlaceholder: "How can we help?",
    message: "Message",
    messagePlaceholder: "Write your message here...",
    sendTelegram: "Send to Telegram",
    footerText: "Curated learning tracks, progress tracking, and embedded YouTube lessons.",
    lessons: "videos",
    selectedLessons: "selected lessons",
    startWith: "Start this YouTube track with",
    playFirst: "Play first lesson",
    watched: "Watched",
    watchedSuffix: "watched",
    noLessonsTitle: "No lessons watched yet",
    noLessonsText: "Start from any track",
    allLessonsCompleted: "All lessons completed",
    chooseFirstLesson: "Choose your first lesson",
    trackListSuffix: "YouTube Playlist",
    learningHoursCompleted: "learning hours completed",
    entering: "Entering...",
    loggingIn: "Logging in...",
    loginSuccess: "Login successful. Your progress will be saved locally.",
    sending: "Sending...",
    sent: "Message sent successfully.",
    sendError: "Message could not be sent. Please check your internet connection."
  },
  ar: {
    authEyebrow: "الدخول للحساب",
    authTitle: "كمل رحلتك التعليمية.",
    authText: "سجل الدخول أولا، وبعدها Trackify هيحفظ التراكات المختارة، الفيديوهات المتشافه، تقدم الداشبورد، الثيم، واللغة على الجهاز ده.",
    authCheck1: "حفظ الدروس المتشاهدة تلقائيا",
    authCheck2: "تحديث تقدم الداشبورد فورا",
    authCheck3: "الرجوع لآخر تراك وفيديو",
    welcomeBack: "أهلا بعودتك",
    authHint: "استخدم أي بيانات صحيحة لحساب الديمو المحلي.",
    google: "جوجل",
    github: "جيت هب",
    orEmail: "أو استخدم البريد الإلكتروني",
    nameLabel: "الاسم",
    emailLabel: "البريد الإلكتروني",
    passwordLabel: "كلمة المرور",
    namePlaceholder: "Ahmed Hassan",
    emailPlaceholder: "you@example.com",
    passwordPlaceholder: "اكتب كلمة المرور",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    navHome: "الرئيسية",
    navAbout: "عن الموقع",
    navTracks: "المسارات",
    navVideos: "الفيديوهات",
    navDashboard: "الداشبورد",
    navTeam: "الفريق",
    navContact: "تواصل",
    heroEyebrow: "مسارات تقنية مجانية",
    heroTitle: "تابع تعلمك في مكان واحد.",
    heroText: "Trackify بينظم دروس يوتيوب المختارة داخل مسارات واضحة، ويساعدك تكمل من مكان ما وقفت وتشوف تقدمك اليومي بسهولة.",
    exploreTracks: "استكشف المسارات",
    watchLessons: "شاهد الدروس",
    metricLessons: "درس يوتيوب",
    metricTracks: "مسارات مهنية",
    metricFree: "مجاني",
    welcomeBackSmall: "أهلا بعودتك",
    currentTrack: "المسار الحالي",
    nextLesson: "الدرس التالي",
    aboutEyebrow: "عن Trackify",
    aboutTitle: "طريقة أنضف للتعلم من يوتيوب.",
    aboutText: "بدل ما تحفظ فيديوهات عشوائية وتنسى وصلت لفين، Trackify بيجمع الدروس في خرائط واضحة فيها تقدم ومدة ووسوم ومشغل فيديو مركز.",
    feature1Title: "خرائط تعلم منظمة",
    feature1Text: "اتبع مسارات تطوير الويب، الأمن السيبراني، الذكاء الاصطناعي، وعلوم البيانات.",
    feature2Title: "متابعة التقدم",
    feature2Text: "شوف الدروس المكتملة، وقت المشاهدة، الاستمرارية، والخطوة المقترحة التالية.",
    feature3Title: "فيديوهات مختارة",
    feature3Text: "شاهد دروس يوتيوب داخل واجهة تعلم بسيطة وهادية.",
    feature4Title: "تصميم متجاوب",
    feature4Text: "استخدم الموقع بسلاسة على الكمبيوتر والتابلت والموبايل.",
    tracksEyebrow: "مسارات التعلم",
    tracksTitle: "اختار مسار واتبع الطريق.",
    tracksText: "كل مسار فيه قائمة يوتيوب عملية، مدة تقديرية، قناة الفيديو، وموضوعات بتتحرك من الأساسيات للمشاريع.",
    trackWeb: "تطوير الويب",
    trackCyber: "الأمن السيبراني",
    trackAi: "الذكاء الاصطناعي",
    trackData: "علوم البيانات",
    videosEyebrow: "فصل الفيديوهات",
    videosTitle: "شاهد الدروس المختارة من غير ما تخرج من الموقع.",
    videosText: "استخدم القائمة للتنقل بين الدروس. إطار الفيديو متجاوب وبيشتغل كويس على الموبايل.",
    featuredLessons: "دروس يوتيوب المميزة",
    dashboardEyebrow: "معاينة الداشبورد",
    dashboardTitle: "تقدم واضح من غير زحمة.",
    dashboardText: "الداشبورد بيجمع المسار النشط، المسارات المحفوظة، سجل المشاهدة، والدرس التالي في مساحة واحدة مركزة.",
    continueLearning: "كمل التعلم",
    overallProgress: "التقدم العام",
    videosWatched: "فيديوهات متشاهدة",
    hoursWatched: "ساعات مشاهدة",
    currentStreak: "أيام متتالية",
    savedTracks: "مسارات محفوظة",
    teamEyebrow: "فريقنا",
    teamTitle: "تعرف على الناس وراء Trackify.",
    teamText: "كل عضو كان له دور واضح في بناء المنصة، من الصفحات والمحتوى لحد التفاعل والداشبورد.",
    teamRoleLeader: "قائد الفريق",
    teamYousefText: "قائد الفريق ومسؤول عن تنفيذ صفحة الفريق وصفحة التواصل.",
    teamYousefTask1: "تنفيذ صفحة الفريق",
    teamYousefTask2: "تنفيذ صفحة التواصل",
    teamYousefTask3: "تنسيق شغل الفريق",
    teamRoleLogin: "صفحة تسجيل الدخول",
    teamAhmedText: "صمم ونفذ صفحة تسجيل الدخول وتجربة الوصول للحساب.",
    teamAhmedTask1: "بناء فورم تسجيل الدخول",
    teamAhmedTask2: "واجهة شاشة الدخول",
    teamAhmedTask3: "تجربة تسجيل دخول محلية",
    teamRoleAbout: "صفحة About",
    teamMahmoudText: "نفذ صفحة About وجهز لينكات الفيديوهات وكل الداتا الخاصة بالمسارات.",
    teamMahmoudTask1: "محتوى صفحة About",
    teamMahmoudTask2: "تجهيز لينكات الفيديوهات",
    teamMahmoudTask3: "تجهيز بيانات المسارات",
    teamRoleVideos: "صفحة الفيديوهات",
    teamMohamedAhmedText: "نفذ صفحة الفيديوهات وتجربة مشاهدة الدروس.",
    teamMohamedAhmedTask1: "تصميم صفحة الفيديوهات",
    teamMohamedAhmedTask2: "مشغل الدروس المدمج",
    teamMohamedAhmedTask3: "تفاعل قائمة الفيديوهات",
    teamRoleTracks: "صفحة المسارات",
    teamMohamedKazemText: "أنشأ صفحة المسارات ونظم واجهة مسارات التعلم.",
    teamMohamedKazemTask1: "تبويبات وأقسام المسارات",
    teamMohamedKazemTask2: "عرض مسار التعلم",
    teamMohamedKazemTask3: "كروت وتفاصيل المسارات",
    teamRoleDashboard: "الداشبورد",
    teamAliText: "نفذ قسم الداشبورد وتجربة ملخص التقدم.",
    teamAliTask1: "تخطيط الداشبورد",
    teamAliTask2: "إحصائيات التقدم",
    teamAliTask3: "معاينة سجل التعلم",
    contactEyebrow: "تواصل",
    contactTitle: "ابعت رسالة لفريق Trackify.",
    contactText: "املأ الفورم ورسالتك هتوصل مباشرة لفريق Trackify.",
    fullName: "الاسم بالكامل",
    yourName: "اسمك",
    subject: "الموضوع",
    subjectPlaceholder: "إزاي نقدر نساعدك؟",
    message: "الرسالة",
    messagePlaceholder: "اكتب رسالتك هنا...",
    sendTelegram: "إرسال إلى تليجرام",
    footerText: "مسارات تعلم مختارة، متابعة تقدم، ودروس يوتيوب مدمجة.",
    lessons: "فيديو",
    selectedLessons: "دروس مختارة",
    startWith: "ابدأ مسار يوتيوب ده بـ",
    playFirst: "شغل أول درس",
    watched: "تمت المشاهدة",
    watchedSuffix: "تمت مشاهدته",
    noLessonsTitle: "لسه مفيش دروس متشاهدة",
    noLessonsText: "ابدأ من أي مسار",
    allLessonsCompleted: "كل الدروس مكتملة",
    chooseFirstLesson: "اختار أول درس",
    trackListSuffix: "قائمة يوتيوب",
    learningHoursCompleted: "ساعة تعلم مكتملة",
    entering: "جاري الدخول...",
    loggingIn: "جاري تسجيل الدخول...",
    loginSuccess: "تم تسجيل الدخول بنجاح. تقدمك هيتحفظ محليا.",
    sending: "جاري الإرسال...",
    sent: "تم إرسال الرسالة بنجاح.",
    sendError: "تعذر إرسال الرسالة. تأكد من اتصال الإنترنت."
  }
};

const localizedTracks = {
  en: {
    web: { title: "Web Development", kicker: "Frontend foundations to real projects", description: "Learn HTML, CSS, JavaScript, responsive layout, APIs, and project workflow through a practical sequence designed for beginners.", duration: "11 hours", level: "Beginner friendly", topics: ["HTML semantics", "CSS layout", "JavaScript basics", "DOM events", "Async JS", "Portfolio project"] },
    cyber: { title: "Cyber Security", kicker: "Security basics and ethical practice", description: "Build a strong introduction to networks, Linux, web security, cryptography, and responsible security testing.", duration: "9 hours", level: "Beginner to intermediate", topics: ["Networking", "Linux", "Web vulnerabilities", "Cryptography", "OSINT", "Secure habits"] },
    ai: { title: "Artificial Intelligence", kicker: "Python, machine learning, and neural networks", description: "Start with Python for AI, then move into data preparation, classic machine learning, neural networks, NLP, and model deployment.", duration: "13 hours", level: "Project based", topics: ["Python for ML", "NumPy", "Pandas", "Regression", "Neural networks", "Transformers"] },
    data: { title: "Data Science", kicker: "Analysis, visualization, and dashboards", description: "Learn the workflow of a data professional: clean data, explore patterns, visualize insights, apply statistics, and present findings.", duration: "10 hours", level: "Analysis focused", topics: ["Pandas", "Data cleaning", "EDA", "Statistics", "Visualization", "Dashboards"] }
  },
  ar: {
    web: { title: "تطوير الويب", kicker: "أساسيات الفرونت إند لحد المشاريع", description: "اتعلم HTML وCSS وJavaScript والتصميم المتجاوب وAPIs وطريقة بناء المشاريع من خلال ترتيب عملي مناسب للمبتدئين.", duration: "11 ساعة", level: "مناسب للمبتدئين", topics: ["HTML الدلالي", "تخطيط CSS", "أساسيات JavaScript", "أحداث DOM", "JavaScript غير متزامن", "مشروع بورتفوليو"] },
    cyber: { title: "الأمن السيبراني", kicker: "أساسيات الحماية والتطبيق الأخلاقي", description: "ابني مقدمة قوية في الشبكات ولينكس وأمن الويب والتشفير والاختبار الأمني المسؤول.", duration: "9 ساعات", level: "من مبتدئ لمتوسط", topics: ["الشبكات", "لينكس", "ثغرات الويب", "التشفير", "OSINT", "عادات آمنة"] },
    ai: { title: "الذكاء الاصطناعي", kicker: "بايثون وتعلم الآلة والشبكات العصبية", description: "ابدأ ببايثون للذكاء الاصطناعي، وبعدها تجهيز البيانات وتعلم الآلة والشبكات العصبية وNLP ونشر النماذج.", duration: "13 ساعة", level: "معتمد على المشاريع", topics: ["Python للـ ML", "NumPy", "Pandas", "Regression", "الشبكات العصبية", "Transformers"] },
    data: { title: "علوم البيانات", kicker: "تحليل وتصوير البيانات والداشبورد", description: "اتعلم شغل محلل البيانات: تنظيف البيانات، اكتشاف الأنماط، عرض النتائج، تطبيق الإحصاء، وتقديم الملخصات.", duration: "10 ساعات", level: "يركز على التحليل", topics: ["Pandas", "تنظيف البيانات", "EDA", "الإحصاء", "تصوير البيانات", "Dashboards"] }
  }
};

const STORAGE_KEY = "trackify_state_v1";
const TELEGRAM_BOT_TOKEN = "8350390838:AAEurfYHJHuhSQWwLjuOykvPTWM1njD60ng";
const TELEGRAM_CHAT_ID = "5764585492";

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const scrollProgress = document.getElementById("scrollProgress");
const dashboardMatrix = document.getElementById("dashboardMatrix");
const trackDetail = document.getElementById("trackDetail");
const lessonList = document.getElementById("lessonList");
const videoFrame = document.getElementById("videoFrame");
const videoPlaylist = document.getElementById("videoPlaylist");
const loginForm = null;
const loginButton = null;
const formMessage = null;
const contactForm = document.getElementById("contactForm");
const contactButton = document.getElementById("contactButton");
const contactMessageStatus = document.getElementById("contactMessageStatus");
const authForm = document.getElementById("authForm");
const authButton = document.getElementById("authButton");
const authMessage = document.getElementById("authMessage");
const logoutButton = document.getElementById("logoutButton");

const dashboardEls = {
  heroUserName: document.getElementById("heroUserName"),
  heroLearningSummary: document.getElementById("heroLearningSummary"),
  heroCurrentTrack: document.getElementById("heroCurrentTrack"),
  heroProgressPercent: document.getElementById("heroProgressPercent"),
  heroProgressLine: document.getElementById("heroProgressLine"),
  heroNextLesson: document.getElementById("heroNextLesson"),
  overallProgress: document.getElementById("overallProgress"),
  videosWatched: document.getElementById("videosWatched"),
  hoursWatched: document.getElementById("hoursWatched"),
  currentStreak: document.getElementById("currentStreak"),
  savedTracks: document.getElementById("savedTracks"),
  dashboardHistory: document.getElementById("dashboardHistory")
};

let currentTrackKey = "web";
let state = loadState();

function defaultState() {
  return {
    isLoggedIn: false,
    user: { name: "", email: "" },
    selectedTrack: "web",
    lastVideoId: "pQN-pnXPaVg",
    watchedVideos: [],
    savedTracks: ["web"],
    theme: "light",
    language: "en",
    lastVisitDate: "",
    streak: 0
  };
}

function currentLanguage() {
  return state.language === "ar" ? "ar" : "en";
}

function t(key) {
  const lang = currentLanguage();
  return translations[lang][key] || translations.en[key] || key;
}

function displayTrack(trackKey) {
  return { ...tracks[trackKey], ...(localizedTracks[currentLanguage()][trackKey] || {}) };
}

function applyLanguage() {
  const lang = currentLanguage();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  languageToggle.querySelector("span").textContent = lang === "ar" ? "EN" : "AR";
  languageToggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "Switch to Arabic");
  renderTrack(currentTrackKey || state.selectedTrack || "web");
  renderVideos();
  updateDashboard();
}

function loadState() {
  try {
    return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
  } catch (error) {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function allLessons() {
  return Object.entries(tracks).flatMap(([trackKey, track]) => track.list.map((lesson) => ({ ...lesson, trackKey, trackTitle: track.title })));
}

function findLesson(id) {
  return allLessons().find((lesson) => lesson.id === id) || videos.find((video) => video.id === id);
}

function parseDurationHours(duration) {
  const parts = duration.split(":").map(Number);
  if (parts.length === 3) return parts[0] + parts[1] / 60 + parts[2] / 3600;
  if (parts.length === 2) return parts[0] / 60 + parts[1] / 3600;
  return 0.25;
}

function watchedSet() {
  return new Set(state.watchedVideos.map((item) => item.id));
}

function trackProgress(trackKey) {
  const watched = watchedSet();
  const lessons = tracks[trackKey].list;
  const count = lessons.filter((lesson) => watched.has(lesson.id)).length;
  return Math.round((count / lessons.length) * 100);
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastVisitDate === today) return;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = state.lastVisitDate === yesterday ? state.streak + 1 : 1;
  state.lastVisitDate = today;
}

function setAuthScreen() {
  document.body.classList.toggle("auth-locked", !state.isLoggedIn);
}

function loginUser(name, email) {
  state.isLoggedIn = true;
  state.user = { name, email };
  updateStreak();
  saveState();
  setAuthScreen();
  updateDashboard();
  renderTrack(state.selectedTrack || "web");
  renderVideos();
}

function logoutUser() {
  state.isLoggedIn = false;
  saveState();
  setAuthScreen();
  window.scrollTo({ top: 0, behavior: "smooth" });
}


let matrixAnimationId = null;
let matrixDrops = [];
const matrixChars = "01<>/{}[]()=+-*#@TRACKIFYJSHTMLCSSAI".split("");

function resizeDashboardMatrix() {
  if (!dashboardMatrix) return;
  const rect = dashboardMatrix.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  dashboardMatrix.width = Math.max(1, Math.floor(rect.width * ratio));
  dashboardMatrix.height = Math.max(1, Math.floor(rect.height * ratio));
  const cols = Math.floor(dashboardMatrix.width / 18);
  matrixDrops = Array.from({ length: cols }, () => Math.random() * -60);
}

function drawDashboardMatrix() {
  if (!dashboardMatrix) return;
  const ctx = dashboardMatrix.getContext("2d");

  if (!document.body.classList.contains("dark")) {
    ctx.clearRect(0, 0, dashboardMatrix.width, dashboardMatrix.height);
    matrixAnimationId = null;
    return;
  }

  ctx.fillStyle = "rgba(5, 11, 22, 0.09)";
  ctx.fillRect(0, 0, dashboardMatrix.width, dashboardMatrix.height);
  ctx.font = "16px monospace";

  for (let i = 0; i < matrixDrops.length; i += 1) {
    const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    const x = i * 18;
    const y = matrixDrops[i] * 18;
    ctx.fillStyle = Math.random() > 0.96 ? "rgba(147, 197, 253, 0.95)" : "rgba(34, 197, 94, 0.82)";
    ctx.fillText(char, x, y);

    if (y > dashboardMatrix.height && Math.random() > 0.965) matrixDrops[i] = 0;
    matrixDrops[i] += 1;
  }

  matrixAnimationId = requestAnimationFrame(drawDashboardMatrix);
}

function syncDashboardMatrix() {
  if (!dashboardMatrix) return;
  resizeDashboardMatrix();

  if (document.body.classList.contains("dark") && !matrixAnimationId) {
    matrixAnimationId = requestAnimationFrame(drawDashboardMatrix);
  }

  if (!document.body.classList.contains("dark")) {
    const ctx = dashboardMatrix.getContext("2d");
    ctx.clearRect(0, 0, dashboardMatrix.width, dashboardMatrix.height);
  }
}
function setMenu(open) {
  menuToggle.classList.toggle("open", open);
  mobileNav.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => setMenu(!mobileNav.classList.contains("open")));
mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  state.theme = isDark ? "dark" : "light";
  themeToggle.querySelector("span").textContent = isDark ? "L" : "D";
  saveState();
  syncDashboardMatrix();
});

languageToggle.addEventListener("click", () => {
  state.language = currentLanguage() === "ar" ? "en" : "ar";
  saveState();
  applyLanguage();
});

window.addEventListener("resize", syncDashboardMatrix);

window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const height = doc.scrollHeight - doc.clientHeight;
  const progress = height > 0 ? (doc.scrollTop / height) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
});

function renderTrack(key) {
  currentTrackKey = key;
  state.selectedTrack = key;
  if (!state.savedTracks.includes(key)) state.savedTracks.push(key);
  saveState();

  const track = displayTrack(key);
  const firstLesson = track.list[0];
  const progress = trackProgress(key);
  const watched = watchedSet();

  document.querySelectorAll(".track-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.track === key));

  trackDetail.innerHTML = `
    <span class="track-kicker">${track.kicker}</span>
    <h3>${track.title}</h3>
    <p>${track.description}</p>
    <div class="track-meta">
      <span>${track.list.length} ${t("lessons")}</span>
      <span>${track.duration}</span>
      <span>${track.level}</span>
    </div>
    <div class="progress-line" aria-label="${track.title} completion preview">
      <span style="width:${progress}%; background:${track.color}"></span>
    </div>
    <div class="topic-grid">
      ${track.topics.map((topic) => `<span>${topic}</span>`).join("")}
    </div>
    <div class="track-video-card">
      <div class="track-video-thumb">
        <img src="https://img.youtube.com/vi/${firstLesson.id}/hqdefault.jpg" alt="${firstLesson.title}">
      </div>
      <div>
        <span>${t("startWith")}</span>
        <strong>${firstLesson.title}</strong>
        <button class="inline-play" type="button" data-video="${firstLesson.id}" data-title="${firstLesson.title}" data-meta="${track.title} - ${firstLesson.channel}">${t("playFirst")}</button>
      </div>
    </div>
  `;

  lessonList.innerHTML = `
    <div class="track-list-head">
      <strong>${track.title} ${t("trackListSuffix")}</strong>
      <span>${track.list.length} ${t("selectedLessons")}</span>
    </div>
    ${track.list.map((lesson, index) => `
      <button class="lesson-button ${watched.has(lesson.id) ? "watched" : ""}" type="button" data-video="${lesson.id}" data-title="${lesson.title}" data-meta="${track.title} - ${lesson.channel}" data-watched-label="${t("watched")}">
        <strong>${index + 1}. ${lesson.title}</strong>
        <span>${lesson.channel} - ${lesson.duration}</span>
      </button>
    `).join("")}
  `;

  document.querySelectorAll(".lesson-button, .inline-play").forEach((button) => {
    button.addEventListener("click", () => {
      playVideo(button.dataset.video, button.dataset.title, button.dataset.meta, true);
      document.getElementById("videos").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  updateDashboard();
}

document.querySelectorAll(".track-tab").forEach((button) => {
  button.addEventListener("click", () => renderTrack(button.dataset.track));
});

function renderVideos() {
  const watched = watchedSet();
  videoPlaylist.innerHTML = videos.map((video) => `
    <button class="playlist-button ${video.id === state.lastVideoId ? "active" : ""} ${watched.has(video.id) ? "watched" : ""}" type="button" data-video="${video.id}" data-title="${video.title}" data-meta="${video.meta}" data-watched-label="${t("watched")}">
      <strong>${video.title}</strong>
      <span>${video.meta}</span>
    </button>
  `).join("");

  videoPlaylist.querySelectorAll(".playlist-button").forEach((button) => {
    button.addEventListener("click", () => playVideo(button.dataset.video, button.dataset.title, button.dataset.meta, true));
  });
}

function markWatched(id, title = "", meta = "") {
  const existing = state.watchedVideos.find((item) => item.id === id);
  const lesson = findLesson(id);
  const record = {
    id,
    title: title || lesson?.title || "YouTube lesson",
    meta: meta || lesson?.meta || lesson?.trackTitle || "Trackify lesson",
    duration: lesson?.duration || "15:00",
    trackKey: lesson?.trackKey || currentTrackKey,
    watchedAt: new Date().toISOString()
  };

  if (existing) Object.assign(existing, record);
  else state.watchedVideos.unshift(record);

  state.watchedVideos = state.watchedVideos.slice(0, 30);
  state.lastVideoId = id;
  updateStreak();
  saveState();
}

function playVideo(id, title = "", meta = "", shouldRecord = false) {
  videoFrame.src = `https://www.youtube.com/embed/${id}`;

  if (shouldRecord) {
    markWatched(id, title, meta);
  } else {
    state.lastVideoId = id;
    saveState();
  }

  videoPlaylist.querySelectorAll(".playlist-button").forEach((item) => {
    item.classList.toggle("active", item.dataset.video === id);
    item.classList.toggle("watched", watchedSet().has(item.dataset.video));
  });

  if (title && !videos.some((video) => video.id === id) && !videoPlaylist.querySelector(`[data-video="${id}"]`)) {
    videoPlaylist.insertAdjacentHTML("afterbegin", `
      <button class="playlist-button active watched" type="button" data-video="${id}" data-title="${title}" data-meta="${meta}" data-watched-label="${t("watched")}">
        <strong>${title}</strong>
        <span>${meta || displayTrack(currentTrackKey).title}</span>
      </button>
    `);
    const inserted = videoPlaylist.querySelector(".playlist-button");
    inserted.addEventListener("click", () => playVideo(id, title, meta, true));
  }

  renderTrack(currentTrackKey);
  renderVideos();
  updateDashboard();
}

function updateDashboard() {
  const watched = state.watchedVideos;
  const uniqueWatched = [...new Map(watched.map((item) => [item.id, item])).values()];
  const totalLessons = allLessons().length;
  const totalHours = uniqueWatched.reduce((sum, item) => sum + parseDurationHours(item.duration || "15:00"), 0);
  const progress = totalLessons ? Math.round((uniqueWatched.length / totalLessons) * 100) : 0;
  const selectedTrackKey = tracks[state.selectedTrack] ? state.selectedTrack : "web";
  const selectedTrack = displayTrack(selectedTrackKey);
  const nextLesson = selectedTrack.list.find((lesson) => !uniqueWatched.some((item) => item.id === lesson.id)) || selectedTrack.list[0];

  dashboardEls.heroUserName.textContent = state.user.name || "Trackify Student";
  dashboardEls.heroLearningSummary.textContent = `${Math.round(totalHours)} ${t("learningHoursCompleted")}`;
  dashboardEls.heroCurrentTrack.textContent = selectedTrack.title;
  dashboardEls.heroProgressPercent.textContent = `${trackProgress(state.selectedTrack || "web")}%`;
  dashboardEls.heroProgressLine.style.width = `${trackProgress(state.selectedTrack || "web")}%`;
  dashboardEls.heroNextLesson.textContent = nextLesson ? nextLesson.title : t("allLessonsCompleted");
  dashboardEls.overallProgress.textContent = `${progress}%`;
  dashboardEls.videosWatched.textContent = uniqueWatched.length;
  dashboardEls.hoursWatched.textContent = Math.round(totalHours);
  dashboardEls.currentStreak.textContent = state.streak || 0;
  dashboardEls.savedTracks.textContent = state.savedTracks.length;

  dashboardEls.dashboardHistory.innerHTML = uniqueWatched.length
    ? uniqueWatched.slice(0, 4).map((item) => `<div><b>${item.title}</b><span>${item.meta} - ${t("watchedSuffix")}</span></div>`).join("")
    : `<div><b>${t("noLessonsTitle")}</b><span>${t("noLessonsText")}</span></div>`;
}

function handleLoginSubmit(event, source) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const email = data.get("email") || "student@trackify.local";
  const name = data.get("name") || email.split("@")[0] || "Trackify Student";
  const button = authButton;
  const message = authMessage;

  message.textContent = "";
  button.textContent = source === "gate" ? t("entering") : t("loggingIn");
  button.disabled = true;

  window.setTimeout(() => {
    loginUser(String(name), String(email));
    button.textContent = t("login");
    button.disabled = false;
    message.textContent = t("loginSuccess");
    form.reset();
  }, 500);
}

authForm.addEventListener("submit", (event) => handleLoginSubmit(event, "gate"));
logoutButton.addEventListener("click", logoutUser);

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  contactMessageStatus.textContent = "";

  const formData = new FormData(contactForm);
  const message = [
    "New Trackify contact message",
    "------------------------------",
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Subject: ${formData.get("subject")}`,
    "",
    `Message: ${formData.get("message")}`
  ].join("\n");

  contactButton.textContent = t("sending");
  contactButton.disabled = true;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message })
    });

    if (!response.ok) throw new Error("Telegram request failed");

    contactMessageStatus.classList.remove("error");
    contactMessageStatus.textContent = t("sent");
    contactForm.reset();
  } catch (error) {
    contactMessageStatus.classList.add("error");
    contactMessageStatus.textContent = t("sendError");
  } finally {
    contactButton.textContent = t("sendTelegram");
    contactButton.disabled = false;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

if (state.theme === "dark") {
  document.body.classList.add("dark");
  themeToggle.querySelector("span").textContent = "L";
}
syncDashboardMatrix();

setAuthScreen();
currentTrackKey = state.selectedTrack || "web";
applyLanguage();
if (state.lastVideoId) playVideo(state.lastVideoId, "", "", false);
updateDashboard();
