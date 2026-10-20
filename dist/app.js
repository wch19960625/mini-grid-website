'use strict';

const translations = {
  en: {
    skip: 'Skip to content', brand: 'Mini Grid', navLabel: 'Main navigation', navAbout: 'The game', navGameplay: 'Gameplay', navJourney: 'Development', navFaq: 'FAQ', wishlistShort: 'Wishlist on Steam', menuLabel: 'Toggle navigation',
    heroEyebrow: 'An indie game about connection', heroLine1: 'Every connection.', heroLine2: 'A city ', heroAccent: 'alight.', heroDescription: 'From your first power line to the pulse of a city.<br>Build a network of your own, between the rivers.', heroAlt: 'Illustrated riverside city connected by power lines, pylons and substations', playDemo: 'Play the free Steam demo', watchTrailer: 'Watch trailer', platformNote: 'Windows · Single-player · 7 in-game languages', scroll: 'Explore the grid',
    strip1: 'Minimal lines', strip2: 'Real grid logic', strip3: 'A growing city', aboutIndex: 'A little grid. A bigger world.', aboutLine1: 'Connected.', aboutLine2: 'Just the beginning.', aboutLead: 'A city needs more than a power line.<br>It needs a response to every change.', aboutBody: 'Mini Grid is a minimalist power-grid planning and management game. Place power plants and substations, match line voltages and cross rivers with underwater cables. As new demand appears, your network grows with it.', aboutBody2: 'Limited construction supplies, rising demand and changing policies turn every connection into a decision worth thinking about.', voltageLabel: 'In-game voltage levels', legendNote: 'Different voltages. One connected city.',
    actualGameplay: 'Captured in-game', gameplayTitle: 'Follow the power. See the city.', gameplayIntro: 'A clear view of every line, and every decision behind it.', galleryLabel: 'Explore gameplay', tabGrid: 'Weave a city together', tabGridBody: 'Turn scattered demand into a connected network.', tabRiver: 'Reach the other bank', tabRiverBody: 'Take power across the river with underwater cables.', tabBuild: 'Think one step ahead', tabBuildBody: 'Plan for growth with limited construction supplies.', tabSwitch: 'Keep the lights on', tabSwitchBody: 'Switch circuits and put backup routes to work.', expand: 'View full image', expandLabel: 'Enlarge gameplay screenshot',
    rhythmIndex: 'Find a rhythm in the changes', rhythmLine1: 'Pause to make a plan.', rhythmLine2: 'Press play. Watch it flow.', rhythmIntro: 'Pause to build, or speed up to see what happens.<br>Leave a little headroom for the next demand.<br>And a little room for your own solution.', planTitle: 'Take a moment. Make a connection.', planBody: 'Read demand forecasts and plan your plants, substations and lines. Be ready before the next load comes online.', balanceTitle: 'Find the right balance of power.', balanceBody: 'Watch capacity, voltage and line losses. Expand, upgrade or reroute to meet the needs of your city.', growTitle: 'Grow alongside your city.', growBody: 'Monthly construction supplies, demand upgrades and changing policies bring new questions to your network.',
    journeyIndex: 'Our journey starts in Wuhan', journeyTitle: 'One city. A starting point.', journeyIntro: 'The game is in development. Be part of what comes next.', cityAlt: 'Illustration of pylons and a city connected across rivers', cityCaption: 'Two rivers. A world of connections.', available: 'PLAY NOW', wuhanTitle: 'Wuhan · Normal mode demo', wuhanBody: 'Start with the standalone tutorial, then explore river crossings, rising demand, circuit switching and backup supply.', demoLink: 'Explore the Steam demo', inDevelopment: 'COMING LATER', modesTitle: 'More ways to manage your grid', modesBody: 'Hardcore and Sandbox modes are in development and are not available in the demo.', comingLater: 'FUTURE EXPLORATIONS', citiesTitle: 'New cities. New connections.', citiesBody: 'Other cities, including Shanghai and Chongqing, are still being planned and developed. Release dates have not been announced.',
    faqTitle: 'Before you<br>connect.', communityLink: 'Join the QQ community', faq1q: 'What kind of game is Mini Grid?', faq1a: 'A single-player power-grid planning and management game. Build plants and substations, match voltages, plan your lines, and adapt the network as your city grows.', faq2q: 'What can I play in the demo?', faq2a: 'Wuhan Normal mode and the standalone tutorial are available, with pause controls, time acceleration, circuit switching, multiple local saves and optional autosaving. Hardcore, Sandbox and other cities are coming later. Random Hardcore equipment faults are not enabled in the demo.', faq3q: 'Do I need to know about power systems?', faq3a: 'The standalone tutorial introduces construction, voltage matching and backup supply. Normal mode lets you pause and plan, so you can learn the grid at your own pace.', faq4q: 'Which platforms and languages are supported?', faq4a: 'Currently Windows. In-game languages include Simplified Chinese, Traditional Chinese, English, German, Japanese, Korean and Russian. Check the Steam store page for system requirements.', faq5q: 'When is the full release? How can I share feedback?', faq5a: 'A full release date has not been announced. Wishlist the game on Steam to follow future news, or join QQ group 942372220 to share your feedback with the developer.',
    ctaEyebrow: 'The next connection is yours.', ctaLine1: 'A growing city.', ctaLine2: 'Your spark.', ctaBody: 'Try Mini Grid. Start with the very first demand.', wishlistFull: 'Wishlist on Steam', playDemoShort: 'Play the free demo', ctaNote: 'In development · Wuhan demo available', studio: '钢镚游戏工作室', footerCommunity: 'Community ↗', closeLabel: 'Close',
  },
};
const chinese = new Map();
document.querySelectorAll('[data-i18n]').forEach(element => chinese.set(element, element.innerHTML));
document.querySelectorAll('[data-label]').forEach(element => chinese.set(element, element.getAttribute('aria-label')));
document.querySelectorAll('[data-alt]').forEach(element => chinese.set(element, element.alt));
const scenes = {
  grid: { zh: '武汉 · 普通模式 · 实机截图', en: 'Wuhan · Normal mode · In-game screenshot', altZh: '武汉电网实机画面，线路连接江河两岸', altEn: 'In-game Wuhan power network connecting both riverbanks', number: '01' },
  river: { zh: '水下电缆 · 跨江连接 · 实机截图', en: 'Underwater cables · River crossing · In-game screenshot', altZh: '使用水下电缆跨江连接电网的实机画面', altEn: 'In-game underwater cables carrying power across the river', number: '02' },
  build: { zh: '工程建设 · 规划与补给 · 实机截图', en: 'Construction · Planning and supplies · In-game screenshot', altZh: '电网工程建设与设备规划的实机画面', altEn: 'In-game construction and equipment planning', number: '03' },
  switch: { zh: '断开回路 · 备用线路 · 实机截图', en: 'Circuit switching · Backup routes · In-game screenshot', altZh: '断开回路与备用供电线路的实机画面', altEn: 'In-game open circuits and backup power routes', number: '04' },
};
let language = 'zh';
let selectedScene = 'grid';
let dialogKind = '';
const dialog = document.querySelector('#media-dialog');
const content = document.querySelector('#dialog-content');
const menu = document.querySelector('#navigation');
const menuToggle = document.querySelector('#menu-toggle');
const tabs = [...document.querySelectorAll('[data-scene]')];

