/* ═══════════════════════════════════════════════════════════════
   New.js — Trackify
   ═══════════════════════════════════════════════════════════════ */

/* ─── DATA ─── */
const tracks = {
  web: {
    list: [
      { title: "HTML Full Course - Build a Website",  channel: "freeCodeCamp",         duration: "2:02:00", id: "pQN-pnXPaVg" },
      { title: "CSS Crash Course For Beginners",       channel: "Traversy Media",        duration: "1:25:00", id: "yfoY53QXEnI" },
      { title: "CSS Full Course",                      channel: "freeCodeCamp",         duration: "6:18:00", id: "OXGznpKZ_sA" },
      { title: "JavaScript Tutorial for Beginners",    channel: "Programming with Mosh", duration: "48:00",   id: "W6NZfCO5SIk" },
      { title: "JavaScript Full Course",               channel: "freeCodeCamp",         duration: "3:26:00", id: "jS4aFq5-91M" },
      { title: "Build a Responsive Website",           channel: "Kevin Powell",          duration: "1:08:00", id: "bn-DQCifeQQ" }
    ]
  },
  cyber: {
    list: [
      { title: "Cyber Security Full Course",           channel: "edureka!",             duration: "10:08:00", id: "inWWhr5tnEA" },
      { title: "Computer Networking Course",           channel: "freeCodeCamp",         duration: "9:24:00",  id: "qiQR5rTSshw" },
      { title: "Linux Command Line for Beginners",     channel: "freeCodeCamp",         duration: "4:13:00",  id: "sWbUDq4S6Y8" },
      { title: "Web Application Security",             channel: "HackerSploit",         duration: "1:00:00",  id: "2_lswM1S264" },
      { title: "OWASP Top 10 Explained",               channel: "The Cyber Mentor",     duration: "46:00",    id: "zv0kZKC6GAM" },
      { title: "Ethical Hacking Practical Lab",        channel: "freeCodeCamp",         duration: "15:00:00", id: "3Kq1MIfTWCE" }
    ]
  },
  ai: { 
    list: [
      { title: "Python for Beginners",                 channel: "Programming with Mosh", duration: "1:00:00", id: "kqtD5dpn9C8" },
      { title: "Machine Learning for Everybody",       channel: "freeCodeCamp",         duration: "3:53:00",  id: "i_LwzRVP7bg" },
      { title: "Machine Learning Course",              channel: "freeCodeCamp",         duration: "9:23:00",  id: "NWONeJKn6kc" },
      { title: "Neural Networks Explained",            channel: "3Blue1Brown",          duration: "19:00",    id: "aircAruvnKk" },
      { title: "Natural Language Processing",          channel: "freeCodeCamp",         duration: "4:05:00",  id: "8S3qHHUKqYk" },
      { title: "Transformers Explained",               channel: "IBM Technology",       duration: "12:00",    id: "SZorAJ4I-sA" }
    ]
  },
  data: {
    list: [
      { title: "Data Science Full Course",             channel: "freeCodeCamp",         duration: "12:00:00", id: "ua-CiDNNj30" },
      { title: "Pandas Tutorial",                      channel: "Corey Schafer",        duration: "1:06:00",  id: "ZyhVh-qRZPA" },
      { title: "NumPy Tutorial",                       channel: "freeCodeCamp",         duration: "1:00:00",  id: "QUT1VHiLmmI" },
      { title: "Matplotlib Tutorial",                  channel: "Corey Schafer",        duration: "35:00",    id: "UO98lJQ3QGI" },
      { title: "Statistics for Data Science",          channel: "freeCodeCamp",         duration: "2:20:00",  id: "xxpc-HPKN28" },
      { title: "Python Data Analysis Project",         channel: "Alex The Analyst",     duration: "1:08:00",  id: "eMOA1pPVUc4" }
    ]
  }
};

const localizedTracks = {
  ar: {
    web:   { title: "تطوير الويب",        kicker: "أساسيات الفرونت إند لحد المشاريع",      description: "اتعلم HTML وCSS وJavaScript والتصميم المتجاوب وAPIs من خلال ترتيب عملي مناسب للمبتدئين.", duration: "11 ساعة", level: "مناسب للمبتدئين",    topics: ["HTML الدلالي","تخطيط CSS","أساسيات JavaScript","أحداث DOM","JavaScript غير متزامن","مشروع بورتفوليو"] },
    cyber: { title: "الأمن السيبراني",   kicker: "أساسيات الحماية والتطبيق الأخلاقي",     description: "ابني مقدمة قوية في الشبكات ولينكس وأمن الويب والتشفير والاختبار الأمني المسؤول.",        duration: "9 ساعات",  level: "من مبتدئ لمتوسط",  topics: ["الشبكات","لينكس","ثغرات الويب","التشفير","OSINT","عادات آمنة"] },
    ai:    { title: "الذكاء الاصطناعي", kicker: "بايثون وتعلم الآلة والشبكات العصبية",    description: "ابدأ ببايثون للذكاء الاصطناعي، وبعدها تجهيز البيانات وتعلم الآلة والشبكات العصبية وNLP.", duration: "13 ساعة", level: "معتمد على المشاريع", topics: ["Python للـ ML","NumPy","Pandas","Regression","الشبكات العصبية","Transformers"] },
    data:  { title: "علوم البيانات",     kicker: "تحليل وتصوير البيانات والداشبورد",       description: "اتعلم شغل محلل البيانات: تنظيف البيانات، اكتشاف الأنماط، عرض النتائج، وتطبيق الإحصاء.",  duration: "10 ساعات", level: "يركز على التحليل",  topics: ["Pandas","تنظيف البيانات","EDA","الإحصاء","تصوير البيانات","Dashboards"] }
  },
  en: {
    web:   { title: "Web Development",         kicker: "Frontend foundations to real projects",         description: "Learn HTML, CSS, JavaScript, responsive layout, APIs, and project workflow through a practical sequence designed for beginners.", duration: "11 hours", level: "Beginner friendly",       topics: ["HTML semantics","CSS layout","JavaScript basics","DOM events","Async JS","Portfolio project"] },
    cyber: { title: "Cyber Security",          kicker: "Security basics and ethical practice",          description: "Build a strong introduction to networks, Linux, web security, cryptography, and responsible security testing.",             duration: "9 hours",  level: "Beginner to intermediate", topics: ["Networking","Linux","Web vulnerabilities","Cryptography","OSINT","Secure habits"] },
    ai:    { title: "Artificial Intelligence", kicker: "Python, machine learning, and neural networks", description: "Start with Python for AI, then move into data preparation, classic machine learning, neural networks, NLP, and model deployment.", duration: "13 hours", level: "Project based",           topics: ["Python for ML","NumPy","Pandas","Regression","Neural networks","Transformers"] },
    data:  { title: "Data Science",            kicker: "Analysis, visualization, and dashboards",       description: "Learn the workflow of a data professional: clean data, explore patterns, visualize insights, apply statistics, and present findings.", duration: "10 hours", level: "Analysis focused",        topics: ["Pandas","Data cleaning","EDA","Statistics","Visualization","Dashboards"] }
  }
};