function selectScene(name) {
  selectedScene = name;
  const scene = scenes[name];
  tabs.forEach(tab => {
    const selected = tab.dataset.scene === name;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  const image = document.querySelector('#scene-image');
  image.src = `assets/${name}.webp`;
  image.alt = language === 'en' ? scene.altEn : scene.altZh;
  document.querySelector('#scene-caption').textContent = language === 'en' ? scene.en : scene.zh;
  document.querySelector('#frame-count').textContent = `${scene.number} / 04`;
  document.querySelector('#gallery-panel').setAttribute('aria-labelledby', `tab-${name}`);
}

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === 'en' ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-i18n]').forEach(element => { element.innerHTML = next === 'en' ? translations.en[element.dataset.i18n] : chinese.get(element); });
  document.querySelectorAll('[data-label]').forEach(element => { element.setAttribute('aria-label', next === 'en' ? translations.en[element.dataset.label] : chinese.get(element)); });
  document.querySelectorAll('[data-alt]').forEach(element => { element.alt = next === 'en' ? translations.en[element.dataset.alt] : chinese.get(element); });
  const button = document.querySelector('#language');
  button.innerHTML = next === 'en' ? '中文 <span aria-hidden="true">↗</span>' : 'EN <span aria-hidden="true">↗</span>';
  button.setAttribute('aria-label', next === 'en' ? '切换为简体中文' : 'Switch to English');
  document.title = next === 'en' ? 'Mini Grid — Every connection. A city alight.' : '迷你电网 Mini Grid — 每一次连接，都让城市亮起';
  document.querySelector('meta[name="description"]').content = next === 'en' ? 'A minimalist power-grid planning and management game. Connect a growing city across Wuhan’s rivers. Try the free Steam demo.' : '《迷你电网》是一款极简风格的电网规划与管理游戏。在武汉的江河之间布置电厂、连接线路，守护成长中的城市。前往 Steam 体验 Demo。';
  selectScene(selectedScene);
  try { localStorage.setItem('mini-grid-language', next); } catch { /* Reading the page works when browser storage is unavailable. */ }
}