/* UI data for cards & modal */
const TRACK_UI_DATA = {
  web:   { emoji: '🌐', color: '#2563eb', bg: 'rgba(37,99,235,0.18)',
    videoData: [
      { title:'HTML Basics',       sub:'Elements, Tags, Attributes',          topic:'HTML',    dur:'45 دقيقة', id:'pQN-pnXPaVg' },
      { title:'CSS, Flex & Grid',  sub:'Selectors, Box Model, Flexbox, Grid', topic:'CSS',     dur:'50 دقيقة', id:'yfoY53QXEnI' },
      { title:'Responsive Design', sub:'Media Queries, Mobile First',          topic:'CSS',     dur:'40 دقيقة', id:'OXGznpKZ_sA' },
      { title:'JavaScript Intro',  sub:'Variables, Functions, Loops',          topic:'JS',      dur:'60 دقيقة', id:'W6NZfCO5SIk' },
      { title:'JS Full Course',    sub:'Deep Dive into JavaScript',            topic:'JS',      dur:'48 دقيقة', id:'jS4aFq5-91M' },
      { title:'Build a Website',   sub:'Full Responsive Project',              topic:'Project', dur:'68 دقيقة', id:'bn-DQCifeQQ' }
    ]
  },
  cyber: { emoji: '🛡️', color: '#9333ea', bg: 'rgba(147,51,234,0.18)',
    videoData: [
      { title:'Cyber Security Full', sub:'Overview & Core Concepts',           topic:'Intro',    dur:'60 دقيقة', id:'inWWhr5tnEA' },
      { title:'Computer Networking', sub:'OSI, TCP/IP, Protocols',             topic:'Networks', dur:'56 دقيقة', id:'qiQR5rTSshw' },
      { title:'Linux CLI',           sub:'Commands, File System',              topic:'Linux',    dur:'45 دقيقة', id:'sWbUDq4S6Y8' },
      { title:'Web App Security',    sub:'XSS, SQLi, CSRF',                   topic:'Web Sec',  dur:'40 دقيقة', id:'2_lswM1S264' },
      { title:'OWASP Top 10',        sub:'Common Security Risks',              topic:'Web Sec',  dur:'46 دقيقة', id:'zv0kZKC6GAM' },
      { title:'Ethical Hacking Lab', sub:'Practical Pen Testing',              topic:'Pen Test', dur:'55 دقيقة', id:'3Kq1MIfTWCE' }
    ]
  },
  ai:    { emoji: '🤖', color: '#06b6d4', bg: 'rgba(6,182,212,0.18)',
    videoData: [
      { title:'Python for Beginners',    sub:'Syntax, OOP, Libraries',         topic:'Python', dur:'60 دقيقة', id:'kqtD5dpn9C8' },
      { title:'Machine Learning Intro',  sub:'Regression, Classification',     topic:'ML',     dur:'55 دقيقة', id:'i_LwzRVP7bg' },
      { title:'ML Full Course',          sub:'Complete Walkthrough',           topic:'ML',     dur:'56 دقيقة', id:'NWONeJKn6kc' },
      { title:'Neural Networks',         sub:'Weights, Activations, Backprop', topic:'DL',     dur:'19 دقيقة', id:'aircAruvnKk' },
      { title:'NLP Fundamentals',        sub:'Tokenization, Embeddings',       topic:'NLP',    dur:'45 دقيقة', id:'8S3qHHUKqYk' },
      { title:'Transformers Explained',  sub:'Attention, BERT, GPT',           topic:'DL',     dur:'12 دقيقة', id:'SZorAJ4I-sA' }
    ]
  },
  data:  { emoji: '📊', color: '#16a34a', bg: 'rgba(22,163,74,0.18)',
    videoData: [
      { title:'Data Science Full',   sub:'Roles, Tools, Workflow',             topic:'Intro',   dur:'45 دقيقة', id:'ua-CiDNNj30' },
      { title:'Pandas Tutorial',     sub:'DataFrames, Filtering, Groupby',     topic:'Pandas',  dur:'66 دقيقة', id:'ZyhVh-qRZPA' },
      { title:'NumPy Tutorial',      sub:'Arrays, Broadcasting, Math',         topic:'NumPy',   dur:'60 دقيقة', id:'QUT1VHiLmmI' },
      { title:'Matplotlib Tutorial', sub:'Plots, Subplots, Styling',           topic:'Viz',     dur:'35 دقيقة', id:'UO98lJQ3QGI' },
      { title:'Statistics for DS',   sub:'Mean, Variance, Distributions',      topic:'Stats',   dur:'40 دقيقة', id:'xxpc-HPKN28' },
      { title:'Python Data Project', sub:'End-to-End Analysis',                topic:'Project', dur:'68 دقيقة', id:'eMOA1pPVUc4' }
    ]
  }
};

const featuredVideos = [
  { title: "HTML & CSS Intro",           meta: "Web Development — مبتدئين",              id: "pQN-pnXPaVg" },
  { title: "JavaScript Essentials",      meta: "Web Development — أساسيات",              id: "W6NZfCO5SIk" },
  { title: "Python for Beginners",       meta: "AI & Data Science — أساسيات",            id: "kqtD5dpn9C8" },
  { title: "Cyber Security Full Course", meta: "Cyber Security — نظرة عامة",             id: "inWWhr5tnEA" },
  { title: "Data Science Full Course",   meta: "Data Science — مسار كامل",               id: "ua-CiDNNj30" },
  { title: "Neural Networks Explained",  meta: "Artificial Intelligence — Deep Learning", id: "aircAruvnKk" }
];

/* ─── CONSTANTS ─── */
const STORAGE_KEY        = 'trackify_state_v1';
const TELEGRAM_BOT_TOKEN = '8350390838:AAEurfYHJHuhSQWwLjuOykvPTWM1njD60ng';
const TELEGRAM_CHAT_ID   = '5764585492';

/* ─── STATE ─── */
function defaultState() {
  return {
    isLoggedIn:    false,
    user:          { name: '', email: '' },
    selectedTrack: 'web',
    lastVideoId:   'pQN-pnXPaVg',
    watchedVideos: [],
    savedTracks:   ['web'],
    theme:         'light',
    language:      'ar',
    lastVisitDate: '',
    streak:        0
  };
}

function loadState() {
  try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY)) }; }
  catch { return defaultState(); }}

let state           = loadState();
let currentTrackKey = state.selectedTrack || 'web';

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

/* ─── LANGUAGE HELPERS ─── */
function currentLang() { return state.language === 'en' ? 'en' : 'ar'; }

function applyLangToDOM() {
  const lang = currentLang();
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-ar]').forEach(el => {
    const val = el.getAttribute('data-' + lang) || el.getAttribute('data-ar');
    if (val) el.textContent = val;
  });
  buildTrackCards();
  renderVideos();
  updateDashboard();}

/* ─── UTILITIES ─── */
function displayTrack(key) {
  const base   = tracks[key];
  const locale = localizedTracks[currentLang()][key] || localizedTracks.ar[key];
  return { ...base, ...locale };}

function allLessons() {
  return Object.entries(tracks).flatMap(([k, t]) =>
    t.list.map(l => ({ ...l, trackKey: k, trackTitle: displayTrack(k).title }))
  );}

function findLesson(id) {
  return allLessons().find(l => l.id === id) || featuredVideos.find(v => v.id === id);}

function parseDurationHours(d) {
  const p = d.split(':').map(Number);
  if (p.length === 3) return p[0] + p[1] / 60 + p[2] / 3600;
  if (p.length === 2) return p[0] / 60 + p[1] / 3600;
  return 0.25;}
function watchedSet() { return new Set(state.watchedVideos.map(i => i.id)); }

function updateStreak() {
  const today     = new Date().toISOString().slice(0, 10);
  if (state.lastVisitDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak    = state.lastVisitDate === yesterday ? state.streak + 1 : 1;
  state.lastVisitDate = today;}

/* ─── AUTH ─── */
function setAuthScreen() {
  document.body.classList.toggle('auth-locked', !state.isLoggedIn);}

function loginUser(name, email) {
  state.isLoggedIn = true;
  state.user       = { name, email };
  updateStreak();
  saveState();
  setAuthScreen();
  applyLangToDOM();}

function logoutUser() {
  state.isLoggedIn = false;
  saveState();
  setAuthScreen();
  window.scrollTo({ top: 0, behavior: 'smooth' });}

/* ─── DARK MODE & LANGUAGE ─── */
(function initDarkLang() {

  function syncNavDark() {
    const isDark   = document.body.classList.contains('dark');
    const darkIcon = document.getElementById('dark-icon');
    const darkTip  = document.getElementById('dark-tip');
    if (darkIcon) darkIcon.textContent = isDark ? '☀️' : '🌙';
    if (darkTip)  darkTip.textContent  = isDark
      ? (currentLang() === 'ar' ? 'الوضع النهاري' : 'Light mode')
      : (currentLang() === 'ar' ? 'الوضع الليلي'  : 'Dark mode');}

  function syncNavLang() {
    const lang      = currentLang();
    const langLabel = document.getElementById('lang-label');
    const langTip   = document.getElementById('lang-tip');
    if (langLabel) langLabel.textContent = lang === 'ar' ? 'EN' : 'AR';
    if (langTip)   langTip.textContent   = lang === 'ar' ? 'Switch to English' : 'التحويل للعربي';}

  function syncAuthButtons() {
    const lang   = currentLang();
    const isDark = document.body.classList.contains('dark');
    const authLangBtn = document.getElementById('auth-lang-btn');
    const authLangTip = document.getElementById('auth-lang-tip');
    const authDarkBtn = document.getElementById('auth-dark-btn');
    const authDarkTip = document.getElementById('auth-dark-tip');
    if (authLangBtn) authLangBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    if (authLangTip) authLangTip.textContent = lang === 'ar' ? 'Switch to English' : 'التحويل للعربي';
    if (authDarkBtn) authDarkBtn.textContent = isDark ? '☀️' : '🌙';
    if (authDarkTip) authDarkTip.textContent = isDark
      ? (lang === 'ar' ? 'الوضع النهاري' : 'Light mode')
      : (lang === 'ar' ? 'الوضع الليلي'  : 'Dark mode');}

  function applyDark(isDark) {
    document.body.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('dark-early', isDark);
    localStorage.setItem('dark', isDark ? 'true' : 'false');
    state.theme = isDark ? 'dark' : 'light';
    saveState();
    syncNavDark();
    syncAuthButtons();
    syncDashMatrix();}

  function applyLang(lang) {
    state.language = lang;
    localStorage.setItem('lang', lang);
    saveState();
    applyLangToDOM();
    syncNavLang();
    syncAuthButtons();}

  document.getElementById('dark-btn')
    ?.addEventListener('click', () => applyDark(!document.body.classList.contains('dark')));
  document.getElementById('lang-btn')
    ?.addEventListener('click', () => applyLang(currentLang() === 'ar' ? 'en' : 'ar'));
  document.getElementById('auth-dark-btn')
    ?.addEventListener('click', () => applyDark(!document.body.classList.contains('dark')));
  document.getElementById('auth-lang-btn')
    ?.addEventListener('click', () => applyLang(currentLang() === 'ar' ? 'en' : 'ar'));

  new MutationObserver(() => { syncNavDark(); syncAuthButtons(); })
    .observe(document.body, { attributes: true, attributeFilter: ['class'] });
  syncNavDark();
  syncNavLang();
  syncAuthButtons();

})();

/* ══════════════════════════════════════════════
   TRACK CARDS
══════════════════════════════════════════════ */
function buildTrackCards() {
  const grid = document.getElementById('tracksCardsGrid');
  if (!grid) return;
  const lang = currentLang();
  grid.innerHTML = '';

  ['web','cyber','ai','data'].forEach(k => {
    const ui        = TRACK_UI_DATA[k];
    const data      = localizedTracks[lang][k] || localizedTracks.ar[k];
    const base      = tracks[k];
    const watched   = watchedSet();
    const watchedCount = base.list.filter(v => watched.has(v.id)).length;
    const total     = base.list.length;
    const pct       = total ? Math.round((watchedCount / total) * 100) : 0;
    const btnLabel  = lang === 'ar'
      ? (watchedCount > 0 ? 'متابعة ←' : 'ابدأ ←')
      : (watchedCount > 0 ? 'Continue →' : 'Start →');
    const metaLabel = lang === 'ar'
      ? (watchedCount > 0 ? `${watchedCount} / ${total} مكتملة` : 'لم تبدأ بعد')
      : (watchedCount > 0 ? `${watchedCount} / ${total} done` : 'Not started');

    // حساب الحلقة
    const r = 17;
    const circumference = 2 * Math.PI * r;
    const offset = circumference - (pct / 100) * circumference;

    const card = document.createElement('div');
    card.className = 'tcard';
    card.innerHTML = `
      <div class="tcard-accent" style="background:${ui.color};"></div>
      <div class="tcard-top">
        <div class="tcard-icon" style="background:${ui.bg}">${ui.emoji}</div>
        <div class="tcard-info">
          <div class="tcard-title">${data.title}</div>
          <div class="tcard-sub">${total} ${lang==='ar'?'فيديوهات':'videos'} · ${data.duration}</div>
        </div>
        <div class="tcard-ring">
          <svg width="42" height="42" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="${r}" fill="none"
              stroke="rgba(255,255,255,0.1)" stroke-width="3"/>
            <circle cx="21" cy="21" r="${r}" fill="none"
              stroke="${ui.color}" stroke-width="3"
              stroke-dasharray="${circumference.toFixed(1)}"
              stroke-dashoffset="${offset.toFixed(1)}"
              stroke-linecap="round"/>
          </svg>
          <div class="tcard-ring-label">${pct}%</div>
        </div>
      </div>
      <div class="tcard-tags">
        ${data.topics.slice(0,3).map(t => `<span class="tcard-tag">${t}</span>`).join('')}
      </div>
      <div class="tcard-footer">
        <span class="tcard-meta">${metaLabel}</span>
        <button class="tcard-btn" style="background:${ui.color}">${btnLabel}</button>
      </div>
    `;

    card.querySelector('.tcard-btn').addEventListener('click', () => {
      currentTrackKey     = k;
      state.selectedTrack = k;
      if (!state.savedTracks.includes(k)) state.savedTracks.push(k);
      saveState();
      openTrackModal(k);
    });

    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════════
   TRACK MODAL 
══════════════════════════════════════════════ */

// overlay واحد بس بيتعمل مرة واحدة
let modalOverlay = null;

function getOrCreateOverlay() {
  if (modalOverlay) return modalOverlay;

  modalOverlay = document.createElement('div');
  modalOverlay.className = 'tmodal-overlay';

  // إغلاق لما تضغط برا المودال
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeTrackModal();
  });

  document.body.appendChild(modalOverlay);
  return modalOverlay;}

function closeTrackModal() {
  if (modalOverlay) modalOverlay.classList.remove('active');}

function openTrackModal(activeKey) {
  const overlay = getOrCreateOverlay();

  function renderModal(k) {
    const ui      = TRACK_UI_DATA[k];
    const lang    = currentLang();
    const data    = localizedTracks[lang][k] || localizedTracks.ar[k];
    const base    = tracks[k];
    const watched = watchedSet();

    overlay.innerHTML = `
      <div class="tmodal-box">
        <div class="tmodal-header">
          <span class="tmodal-title">${lang==='ar'?'تفاصيل التراك':'Track Details'}</span>
          <button class="tmodal-close" id="tModalClose">✕</button>
        </div>
        <div class="tmodal-tabs">
          ${['web','cyber','ai','data'].map(key => {
            const d = localizedTracks[lang][key] || localizedTracks.ar[key];
            const u = TRACK_UI_DATA[key];
            const active = key === k;
            return `<button class="tmodal-tab${active?' active':''}" data-key="${key}"
              style="${active?`background:${u.color};border-color:${u.color};`:''}">
              ${u.emoji} ${d.title.split(' ')[0]}
            </button>`;
          }).join('')}
        </div>
        <div class="ttrack-header">
          <div class="ttrack-icon-lg" style="background:${ui.bg}">${ui.emoji}</div>
          <div>
            <div class="ttrack-name">${data.title}</div>
            <div class="ttrack-subtags">${data.topics.join(' · ')}</div>
          </div>
        </div>
        <div class="ttrack-descbox">${data.description}</div>
        <div class="ttrack-metabadges">
          <span class="meta-bdg" style="background:#166534;color:#86efac;">${lang==='ar'?'مجاني ✓':'✓ Free'}</span>
          <span class="meta-bdg" style="background:#1e3a5f;color:#93c5fd;">${base.list.length} Videos</span>
          <span class="meta-bdg" style="background:#78350f;color:#fcd34d;">~${data.duration}</span>
        </div>
        <table class="video-tbl">
          <thead>
            <tr style="background:${ui.color}22;">
              <th style="color:${ui.color};width:44px;">#</th>
              <th style="color:${ui.color};">${lang==='ar'?'الفيديو':'Video'}</th>
              <th style="color:${ui.color};">${lang==='ar'?'الموضوع':'Topic'}</th>
              <th style="color:${ui.color};">${lang==='ar'?'المدة':'Duration'}</th>
            </tr>
          </thead>
          <tbody>
            ${ui.videoData.map((v, i) => {
              const isWatched = watched.has(v.id);
              return `<tr data-video="${v.id}" data-title="${v.title}" data-meta="${data.title}" style="cursor:pointer;">
                <td><div class="vid-num-badge" style="background:${isWatched?'#166534':ui.color}">${i+1}</div></td>
                <td>
                  <div class="vid-ttitle">${v.title}${isWatched
                    ? ` <span style="background:#166534;color:#86efac;font-size:11px;padding:2px 8px;border-radius:999px;font-weight:800;">${lang==='ar'?'تمت المشاهدة':'Watched'}</span>`
                    : ''}</div>
                  <div class="vid-tsub">${v.sub}</div>
                </td>
                <td><span class="vid-ttopic" style="color:${ui.color}">${v.topic}</span></td>
                <td><span class="vid-tdur" style="background:${ui.color}33;color:${ui.color};">${v.dur}</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;

    // زرار الإغلاق
    overlay.querySelector('#tModalClose')
      .addEventListener('click', () => closeTrackModal());

    // التابات
    overlay.querySelectorAll('.tmodal-tab[data-key]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentTrackKey     = btn.dataset.key;
        state.selectedTrack = btn.dataset.key;
        saveState();
        renderModal(btn.dataset.key);
      });
    });

    // الضغط على فيديو
    overlay.querySelectorAll('tbody tr[data-video]').forEach(row => {
      row.addEventListener('click', () => {
        playVideo(row.dataset.video, row.dataset.title, row.dataset.meta, true);
        closeTrackModal();
        document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  renderModal(activeKey);
  // إظهار المودال
  overlay.classList.add('active');}

/* ─── RENDER VIDEOS PLAYLIST ─── */
function renderVideos() {
  const playlist = document.getElementById('videoPlaylist');
  if (!playlist) return;
  const watched      = watchedSet();
  const lang         = currentLang();
  const watchedLabel = lang === 'ar' ? 'تمت المشاهدة' : 'Watched';

  playlist.innerHTML = featuredVideos.map(v => `
    <button class="playlist-btn ${v.id === state.lastVideoId ? 'active' : ''} ${watched.has(v.id) ? 'watched' : ''}"
      type="button" data-video="${v.id}" data-title="${v.title}"
      data-meta="${v.meta}" data-watched-label="${watchedLabel}">
      <strong>${v.title}</strong>
      <span>${v.meta}</span>
    </button>
  `).join('');

  playlist.querySelectorAll('.playlist-btn').forEach(btn => {
    btn.addEventListener('click', () =>
      playVideo(btn.dataset.video, btn.dataset.title, btn.dataset.meta, true)
    );
  });}

/* ─── PLAY VIDEO ─── */
function markWatched(id, title = '', meta = '') {
  const lesson = findLesson(id);
  const record = {
    id,
    title:    title  || lesson?.title    || 'YouTube lesson',
    meta:     meta   || lesson?.meta     || lesson?.trackTitle || 'Trackify lesson',
    duration: lesson?.duration || '15:00',
    trackKey: lesson?.trackKey || currentTrackKey,
    watchedAt: new Date().toISOString()
  };
  const existing = state.watchedVideos.find(i => i.id === id);
  if (existing) Object.assign(existing, record);
  else state.watchedVideos.unshift(record);
  state.watchedVideos = state.watchedVideos.slice(0, 30);
  state.lastVideoId   = id;
  updateStreak();
  saveState();}

function playVideo(id, title = '', meta = '', shouldRecord = false) {
  const frame = document.getElementById('videoFrame');
  if (frame) {
    frame.src = `https://www.youtube.com/embed/${id}`;
    frame.title = title || 'Trackify selected lesson';
  }

  if (shouldRecord) markWatched(id, title, meta);
  else { state.lastVideoId = id; saveState(); }

  const playlist = document.getElementById('videoPlaylist');
  if (playlist) {
    const lang         = currentLang();
    const watchedLabel = lang === 'ar' ? 'تمت المشاهدة' : 'Watched';
    playlist.querySelectorAll('.playlist-btn').forEach(btn => {
      btn.classList.toggle('active',  btn.dataset.video === id);
      btn.classList.toggle('watched', watchedSet().has(btn.dataset.video));
      btn.dataset.watchedLabel = watchedLabel;
    });
    if (!featuredVideos.some(v => v.id === id) && !playlist.querySelector(`[data-video="${id}"]`)) {
      const btn             = document.createElement('button');
      btn.className         = 'playlist-btn active watched';
      btn.type              = 'button';
      btn.dataset.video     = id;
      btn.dataset.title     = title;
      btn.dataset.meta      = meta;
      btn.dataset.watchedLabel = watchedLabel;
      btn.innerHTML         = `<strong>${title}</strong><span>${meta}</span>`;
      btn.addEventListener('click', () => playVideo(id, title, meta, true));
      playlist.insertAdjacentElement('afterbegin', btn);
    }
  }
  renderVideos();
  updateDashboard();}

/* ─── DASHBOARD ─── */
function updateDashboard() {
  const lang         = currentLang();
  const watched      = state.watchedVideos;
  const unique       = [...new Map(watched.map(i => [i.id, i])).values()];
  const totalLessons = allLessons().length;
  const totalHours   = unique.reduce((s, i) => s + parseDurationHours(i.duration || '15:00'), 0);
  const progress     = totalLessons ? Math.round((unique.length / totalLessons) * 100) : 0;

  const noLessonsTitle = lang === 'ar' ? 'لسه مفيش دروس متشاهدة' : 'No lessons watched yet';
  const noLessonsText  = lang === 'ar' ? 'ابدأ من أي مسار'        : 'Start from any track';
  const watchedSuffix  = lang === 'ar' ? 'تمت مشاهدته'            : 'watched';

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('overallProgress', `${progress}%`);
  set('videosWatched',   unique.length);
  set('hoursWatched',    Math.round(totalHours));
  set('currentStreak',   state.streak || 0);
  set('savedTracks',     state.savedTracks.length);

  const histEl = document.getElementById('dashboardHistory');
  if (histEl) {
    histEl.innerHTML = unique.length
      ? unique.slice(0, 4).map(i => `
          <div class="history-item">
            <b>${i.title}</b>
            <span>${i.meta} — ${watchedSuffix}</span>
          </div>`).join('')
      : `<div class="history-item">
           <b>${noLessonsTitle}</b>
           <span>${noLessonsText}</span>
         </div>`;
  }}

/* ─── DASHBOARD MATRIX ─── */
let dashMatrixId = null;
let dashDrops    = [];
const dashChars  = '01<>/{}[]()=+-*#@TRACKIFYJSHTMLCSSAI'.split('');

function resizeDashMatrix() {
  const c = document.getElementById('dashboardMatrix');
  if (!c) return;
  const r    = window.devicePixelRatio || 1;
  const rect = c.getBoundingClientRect();
  c.width    = Math.max(1, Math.floor(rect.width  * r));
  c.height   = Math.max(1, Math.floor(rect.height * r));
  dashDrops  = Array.from({ length: Math.floor(c.width / 18) }, () => Math.random() * -60);}

function drawDashMatrix() {
  const c = document.getElementById('dashboardMatrix');
  if (!c) return;
  const ctx = c.getContext('2d');
  if (!document.body.classList.contains('dark')) {
    ctx.clearRect(0, 0, c.width, c.height);
    dashMatrixId = null;
    return;}
  ctx.fillStyle = 'rgba(5,11,22,0.09)';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.font = '15px monospace';
  dashDrops.forEach((drop, i) => {
    const ch = dashChars[Math.floor(Math.random() * dashChars.length)];
    ctx.fillStyle = Math.random() > 0.96 ? 'rgba(147,197,253,0.95)' : 'rgba(34,197,94,0.82)';
    ctx.fillText(ch, i * 18, drop * 18);
    if (drop * 18 > c.height && Math.random() > 0.965) dashDrops[i] = 0;
    dashDrops[i]++;
  });
  dashMatrixId = requestAnimationFrame(drawDashMatrix);}

function syncDashMatrix() {
  resizeDashMatrix();
  const c = document.getElementById('dashboardMatrix');
  if (!c) return;
  if (document.body.classList.contains('dark') && !dashMatrixId) {
    dashMatrixId = requestAnimationFrame(drawDashMatrix);
  } else if (!document.body.classList.contains('dark')) {
    c.getContext('2d').clearRect(0, 0, c.width, c.height);
    dashMatrixId = null;}
}

/* ─── SCROLL PROGRESS ─── */
window.addEventListener('scroll', () => {
  const el  = document.getElementById('scrollProgress');
  if (!el) return;
  const doc = document.documentElement;
  const h   = doc.scrollHeight - doc.clientHeight;
  el.style.width = h > 0 ? `${(doc.scrollTop / h) * 100}%` : '0%';
});

/* ─── MOBILE NAV ─── */
const menuToggle = document.getElementById('menuToggle');
const mobileNav  = document.getElementById('mobileNav');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
  mobileNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    })
  );
}