function closeMenu() {
  menu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function showMedia(kind) {
  dialogKind = kind;
  content.replaceChildren();
  const title = document.querySelector('#dialog-title');
  if (kind === 'video') {
    title.textContent = language === 'en' ? 'Mini Grid · Official trailer' : '迷你电网 · 游戏宣传片';
    const video = document.createElement('video');
    video.src = 'assets/trailer.mp4';
    video.poster = 'assets/grid.webp';
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    content.append(video);
  } else {
    title.textContent = language === 'en' ? scenes[selectedScene].en : scenes[selectedScene].zh;
    const original = document.querySelector('#scene-image');
    const image = document.createElement('img');
    image.src = original.src;
    image.alt = original.alt;
    content.append(image);
  }
  dialog.showModal();
  document.body.classList.add('dialog-open');
  if (kind === 'video') content.querySelector('video').play().catch(() => {});
}

document.querySelector('#language').addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
tabs.forEach(tab => tab.addEventListener('click', () => selectScene(tab.dataset.scene)));
document.querySelector('.gallery-tabs').addEventListener('keydown', event => {
  const current = tabs.indexOf(document.activeElement);
  if (current < 0) return;
  let index = current;
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') index = (current + 1) % tabs.length;
  else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') index = (current - 1 + tabs.length) % tabs.length;
  else if (event.key === 'Home') index = 0;
  else if (event.key === 'End') index = tabs.length - 1;
  else return;
  event.preventDefault();
  selectScene(tabs[index].dataset.scene);
  tabs[index].focus();
});
document.querySelectorAll('[data-trailer]').forEach(button => button.addEventListener('click', () => showMedia('video')));
document.querySelector('#expand-image').addEventListener('click', () => showMedia('image'));
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => {
  if (dialogKind === 'video') { const video = content.querySelector('video'); if (video) { video.pause(); video.removeAttribute('src'); video.load(); } }
  content.replaceChildren();
  document.body.classList.remove('dialog-open');
  dialogKind = '';
});
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('is-open', !expanded);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!menu.contains(event.target) && !menuToggle.contains(event.target)) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
try { if (localStorage.getItem('mini-grid-language') === 'en') setLanguage('en'); } catch { /* Default to Chinese without persistent browser storage. */ }
selectScene(selectedScene);