/* ─── AUTH FORM ─── */
const authForm    = document.getElementById('authForm');
const authButton  = document.getElementById('authButton');
const authMessage = document.getElementById('authMessage');

if (authForm) {
  authForm.addEventListener('submit', e => {
    e.preventDefault();
    const data  = new FormData(authForm);
    const lang  = currentLang();
    const email = String(data.get('email') || 'student@trackify.local');
    const name  = String(data.get('name')  || email.split('@')[0] || 'Trackify Student');
    if (authMessage) authMessage.textContent = '';
    if (authButton) {
      authButton.textContent = lang === 'ar' ? 'جاري الدخول...' : 'Logging in...';
      authButton.disabled    = true;
    }
    setTimeout(() => {
      loginUser(name, email);
      if (authButton) {
        authButton.textContent = lang === 'ar' ? 'تسجيل الدخول' : 'Log In';
        authButton.disabled    = false;
      }
      if (authMessage) {
        authMessage.textContent = lang === 'ar'
          ? 'تم تسجيل الدخول بنجاح. تقدمك هيتحفظ محلياً.'
          : 'Login successful. Your progress will be saved locally.';
      }
      authForm.reset();
    }, 500);
  });}
document.getElementById('logoutButton')?.addEventListener('click', logoutUser);

/* ─── CONTACT FORM ─── */
const contactForm   = document.getElementById('contactForm');
const contactButton = document.getElementById('contactButton');
const contactStatus = document.getElementById('contactMessageStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const lang = currentLang();
    if (contactStatus) { contactStatus.textContent = ''; contactStatus.className = 'form-msg'; }
    const fd  = new FormData(contactForm);
    const msg = [
      'New Trackify contact message', '------------------------------',
      `Name: ${fd.get('name')}`, `Email: ${fd.get('email')}`,
      `Subject: ${fd.get('subject')}`, '', `Message: ${fd.get('message')}`
    ].join('\n');
    if (contactButton) {
      contactButton.textContent = lang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
      contactButton.disabled    = true;}
    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg })
      });
      if (!res.ok) throw new Error();
      if (contactStatus) contactStatus.textContent = lang === 'ar' ? 'تم إرسال الرسالة بنجاح.' : 'Message sent successfully.';
      contactForm.reset();
    } catch {
      if (contactStatus) {
        contactStatus.classList.add('error');
        contactStatus.textContent = lang === 'ar'
          ? 'تعذر إرسال الرسالة. تأكد من اتصال الإنترنت.'
          : 'Message could not be sent. Please check your internet connection.';
      }
    } finally {
      if (contactButton) {
        contactButton.textContent = lang === 'ar' ? 'إرسال إلى تليجرام' : 'Send to Telegram';
        contactButton.disabled    = false;
      }
    }
  });
}

/* ─── REVEAL ANIMATION ─── */
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
/* ─── INIT ─── */
(function init() {
  const savedDark = localStorage.getItem('dark') === 'true' || state.theme === 'dark';
  document.body.classList.toggle('dark', savedDark);
  if (savedDark) document.documentElement.classList.add('dark-early');
  state.theme = savedDark ? 'dark' : 'light';
  state.language = localStorage.getItem('lang') === 'en' ? 'en' : 'ar';
  setAuthScreen();
  syncDashMatrix();
  currentTrackKey = state.selectedTrack || 'web';
  applyLangToDOM();

  if (state.lastVideoId) playVideo(state.lastVideoId, '', '', false);
  updateDashboard();
  buildTrackCards();
})();
