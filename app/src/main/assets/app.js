const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const VERSION='0.2.5';
const I18N={
  en:{
    installApp:'Install App',language:'Language',help:'Help',aboutLicenses:'About & Licenses',
    brandTagline:'Free • Open Source • Local First',homeTitle:'Documents without the nonsense.',homeLead:'Open, scan, convert, preview, print and export everyday documents.',
    openPdf:'Open PDF',openPdfDesc:'View PDF pages, print one page or all pages, remove unwanted pages, and export PDF text.',
    convertToPdf:'Convert to PDF',convertDesc:'Open DOCX, legacy DOC (Word 97–2003) or TXT and save it as PDF.',
    scanDocument:'Scan Document',scanDesc:'Camera or image library → four-corner crop → perspective correction → A4 → PDF.',
    newDocument:'New Document',newDesc:'Type or paste text, then save as PDF, DOCX or TXT.',
    privacyHome:'🔒 Files are processed in your browser. This build does not upload your documents to an application server.',
    homeBack:'← Home',printPage:'Print Page',printAll:'Print All',deletePage:'Delete Page',savePdf:'Save PDF',export:'Export',pages:'Pages',ready:'Ready',
    openFile:'Open File',convertStatusInitial:'Open a DOCX, DOC or TXT file',convertEmpty:'Open a supported file to preview it here.',
    scanPage:'+ Scan Page',scanStatusInitial:'Add a scan page',scanEmpty:'Use <b>+ Scan Page</b> to photograph a page or import an image.',
    cropHelp:'<b>Blue frame = final paper.</b> Drag the four corners to the real paper edges. The dark area will be removed.',
    rotate90:'Rotate 90°',resetFrame:'Reset Frame',originalPhoto:'Original Photo',cropUseA4:'Crop & Use A4',cancel:'Cancel',
    addPage:'+ Page',saveAs:'Save As',newPlaceholder:'Type or paste text here…',
    chooseLanguage:'Choose the interface language.',chooseImageSource:'Choose an image source.',useCamera:'Use Camera',importImage:'Import Image',
    exportPdf:'Export PDF',exportPdfDesc:"Export the currently kept pages. Text-based PDF pages are extracted directly. Image-only pages are OCR'd when needed.",
    ocrLanguage:'OCR language for image-only pages',langEnglish:'English',langRussian:'Russian',langHebrew:'Hebrew',langEnglishRussian:'English + Russian',langEnglishHebrew:'English + Hebrew',
    saveTxt:'Save TXT',saveDocx:'Save DOCX',saveNewAs:'Save New Document As',share:'Share',shareNewAs:'Share New Document As',close:'Close',
    pageN:'Page {n}',newDocumentDefault:'New document',scannedDocumentDefault:'Scanned document',
    helpHtml:`<h2>Help</h2><h3>Open PDF</h3><p>Open a PDF for viewing. Use <b>Print Page</b> for the selected page or <b>Print All</b> for the whole document. <b>Delete Page</b> removes an unwanted page from the working list. <b>Save PDF</b> saves only the pages that remain. <b>Export</b> saves PDF text as TXT or DOCX; image-only pages are OCR'd when necessary.</p><h3>Convert to PDF</h3><p>Open TXT, DOCX or legacy Word 97–2003 DOC, preview the converted pages, remove unwanted pages if necessary, print, then use <b>Save PDF</b>. Legacy DOC is imported through a browser-only open-source parser; complex original layout may be simplified.</p><h3>Scan Document</h3><p>Use the camera or import an image. Move the four blue corner handles to the actual paper corners. <b>Crop & Use A4</b> removes everything outside the frame, corrects perspective and fits the paper to A4. Add more scan pages if needed, then print or save one multi-page PDF.</p><h3>New Document</h3><p>Type or paste text. Add or delete pages. Save as PDF, DOCX or TXT. This is simple document creation, not a PDF editor.</p><h3>Pages</h3><p>The page list remains intentionally available in every multi-page workflow so you can select, print or remove a specific page.</p>`,
    aboutHtml:`<h2>About & Licenses</h2><p><b>OpenDoc</b> is a free, open-source, local-first utility for ordinary document tasks. Its scope is deliberately small: view PDFs, scan paper, convert documents, save and print. It is <b>not</b> a PDF editor.</p><h3>License</h3><p>The application source in this ZIP is released under <b>Apache License 2.0</b>. See <code>LICENSE</code>.</p><h3>Third-party open-source software</h3><p>Mozilla PDF.js / pdfjs-dist 5.4.296 (Apache-2.0), pdf-lib 1.17.1 (MIT), Tesseract.js 7.0.0 (Apache-2.0), JSZip 3.10.1 (MIT), docx-preview 0.4.1 (Apache-2.0), html2canvas 1.4.1 (MIT), docx 9.8.1 (MIT), and JSDoc legacy DOC parser (0BSD). See <code>THIRD_PARTY_NOTICES.md</code>.</p><h3>Privacy</h3><p>The app itself does not upload documents to an application server. Processing happens in the browser. This prototype loads open-source runtime libraries and, when OCR is used, language data from public CDNs, so first use may require internet access.</p><h3>No warranty</h3><p>The software is provided “as is”. Conversion and OCR can make mistakes. Review important documents before relying on them.</p>`
  },
  ru:{
    installApp:'Установить',language:'Язык',help:'Помощь',aboutLicenses:'О программе и лицензии',
    brandTagline:'Бесплатно • Open Source • Локальная обработка',homeTitle:'Документы без лишнего.',homeLead:'Открывайте, сканируйте, конвертируйте, просматривайте, печатайте и экспортируйте повседневные документы.',
    openPdf:'Открыть PDF',openPdfDesc:'Просматривайте PDF, печатайте одну страницу или весь документ, удаляйте ненужные страницы и экспортируйте текст.',
    convertToPdf:'Конвертировать в PDF',convertDesc:'Откройте DOCX, старый DOC (Word 97–2003) или TXT и сохраните как PDF.',
    scanDocument:'Сканировать документ',scanDesc:'Камера или изображение → обрезка по четырём углам → исправление перспективы → A4 → PDF.',
    newDocument:'Новый документ',newDesc:'Введите или вставьте текст, затем сохраните как PDF, DOCX или TXT.',
    privacyHome:'🔒 Файлы обрабатываются в вашем браузере. Эта версия не загружает документы на сервер приложения.',
    homeBack:'← Главная',printPage:'Печать страницы',printAll:'Печатать всё',deletePage:'Удалить страницу',savePdf:'Сохранить PDF',export:'Экспорт',pages:'Страницы',ready:'Готово',
    openFile:'Открыть файл',convertStatusInitial:'Откройте файл DOCX, DOC или TXT',convertEmpty:'Откройте поддерживаемый файл, чтобы увидеть его здесь.',
    scanPage:'+ Сканировать страницу',scanStatusInitial:'Добавьте страницу скана',scanEmpty:'Используйте <b>+ Сканировать страницу</b>, чтобы сфотографировать страницу или импортировать изображение.',
    cropHelp:'<b>Синяя рамка = итоговый лист.</b> Перетащите четыре угла к реальным краям бумаги. Затемнённая область будет удалена.',
    rotate90:'Повернуть на 90°',resetFrame:'Сбросить рамку',originalPhoto:'Исходное фото',cropUseA4:'Обрезать и подогнать под A4',cancel:'Отмена',
    addPage:'+ Страница',saveAs:'Сохранить как',newPlaceholder:'Введите или вставьте текст…',
    chooseLanguage:'Выберите язык интерфейса.',chooseImageSource:'Выберите источник изображения.',useCamera:'Камера',importImage:'Импорт изображения',
    exportPdf:'Экспорт PDF',exportPdfDesc:'Экспортируются оставленные страницы. Из текстового PDF текст извлекается напрямую. Для страниц-изображений при необходимости используется OCR.',
    ocrLanguage:'Язык OCR для страниц-изображений',langEnglish:'Английский',langRussian:'Русский',langHebrew:'Иврит',langEnglishRussian:'Английский + русский',langEnglishHebrew:'Английский + иврит',
    saveTxt:'Сохранить TXT',saveDocx:'Сохранить DOCX',saveNewAs:'Сохранить новый документ как',share:'Поделиться',shareNewAs:'Поделиться новым документом как',close:'Закрыть',
    pageN:'Страница {n}',newDocumentDefault:'Новый документ',scannedDocumentDefault:'Сканированный документ',
    helpHtml:`<h2>Помощь</h2><h3>Открыть PDF</h3><p>Откройте PDF для просмотра. <b>Печать страницы</b> печатает выбранную страницу, а <b>Печатать всё</b> — весь документ. <b>Удалить страницу</b> убирает ненужную страницу из рабочего списка. <b>Сохранить PDF</b> сохраняет только оставшиеся страницы. <b>Экспорт</b> сохраняет текст PDF в TXT или DOCX; если страница является изображением, при необходимости используется OCR.</p><h3>Конвертировать в PDF</h3><p>Откройте TXT, DOCX или старый Word DOC 97–2003, просмотрите полученные страницы, при необходимости удалите лишние, распечатайте или нажмите <b>Сохранить PDF</b>. Старый DOC читается открытым браузерным парсером; сложная исходная вёрстка может быть упрощена.</p><h3>Сканировать документ</h3><p>Используйте камеру или импорт изображения. Передвиньте четыре синих угла к настоящим углам листа. <b>Обрезать и подогнать под A4</b> удалит всё за рамкой, исправит перспективу и приведёт лист к формату A4. Можно добавить несколько страниц, затем распечатать или сохранить один многостраничный PDF.</p><h3>Новый документ</h3><p>Введите или вставьте текст. Добавляйте и удаляйте страницы. Сохраняйте как PDF, DOCX или TXT. Это простой инструмент создания документов, а не PDF-редактор.</p><h3>Страницы</h3><p>Список страниц специально остаётся доступным во всех многостраничных режимах, чтобы можно было выбрать, распечатать или удалить конкретную страницу.</p>`,
    aboutHtml:`<h2>О программе и лицензии</h2><p><b>OpenDoc</b> — бесплатная open-source утилита с локальной обработкой для обычной работы с документами. Набор функций намеренно небольшой: просмотр PDF, сканирование бумаги, конвертация документов, сохранение и печать. Это <b>не</b> PDF-редактор.</p><h3>Лицензия</h3><p>Исходный код приложения в этом ZIP распространяется по лицензии <b>Apache License 2.0</b>. Полный официальный текст находится в файле <code>LICENSE</code>.</p><h3>Стороннее open-source ПО</h3><p>Программа использует Mozilla PDF.js / pdfjs-dist 5.4.296 (Apache-2.0), pdf-lib 1.17.1 (MIT), Tesseract.js 7.0.0 (Apache-2.0), JSZip 3.10.1 (MIT), docx-preview 0.4.1 (Apache-2.0), html2canvas 1.4.1 (MIT), docx 9.8.1 (MIT) и JSDoc legacy DOC parser (0BSD). Сведения об авторах и лицензиях находятся в <code>THIRD_PARTY_NOTICES.md</code>.</p><h3>Конфиденциальность</h3><p>Само приложение не загружает документы на сервер приложения: обработка выполняется в браузере. При первом использовании отдельные open-source библиотеки, а также языковые данные OCR могут загружаться из публичных CDN, поэтому для первого запуска некоторых функций может потребоваться интернет.</p><h3>Отказ от гарантий</h3><p>Программа предоставляется «как есть». Конвертация и OCR могут допускать ошибки. Важные документы следует проверять перед использованием.</p>`
  }
};
let currentLang=localStorage.getItem('opendoc.language')==='ru'?'ru':'en';
function t(key,vars={}){let s=I18N[currentLang]?.[key]??I18N.en[key]??key;for(const [k,v] of Object.entries(vars))s=String(s).replaceAll(`{${k}}`,v);return s}
function localizeSystemText(text){if(currentLang!=='ru')return text;const exact={
  'There are no pages.':'Нет страниц.','The document must keep at least one page.':'В документе должна остаться хотя бы одна страница.',
  'Loading PDF…':'Загрузка PDF…','Could not open PDF':'Не удалось открыть PDF','This PDF could not be opened.':'Не удалось открыть этот PDF.',
  'Saving PDF…':'Сохранение PDF…','Preparing text export…':'Подготовка экспорта текста…','Text export failed. OCR may require an internet connection the first time.':'Не удалось экспортировать текст. При первом использовании OCR может потребоваться интернет.',
  'Preparing DOCX export…':'Подготовка экспорта DOCX…','DOCX export failed.':'Не удалось экспортировать DOCX.','Opening file…':'Открытие файла…','Reading legacy DOC…':'Чтение старого DOC…',
  'Conversion preview failed':'Не удалось подготовить просмотр','This file could not be converted in the current browser build.':'Этот файл не удалось конвертировать в текущей браузерной версии.',
  'Move the four blue corners to the paper edges, then Crop & Use A4':'Передвиньте четыре синих угла к краям бумаги, затем нажмите «Обрезать и подогнать под A4».',
  'Scan edit cancelled':'Обработка скана отменена','Original photo restored':'Исходное фото восстановлено','The crop corners cross or the selected area is too small.':'Углы рамки пересекаются или выбранная область слишком мала.',
  'Cropping and correcting perspective…':'Обрезка и исправление перспективы…','A4 scan page stored':'Страница A4 добавлена','Could not crop this image.':'Не удалось обрезать это изображение.',
  'There are no pages to save.':'Нет страниц для сохранения.','PDF engine is unavailable. Reload once while online.':'Модуль PDF недоступен. Один раз перезагрузите приложение при наличии интернета.',
  'Creating PDF…':'Создание PDF…','PDF save failed':'Не удалось сохранить PDF','Could not create PDF.':'Не удалось создать PDF.','Creating DOCX…':'Создание DOCX…','Could not create DOCX.':'Не удалось создать DOCX.'
};
  if(exact[text])return exact[text];
  let m;
  if((m=/^Rendering page (\d+)\/(\d+)…$/.exec(text)))return `Отрисовка страницы ${m[1]}/${m[2]}…`;
  if((m=/^(\d+) page\(s\) • ready$/.exec(text)))return `${m[1]} стр. • готово`;
  if((m=/^Saved (.+)$/.exec(text)))return `Сохранено: ${m[1]}`;
  if((m=/^OCR (\d+)\/(\d+): (\d+)%$/.exec(text)))return `OCR ${m[1]}/${m[2]}: ${m[3]}%`;
  if((m=/^(\d+) page\(s\) ready for PDF$/.exec(text)))return `${m[1]} стр. готовы для PDF`;
  if((m=/^(\d+) page\(s\) ready for PDF • legacy DOC layout simplified$/.exec(text)))return `${m[1]} стр. готовы для PDF • вёрстка старого DOC упрощена`;
  if((m=/^Rendering DOCX page (\d+)\/(\d+)…$/.exec(text)))return `Отрисовка страницы DOCX ${m[1]}/${m[2]}…`;
  if((m=/^Fitting A4… (\d+)%$/.exec(text)))return `Подгонка под A4… ${m[1]}%`;
  if((m=/^Creating PDF page (\d+)\/(\d+)…$/.exec(text)))return `Создание страницы PDF ${m[1]}/${m[2]}…`;
  return text
}
function applyLanguage(lang=currentLang,{persist=true}={}){const old=currentLang;currentLang=lang==='ru'?'ru':'en';if(persist)localStorage.setItem('opendoc.language',currentLang);document.documentElement.lang=currentLang;
  $$('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});$$('[data-i18n-html]').forEach(el=>{el.innerHTML=t(el.dataset.i18nHtml)});$$('[data-i18n-placeholder]').forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder)});
  $$('[data-act="pdfShare"],[data-act="convertShare"],[data-act="scanShare"],[data-act="newShare"]').forEach(el=>{el.textContent=t('share')});
  const shareTitle=$('#newShareDialog h2');if(shareTitle)shareTitle.textContent=t('shareNewAs');
  const isDefault=(value,key)=>!value||Object.values(I18N).some(pack=>value===pack[key]);
  if(isDefault(newState.title,'newDocumentDefault'))newState.title=t('newDocumentDefault');
  if(isDefault(scanState.title,'scannedDocumentDefault'))scanState.title=t('scannedDocumentDefault');
  if($('#newTitle')&&isDefault($('#newTitle').value,'newDocumentDefault'))$('#newTitle').value=newState.title;
  if($('#scanTitle')&&isDefault($('#scanTitle').value,'scannedDocumentDefault'))$('#scanTitle').value=scanState.title;
  renderPdf();renderConvert();renderScan();renderNew();
}
function uiAlert(text){window.alert(localizeSystemText(text))}
let deferredInstallPrompt=null;
const pdfState={title:'',pages:[],current:0,originalBytes:null};
const convertState={title:'',pages:[],current:0};
const scanState={title:I18N[currentLang].scannedDocumentDefault,pages:[],current:0,pending:null};
const newState={title:I18N[currentLang].newDocumentDefault,pages:[{text:''}],current:0};
const defaultCrop=()=>({tl:{x:.06,y:.06},tr:{x:.94,y:.06},br:{x:.94,y:.94},bl:{x:.06,y:.94}});
const fullCrop=()=>({tl:{x:0,y:0},tr:{x:1,y:0},br:{x:1,y:1},bl:{x:0,y:1}});
let dragCorner=null;

// v0.2.5 — survive accidental reloads in the installed PWA.
// Work is kept locally in IndexedDB; no document data is sent to a server.
const WORK_DB='opendoc-work-v1', WORK_STORE='state', WORK_KEY='current';
let currentView='home', persistenceReady=false, persistTimer=null;
function openWorkDb(){return new Promise((resolve,reject)=>{const req=indexedDB.open(WORK_DB,1);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains(WORK_STORE))req.result.createObjectStore(WORK_STORE)};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
async function saveWorkNow(){if(!persistenceReady)return;clearTimeout(persistTimer);persistTimer=null;try{syncNew();syncScanTitle();const db=await openWorkDb();const snapshot={version:1,currentView,pdf:{title:pdfState.title,pages:pdfState.pages,current:pdfState.current,originalBytes:pdfState.originalBytes},convert:{title:convertState.title,pages:convertState.pages,current:convertState.current},scan:{title:scanState.title,pages:scanState.pages,current:scanState.current,pending:scanState.pending},newDoc:{title:newState.title,pages:newState.pages,current:newState.current},savedAt:Date.now()};await new Promise((resolve,reject)=>{const tx=db.transaction(WORK_STORE,'readwrite');tx.objectStore(WORK_STORE).put(snapshot,WORK_KEY);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error)});db.close()}catch(e){console.warn('OpenDoc session save skipped',e)}}
function schedulePersist(delay=450){if(!persistenceReady)return;clearTimeout(persistTimer);persistTimer=setTimeout(saveWorkNow,delay)}
async function loadSavedWork(){try{const db=await openWorkDb();const snapshot=await new Promise((resolve,reject)=>{const tx=db.transaction(WORK_STORE,'readonly'),req=tx.objectStore(WORK_STORE).get(WORK_KEY);req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error)});db.close();return snapshot}catch(e){console.warn('OpenDoc session restore skipped',e);return null}}
function normalizeIndex(state){if(!Array.isArray(state.pages))state.pages=[];state.current=Math.max(0,Math.min(Number(state.current)||0,Math.max(0,state.pages.length-1)))}
async function restoreSavedWork(){const s=await loadSavedWork();if(!s||s.version!==1)return 'home';if(s.pdf){Object.assign(pdfState,s.pdf);if(pdfState.originalBytes&&!(pdfState.originalBytes instanceof Uint8Array))pdfState.originalBytes=new Uint8Array(pdfState.originalBytes);normalizeIndex(pdfState)}if(s.convert){Object.assign(convertState,s.convert);normalizeIndex(convertState)}if(s.scan){Object.assign(scanState,s.scan);normalizeIndex(scanState)}if(s.newDoc){Object.assign(newState,s.newDoc);if(!newState.pages.length)newState.pages=[{text:''}];normalizeIndex(newState)}
  $('#scanTitle').value=scanState.title||t('scannedDocumentDefault');$('#newTitle').value=newState.title||t('newDocumentDefault');$('#newText').value=newState.pages[newState.current]?.text||'';
  renderPdf();renderConvert();renderScan();renderNew();
  if(scanState.pending){$('#scanStored').classList.add('hidden');$('#scanEditor').classList.remove('hidden');setScanEditorImage(scanState.pending.working||scanState.pending.original)}else{$('#scanEditor').classList.add('hidden');$('#scanStored').classList.remove('hidden')}
  return ['home','pdfView','convertView','scanView','newView'].includes(s.currentView)?s.currentView:'home'}

function show(id,{persist=true}={}){$$('.view').forEach(v=>v.classList.remove('active'));$('#'+id).classList.add('active');currentView=id;scrollTo({top:0,behavior:'instant'});if(persist)schedulePersist()}
function safeName(s){return String(s||'document').normalize('NFKC').trim().replace(/[\\/:*?"<>|\x00-\x1F]+/g,'_').replace(/\s+/g,'_').replace(/^_+|_+$/g,'')||'document'}
function stamp(){const d=new Date(),p=n=>String(n).padStart(2,'0');return `${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`}
function download(blob,name){const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;a.style.display='none';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),60000)}
function openDialog(el){if(!el)return;try{if(typeof el.showModal==='function'){if(!el.open)el.showModal();return}}catch(_){}el.setAttribute('open','');el.classList.add('dialogFallbackOpen')}
function closeDialog(el){if(!el)return;try{if(typeof el.close==='function'&&el.open){el.close();return}}catch(_){}el.removeAttribute('open');el.classList.remove('dialogFallbackOpen')}
function info(html){$('#infoBody').innerHTML=html;openDialog($('#info'))}
function loadImage(src){return new Promise((res,rej)=>{const im=new Image();im.onload=()=>res(im);im.onerror=rej;im.src=src})}
function fileToDataUrl(f){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(f)})}
function setText(el,text){const x=$(el);if(x){const status=['#pdfStatus','#convertStatus','#scanStatus','#newStatus'].includes(el);x.textContent=status?localizeSystemText(text):text}}
function makePageButtons(container,pages,current,onPick,labeler){const box=$(container);box.innerHTML='';pages.forEach((p,i)=>{const b=document.createElement('button');b.className='pageBtn'+(i===current?' active':'');b.textContent=labeler?labeler(p,i):t('pageN',{n:i+1});b.onclick=()=>onPick(i);box.appendChild(b)})}
function requirePage(pages){if(!pages.length){uiAlert('There are no pages.');return false}return true}
function deleteSelected(state,render){if(!state.pages.length)return;if(state.pages.length===1){uiAlert('The document must keep at least one page.');return}state.pages.splice(state.current,1);state.current=Math.min(state.current,state.pages.length-1);render()}
function syncNew(){newState.title=$('#newTitle').value||t('newDocumentDefault');if(newState.pages[newState.current])newState.pages[newState.current].text=$('#newText').value}
function syncScanTitle(){scanState.title=$('#scanTitle').value||t('scannedDocumentDefault')}

const standaloneQuery=matchMedia('(display-mode: standalone)');
function isStandaloneApp(){return standaloneQuery.matches||window.navigator.standalone===true}
function updateInstallButton(){const b=$('#installBtn');if(!b)return;if(isStandaloneApp()||!deferredInstallPrompt)b.classList.add('hidden');else b.classList.remove('hidden')}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;updateInstallButton()});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;updateInstallButton()});
standaloneQuery.addEventListener?.('change',updateInstallButton);
window.addEventListener('DOMContentLoaded',updateInstallButton);
async function installApp(){if(isStandaloneApp()){updateInstallButton();return}if(deferredInstallPrompt){const prompt=deferredInstallPrompt;deferredInstallPrompt=null;updateInstallButton();prompt.prompt();await prompt.userChoice;updateInstallButton();return}updateInstallButton()}

function renderPdf(){makePageButtons('#pdfPages',pdfState.pages,pdfState.current,i=>{pdfState.current=i;renderPdf()},(_,i)=>t('pageN',{n:i+1}));setText('#pdfTitle',pdfState.title||'PDF');const p=pdfState.pages[pdfState.current];const im=$('#pdfPageImage');if(p){im.src=p.image;im.classList.remove('hidden')}else im.classList.add('hidden');schedulePersist()}
function extractPdfText(items){const rows=[];for(const it of items||[]){const s=String(it.str||'').trim();if(!s)continue;const x=Number(it.transform?.[4]||0),y=Number(it.transform?.[5]||0);let row=rows.find(r=>Math.abs(r.y-y)<3);if(!row){row={y,parts:[]};rows.push(row)}row.parts.push({x,s})}rows.sort((a,b)=>b.y-a.y);return rows.map(r=>r.parts.sort((a,b)=>a.x-b.x).map(x=>x.s).join(' ').replace(/\s+/g,' ').trim()).join('\n').trim()}
async function openPdfFile(f){show('pdfView');setText('#pdfStatus','Loading PDF…');try{const pdfjs=await import('https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build/pdf.min.mjs');pdfjs.GlobalWorkerOptions.workerSrc='https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs';const bytes=new Uint8Array(await f.arrayBuffer()),originalBytes=bytes.slice();const pdf=await pdfjs.getDocument({data:bytes}).promise;pdfState.title=f.name.replace(/\.pdf$/i,'');pdfState.originalBytes=originalBytes;pdfState.pages=[];for(let n=1;n<=pdf.numPages;n++){setText('#pdfStatus',`Rendering page ${n}/${pdf.numPages}…`);const page=await pdf.getPage(n);let text='';try{text=extractPdfText((await page.getTextContent()).items)}catch(_){}const base=page.getViewport({scale:1}),scale=Math.max(1.15,Math.min(2.2,1400/base.width)),vp=page.getViewport({scale});const c=document.createElement('canvas');c.width=Math.round(vp.width);c.height=Math.round(vp.height);const ctx=c.getContext('2d',{alpha:false});ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);await page.render({canvasContext:ctx,viewport:vp}).promise;pdfState.pages.push({originalIndex:n-1,image:c.toDataURL('image/jpeg',.9),text});page.cleanup?.()}pdfState.current=0;renderPdf();setText('#pdfStatus',`${pdfState.pages.length} page(s) • ready`)}catch(e){console.error(e);setText('#pdfStatus','Could not open PDF');uiAlert('This PDF could not be opened.') }}
async function saveOpenedPdf(){if(!requirePage(pdfState.pages)||!window.PDFLib)return;setText('#pdfStatus','Saving PDF…');try{const {PDFDocument}=window.PDFLib;const src=await PDFDocument.load(pdfState.originalBytes);const out=await PDFDocument.create();const idx=pdfState.pages.map(p=>p.originalIndex);const copied=await out.copyPages(src,idx);copied.forEach(p=>out.addPage(p));const bytes=await out.save();const name=`${safeName(pdfState.title)}_${stamp()}.pdf`;download(new Blob([bytes],{type:'application/pdf'}),name);setText('#pdfStatus',`Saved ${name}`)}catch(e){console.error(e);await saveGenericPdf(pdfState.pages.map(p=>({type:'image',image:p.image})),pdfState.title,'#pdfStatus')}}
async function ensurePdfTexts(lang){let worker=null;try{for(let i=0;i<pdfState.pages.length;i++){const p=pdfState.pages[i];if((p.text||'').trim())continue;if(!window.Tesseract)throw new Error('OCR engine unavailable');if(!worker)worker=await Tesseract.createWorker(lang,1,{logger:m=>{if(m.progress)setText('#pdfStatus',`OCR ${i+1}/${pdfState.pages.length}: ${Math.round(m.progress*100)}%`)}});const r=await worker.recognize(p.image);p.text=(r.data.text||'').trim()}schedulePersist();return pdfState.pages.map(p=>p.text||'')}finally{try{await worker?.terminate()}catch(_){}}}
async function exportPdfTxt(){closeDialog($('#pdfExportDialog'));try{setText('#pdfStatus','Preparing text export…');const texts=await ensurePdfTexts($('#ocrLang').value);const body=texts.map((t,i)=>`${i?`\n\n--- Page ${i+1} ---\n\n`:''}${t}`).join('');const name=`${safeName(pdfState.title)}_${stamp()}.txt`;download(new Blob([body],{type:'text/plain;charset=utf-8'}),name);setText('#pdfStatus',`Saved ${name}`)}catch(e){console.error(e);uiAlert('Text export failed. OCR may require an internet connection the first time.')}}
async function exportPdfDocx(){closeDialog($('#pdfExportDialog'));try{setText('#pdfStatus','Preparing DOCX export…');const texts=await ensurePdfTexts($('#ocrLang').value);const mod=await import('https://cdn.jsdelivr.net/npm/docx@9.8.1/+esm');const children=[];texts.forEach((t,pi)=>{const lines=(t||'').replace(/\r/g,'').split('\n');if(!lines.length)lines.push('');lines.forEach((line,li)=>children.push(new mod.Paragraph({pageBreakBefore:pi>0&&li===0,children:[new mod.TextRun(line||' ')]}))) });const doc=new mod.Document({sections:[{children}]});const blob=await mod.Packer.toBlob(doc);const name=`${safeName(pdfState.title)}_${stamp()}.docx`;download(blob,name);setText('#pdfStatus',`Saved ${name}`)}catch(e){console.error(e);uiAlert('DOCX export failed.')}}

function renderConvert(){makePageButtons('#convertPages',convertState.pages,convertState.current,i=>{convertState.current=i;renderConvert()},(_,i)=>t('pageN',{n:i+1}));setText('#convertTitle',convertState.title||t('convertToPdf'));const body=$('#convertPageBody');body.innerHTML='';const p=convertState.pages[convertState.current];if(!p){body.innerHTML=`<div class="emptyState">${t('convertEmpty')}</div>`;schedulePersist();return}if(p.type==='image'){const im=document.createElement('img');im.src=p.image;body.appendChild(im)}else{const d=document.createElement('div');d.className='textPreview';d.textContent=p.text||'';body.appendChild(d)}schedulePersist()}
function simpleTextPages(text){const raw=String(text||'').replace(/\r/g,'').split('\n'),out=[];let lines=[];const push=()=>{out.push({type:'text',text:lines.join('\n')});lines=[]};for(const line0 of raw){let line=line0;if(!line){lines.push('');if(lines.length>=44)push();continue}while(line.length>95){let cut=line.lastIndexOf(' ',95);if(cut<45)cut=95;lines.push(line.slice(0,cut));line=line.slice(cut).trimStart();if(lines.length>=44)push()}lines.push(line);if(lines.length>=44)push()}if(lines.length||!out.length)push();return out}
async function openConvertFile(f){show('convertView');convertState.title=f.name.replace(/\.[^.]+$/,'');setText('#convertStatus','Opening file…');const ext=f.name.toLowerCase().split('.').pop();try{if(ext==='doc'){
      if(typeof window.docToText!=='function')throw new Error('Legacy DOC parser unavailable');
      setText('#convertStatus','Reading legacy DOC…');
      const buf=await f.arrayBuffer();
      const text=window.docToText(buf);
      if(text==null)throw new Error('Unsupported or unreadable legacy DOC');
      convertState.pages=simpleTextPages(text);
      convertState.current=0;
      renderConvert();
      setText('#convertStatus',`${convertState.pages.length} page(s) ready for PDF • legacy DOC layout simplified`);
      return
    }if(ext==='txt'){const text=await f.text();convertState.pages=simpleTextPages(text);convertState.current=0;renderConvert();setText('#convertStatus',`${convertState.pages.length} page(s) ready for PDF`);return}if(ext==='docx'){if(!window.docx?.renderAsync||!window.html2canvas)throw new Error('DOCX renderer unavailable');const host=$('#docxRenderHost');host.innerHTML='';await window.docx.renderAsync(f,host,null,{breakPages:true,ignoreLastRenderedPageBreak:false,useBase64URL:true,renderHeaders:true,renderFooters:true});try{await document.fonts?.ready}catch(_){}await new Promise(r=>setTimeout(r,250));let sections=[...host.querySelectorAll('section.docx')];if(!sections.length)sections=[host];convertState.pages=[];for(let i=0;i<sections.length;i++){setText('#convertStatus',`Rendering DOCX page ${i+1}/${sections.length}…`);const c=await window.html2canvas(sections[i],{backgroundColor:'#ffffff',scale:1.45,useCORS:true,logging:false});convertState.pages.push({type:'image',image:c.toDataURL('image/jpeg',.92)})}host.innerHTML='';convertState.current=0;renderConvert();setText('#convertStatus',`${convertState.pages.length} page(s) ready for PDF`);return}throw new Error('Unsupported file type')}catch(e){console.error(e);setText('#convertStatus','Conversion preview failed');uiAlert('This file could not be converted in the current browser build.')}}

function renderScan(){syncScanTitle();makePageButtons('#scanPages',scanState.pages,scanState.current,i=>{scanState.current=i;renderScan()},(_,i)=>t('pageN',{n:i+1}));const box=$('#scanStored');box.innerHTML='';const p=scanState.pages[scanState.current];if(p){const im=document.createElement('img');im.src=p.image;box.appendChild(im)}else box.innerHTML=`<div class="emptyState">${t('scanEmpty')}</div>`;schedulePersist()}
function updateCropUI(){const p=scanState.pending;if(!p)return;const order=['tl','tr','br','bl'],points=order.map(k=>`${(p.crop[k].x*100).toFixed(2)},${(p.crop[k].y*100).toFixed(2)}`);$('#cropPolygon').setAttribute('points',points.join(' '));$('#cropShade').setAttribute('d',`M0,0 H100 V100 H0 Z M${points[0]} L${points[1]} L${points[2]} L${points[3]} Z`);order.forEach(k=>{const h=$(`.cropHandle[data-c="${k}"]`);h.style.left=(p.crop[k].x*100)+'%';h.style.top=(p.crop[k].y*100)+'%'})}
function setScanEditorImage(src){const im=$('#scanImage');im.onload=()=>updateCropUI();im.src=src}
async function beginScanImage(f){const src=await fileToDataUrl(f);scanState.pending={original:src,working:src,crop:defaultCrop()};$('#scanStored').classList.add('hidden');$('#scanEditor').classList.remove('hidden');setScanEditorImage(src);setText('#scanStatus','Move the four blue corners to the paper edges, then Crop & Use A4');schedulePersist()}
function cancelScanEdit(){scanState.pending=null;$('#scanEditor').classList.add('hidden');$('#scanStored').classList.remove('hidden');renderScan();setText('#scanStatus','Scan edit cancelled')}
function restoreScanOriginal(){const p=scanState.pending;if(!p)return;p.working=p.original;p.crop=defaultCrop();setScanEditorImage(p.working);setText('#scanStatus','Original photo restored');schedulePersist()}
function resetScanCrop(){if(!scanState.pending)return;scanState.pending.crop=defaultCrop();updateCropUI();schedulePersist()}
function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
function polygonConvex(c){const q=['tl','tr','br','bl'].map(k=>c[k]);let sign=0;for(let i=0;i<4;i++){const a=q[i],b=q[(i+1)%4],d=q[(i+2)%4],cross=(b.x-a.x)*(d.y-b.y)-(b.y-a.y)*(d.x-b.x);if(Math.abs(cross)<.0005)return false;const s=Math.sign(cross);if(!sign)sign=s;else if(s!==sign)return false}let area=0;for(let i=0;i<4;i++){const a=q[i],b=q[(i+1)%4];area+=a.x*b.y-b.x*a.y}return Math.abs(area)/2>.02}
function squareToQuad(p0,p1,p2,p3){const dx1=p1.x-p2.x,dx2=p3.x-p2.x,dx3=p0.x-p1.x+p2.x-p3.x,dy1=p1.y-p2.y,dy2=p3.y-p2.y,dy3=p0.y-p1.y+p2.y-p3.y;let a,b,c=p0.x,d,e,f=p0.y,g=0,h=0;if(Math.abs(dx3)<1e-8&&Math.abs(dy3)<1e-8){a=p1.x-p0.x;b=p3.x-p0.x;d=p1.y-p0.y;e=p3.y-p0.y}else{const den=dx1*dy2-dx2*dy1;if(Math.abs(den)<1e-10)throw new Error('Invalid crop');g=(dx3*dy2-dx2*dy3)/den;h=(dx1*dy3-dx3*dy1)/den;a=p1.x-p0.x+g*p1.x;b=p3.x-p0.x+h*p3.x;d=p1.y-p0.y+g*p1.y;e=p3.y-p0.y+h*p3.y}return{a,b,c,d,e,f,g,h}}
function dist(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
async function cropPendingA4(){const p=scanState.pending;if(!p)return null;if(!polygonConvex(p.crop)){uiAlert('The crop corners cross or the selected area is too small.');return null}setText('#scanStatus','Cropping and correcting perspective…');const img=await loadImage(p.working);const maxSource=3000,s=Math.min(1,maxSource/Math.max(img.naturalWidth,img.naturalHeight)),sw=Math.round(img.naturalWidth*s),sh=Math.round(img.naturalHeight*s);const sc=document.createElement('canvas');sc.width=sw;sc.height=sh;const sx=sc.getContext('2d',{alpha:false,willReadFrequently:true});sx.fillStyle='#fff';sx.fillRect(0,0,sw,sh);sx.drawImage(img,0,0,sw,sh);const pts=['tl','tr','br','bl'].map(k=>({x:p.crop[k].x*sw,y:p.crop[k].y*sh})),avgW=(dist(pts[0],pts[1])+dist(pts[3],pts[2]))/2,avgH=(dist(pts[0],pts[3])+dist(pts[1],pts[2]))/2,landscape=avgW>avgH,tw=landscape?1980:1400,th=landscape?1400:1980,H=squareToQuad(pts[0],pts[1],pts[2],pts[3]),src=sx.getImageData(0,0,sw,sh).data,tc=document.createElement('canvas');tc.width=tw;tc.height=th;const tx=tc.getContext('2d',{alpha:false}),out=tx.createImageData(tw,th),dst=out.data,du=1/(tw-1),dv=1/(th-1);for(let y=0;y<th;y++){const v=y*dv,bv=H.b*v+H.c,ev=H.e*v+H.f,hv=H.h*v+1;for(let x=0;x<tw;x++){const u=x*du,den=H.g*u+hv,xx=(H.a*u+bv)/den,yy=(H.d*u+ev)/den,di=(y*tw+x)*4;if(xx>=0&&yy>=0&&xx<sw&&yy<sh){const ix=Math.min(sw-1,Math.max(0,Math.round(xx))),iy=Math.min(sh-1,Math.max(0,Math.round(yy))),si=(iy*sw+ix)*4;dst[di]=src[si];dst[di+1]=src[si+1];dst[di+2]=src[si+2];dst[di+3]=255}else{dst[di]=dst[di+1]=dst[di+2]=255;dst[di+3]=255}}if(y%240===0){setText('#scanStatus',`Fitting A4… ${Math.round(y/th*100)}%`);await new Promise(r=>setTimeout(r,0))}}tx.putImageData(out,0,0);return tc.toDataURL('image/jpeg',.94)}
async function finalizeScan(){try{const image=await cropPendingA4();if(!image)return;scanState.pages.push({type:'image',image});scanState.current=scanState.pages.length-1;scanState.pending=null;$('#scanEditor').classList.add('hidden');$('#scanStored').classList.remove('hidden');renderScan();setText('#scanStatus','A4 scan page stored') }catch(e){console.error(e);uiAlert('Could not crop this image.')}}
async function rotatePending(){const p=scanState.pending;if(!p)return;const img=await loadImage(p.working),c=document.createElement('canvas');c.width=img.naturalHeight;c.height=img.naturalWidth;const x=c.getContext('2d',{alpha:false});x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.translate(c.width/2,c.height/2);x.rotate(Math.PI/2);x.drawImage(img,-img.naturalWidth/2,-img.naturalHeight/2);p.working=c.toDataURL('image/jpeg',.95);p.crop=defaultCrop();setScanEditorImage(p.working);schedulePersist()}

function renderNew(){syncNew();makePageButtons('#newPages',newState.pages,newState.current,i=>{syncNew();newState.current=i;renderNew()},(_,i)=>t('pageN',{n:i+1}));$('#newTitle').value=newState.title;$('#newText').value=newState.pages[newState.current]?.text||'';schedulePersist()}
function newDocument(){newState.title=t('newDocumentDefault');newState.pages=[{text:''}];newState.current=0;show('newView');renderNew();setText('#newStatus','Ready')}
function newAddPage(){syncNew();newState.pages.push({text:''});newState.current=newState.pages.length-1;renderNew()}

function textCanvas(text){const c=document.createElement('canvas');c.width=1240;c.height=1754;const x=c.getContext('2d',{alpha:false});x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.fillStyle='#111827';x.font='28px Arial, sans-serif';x.textBaseline='top';const margin=105,max=c.width-margin*2,lineH=42;let y=110;for(const para of String(text||'').replace(/\r/g,'').split('\n')){if(para===''){y+=lineH;continue}const words=para.split(/\s+/);let line='';for(const w of words){const test=line?line+' '+w:w;if(x.measureText(test).width<=max){line=test;continue}x.fillText(line,margin,y);y+=lineH;line=w;if(y>c.height-120)break}if(y>c.height-120)break;if(line){x.fillText(line,margin,y);y+=lineH}if(y>c.height-120)break}return c}
async function embedImage(pdf,data){const bytes=await fetch(data).then(r=>r.arrayBuffer());return /^data:image\/png/i.test(data)?pdf.embedPng(bytes):pdf.embedJpg(bytes)}
async function saveGenericPdf(pages,title,statusSel){if(!pages.length){uiAlert('There are no pages to save.');return}if(!window.PDFLib){uiAlert('PDF engine is unavailable. Reload once while online.');return}setText(statusSel,'Creating PDF…');try{const {PDFDocument}=window.PDFLib,pdf=await PDFDocument.create(),A4P=[595.28,841.89],A4L=[841.89,595.28];for(let i=0;i<pages.length;i++){setText(statusSel,`Creating PDF page ${i+1}/${pages.length}…`);let data=pages[i].image;if(pages[i].type==='text')data=textCanvas(pages[i].text).toDataURL('image/jpeg',.94);const im=await embedImage(pdf,data),land=im.width>im.height,[pw,ph]=land?A4L:A4P,page=pdf.addPage([pw,ph]),scale=Math.min(pw/im.width,ph/im.height),w=im.width*scale,h=im.height*scale;page.drawImage(im,{x:(pw-w)/2,y:(ph-h)/2,width:w,height:h})}const bytes=await pdf.save(),name=`${safeName(title)}_${stamp()}.pdf`;download(new Blob([bytes],{type:'application/pdf'}),name);setText(statusSel,`Saved ${name}`)}catch(e){console.error(e);setText(statusSel,'PDF save failed');uiAlert('Could not create PDF.')}}


function blobToDataUrl(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result||''));r.onerror=()=>reject(r.error||new Error('FileReader failed'));r.readAsDataURL(blob)})}

async function shareBlob(blob,name,mimeType){
  const type=mimeType||blob.type||'application/octet-stream',fileName=name||'OpenDoc_file';
  try{
    if(window.AndroidShare&&typeof window.AndroidShare.shareBase64==='function'){
      const dataUrl=await blobToDataUrl(blob);
      window.AndroidShare.shareBase64(dataUrl,fileName,type);
      return true
    }
    if(navigator.share){
      const file=new File([blob],fileName,{type});
      if(!navigator.canShare||navigator.canShare({files:[file]})){
        await navigator.share({files:[file],title:fileName});
        return true
      }
    }
    uiAlert(currentLang==='ru'?'Функция «Поделиться» недоступна в этой версии.':'Sharing is not available in this build.');
  }catch(e){
    if(e?.name!=='AbortError'){
      console.error('OpenDoc share failed',e);
      uiAlert(currentLang==='ru'?'Не удалось поделиться этим файлом.':'Could not share this file.');
    }
  }
  return false
}

async function buildGenericPdfForShare(pages,title,statusSel){
  if(!pages.length){uiAlert('There are no pages to save.');return null}
  if(!window.PDFLib){uiAlert('PDF engine is unavailable. Reload once while online.');return null}
  setText(statusSel,currentLang==='ru'?'Подготовка файла для отправки…':'Preparing file for sharing…');
  const {PDFDocument}=window.PDFLib,pdf=await PDFDocument.create(),A4P=[595.28,841.89],A4L=[841.89,595.28];
  for(let i=0;i<pages.length;i++){
    let data=pages[i].image;
    if(pages[i].type==='text')data=textCanvas(pages[i].text).toDataURL('image/jpeg',.94);
    const im=await embedImage(pdf,data),land=im.width>im.height,[pw,ph]=land?A4L:A4P,page=pdf.addPage([pw,ph]),scale=Math.min(pw/im.width,ph/im.height),w=im.width*scale,h=im.height*scale;
    page.drawImage(im,{x:(pw-w)/2,y:(ph-h)/2,width:w,height:h})
  }
  const bytes=await pdf.save(),name=`${safeName(title)}_${stamp()}.pdf`;
  return {blob:new Blob([bytes],{type:'application/pdf'}),name,mimeType:'application/pdf'}
}

async function shareOpenedPdf(){
  if(!requirePage(pdfState.pages))return;
  setText('#pdfStatus',currentLang==='ru'?'Подготовка файла для отправки…':'Preparing file for sharing…');
  try{
    if(window.PDFLib&&pdfState.originalBytes){
      const {PDFDocument}=window.PDFLib,src=await PDFDocument.load(pdfState.originalBytes),out=await PDFDocument.create(),idx=pdfState.pages.map(p=>p.originalIndex),copied=await out.copyPages(src,idx);
      copied.forEach(p=>out.addPage(p));
      const bytes=await out.save(),name=`${safeName(pdfState.title)}_${stamp()}.pdf`;
      await shareBlob(new Blob([bytes],{type:'application/pdf'}),name,'application/pdf');
      setText('#pdfStatus',`${pdfState.pages.length} page(s) • ready`);
      return
    }
  }catch(e){console.warn('Original PDF share fallback',e)}
  try{
    const built=await buildGenericPdfForShare(pdfState.pages.map(p=>({type:'image',image:p.image})),pdfState.title,'#pdfStatus');
    if(built)await shareBlob(built.blob,built.name,built.mimeType);
    setText('#pdfStatus',`${pdfState.pages.length} page(s) • ready`)
  }catch(e){console.error(e);uiAlert(currentLang==='ru'?'Не удалось подготовить PDF для отправки.':'Could not prepare PDF for sharing.')}
}

async function shareConvertPdf(){
  try{const built=await buildGenericPdfForShare(convertState.pages,convertState.title,'#convertStatus');if(built)await shareBlob(built.blob,built.name,built.mimeType);if(convertState.pages.length)setText('#convertStatus',`${convertState.pages.length} page(s) ready for PDF`)}catch(e){console.error(e);uiAlert(currentLang==='ru'?'Не удалось подготовить PDF для отправки.':'Could not prepare PDF for sharing.')}
}

async function shareScanPdf(){
  syncScanTitle();
  try{const built=await buildGenericPdfForShare(scanState.pages,scanState.title,'#scanStatus');if(built)await shareBlob(built.blob,built.name,built.mimeType);if(scanState.pages.length)setText('#scanStatus','A4 scan page stored')}catch(e){console.error(e);uiAlert(currentLang==='ru'?'Не удалось подготовить PDF для отправки.':'Could not prepare PDF for sharing.')}
}

async function shareNewPdf(){
  closeDialog($('#newShareDialog'));syncNew();
  try{const built=await buildGenericPdfForShare(newState.pages.map(p=>({type:'text',text:p.text})),newState.title,'#newStatus');if(built)await shareBlob(built.blob,built.name,built.mimeType);setText('#newStatus','Ready')}catch(e){console.error(e);uiAlert(currentLang==='ru'?'Не удалось подготовить PDF для отправки.':'Could not prepare PDF for sharing.')}
}

async function shareNewTxt(){
  closeDialog($('#newShareDialog'));syncNew();
  const name=`${safeName(newState.title)}_${stamp()}.txt`,blob=new Blob([newState.pages.map(p=>p.text||'').join('\n\f\n')],{type:'text/plain;charset=utf-8'});
  await shareBlob(blob,name,'text/plain');setText('#newStatus','Ready')
}

async function shareNewDocx(){
  closeDialog($('#newShareDialog'));syncNew();
  try{
    setText('#newStatus',currentLang==='ru'?'Подготовка DOCX для отправки…':'Preparing DOCX for sharing…');
    const mod=await import('https://cdn.jsdelivr.net/npm/docx@9.8.1/+esm'),children=[];
    newState.pages.forEach((p,pi)=>{const lines=String(p.text||'').replace(/\r/g,'').split('\n');lines.forEach((line,li)=>children.push(new mod.Paragraph({pageBreakBefore:pi>0&&li===0,children:[new mod.TextRun(line||' ')]}))) });
    const doc=new mod.Document({sections:[{children}]}),blob=await mod.Packer.toBlob(doc),name=`${safeName(newState.title)}_${stamp()}.docx`;
    await shareBlob(blob,name,'application/vnd.openxmlformats-officedocument.wordprocessingml.document');setText('#newStatus','Ready')
  }catch(e){console.error(e);uiAlert(currentLang==='ru'?'Не удалось подготовить DOCX для отправки.':'Could not prepare DOCX for sharing.')}
}

function printPages(items){if(!items.length)return;const root=$('#printRoot');root.innerHTML='';for(const p of items){const sh=document.createElement('div');sh.className='printSheet';if(p.type==='image'){const im=document.createElement('img');im.src=p.image;sh.appendChild(im)}else{const d=document.createElement('div');d.className='printText';d.textContent=p.text||'';sh.appendChild(d)}root.appendChild(sh)}requestAnimationFrame(()=>window.print())}

async function saveNewPdf(){closeDialog($('#newSaveDialog'));syncNew();await saveGenericPdf(newState.pages.map(p=>({type:'text',text:p.text})),newState.title,'#newStatus')}
function saveNewTxt(){closeDialog($('#newSaveDialog'));syncNew();const name=`${safeName(newState.title)}_${stamp()}.txt`;download(new Blob([newState.pages.map(p=>p.text||'').join('\n\f\n')],{type:'text/plain;charset=utf-8'}),name);setText('#newStatus',`Saved ${name}`)}
async function saveNewDocx(){closeDialog($('#newSaveDialog'));syncNew();try{setText('#newStatus','Creating DOCX…');const mod=await import('https://cdn.jsdelivr.net/npm/docx@9.8.1/+esm'),children=[];newState.pages.forEach((p,pi)=>{const lines=String(p.text||'').replace(/\r/g,'').split('\n');lines.forEach((line,li)=>children.push(new mod.Paragraph({pageBreakBefore:pi>0&&li===0,children:[new mod.TextRun(line||' ')]}))) });const doc=new mod.Document({sections:[{children}]});const blob=await mod.Packer.toBlob(doc),name=`${safeName(newState.title)}_${stamp()}.docx`;download(blob,name);setText('#newStatus',`Saved ${name}`)}catch(e){console.error(e);uiAlert('Could not create DOCX.')}}

function help(){info(I18N[currentLang].helpHtml)}
function about(){info(I18N[currentLang].aboutHtml)}

$('#newText').addEventListener('input',()=>{if(newState.pages[newState.current])newState.pages[newState.current].text=$('#newText').value;schedulePersist(300)});
$('#newTitle').addEventListener('input',()=>{newState.title=$('#newTitle').value||t('newDocumentDefault');schedulePersist(300)});
$('#scanTitle').addEventListener('input',()=>{scanState.title=$('#scanTitle').value||t('scannedDocumentDefault');schedulePersist(300)});
$$('.cropHandle').forEach(h=>{h.addEventListener('pointerdown',e=>{if(!scanState.pending)return;dragCorner=h.dataset.c;h.setPointerCapture?.(e.pointerId);e.preventDefault()});h.addEventListener('pointermove',e=>{if(!dragCorner||!scanState.pending)return;const r=$('#scanStage').getBoundingClientRect();scanState.pending.crop[dragCorner]={x:clamp((e.clientX-r.left)/r.width,0,1),y:clamp((e.clientY-r.top)/r.height,0,1)};updateCropUI();e.preventDefault()});h.addEventListener('pointerup',()=>{dragCorner=null;schedulePersist()});h.addEventListener('pointercancel',()=>{dragCorner=null;schedulePersist()})});

$('#pdfInput').addEventListener('change',e=>{const f=e.target.files?.[0];e.target.value='';if(f)openPdfFile(f)});
$('#convertInput').addEventListener('change',e=>{const f=e.target.files?.[0];e.target.value='';if(f)openConvertFile(f)});
$('#imageInput').addEventListener('change',e=>{const f=e.target.files?.[0];e.target.value='';if(f)beginScanImage(f)});
$('#cameraInput').addEventListener('change',e=>{const f=e.target.files?.[0];e.target.value='';if(f)beginScanImage(f)});
window.openIncomingFile = async function(url, fileName, mimeType, targetInputId) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const file = new File(
      [blob],
      fileName || 'document',
      { type: mimeType || blob.type || 'application/octet-stream' }
    );

    const input = document.getElementById(targetInputId);
    if (!input) return;

    const transfer = new DataTransfer();
    transfer.items.add(file);
    input.files = transfer.files;

    input.dispatchEvent(new Event('change', { bubbles: true }));
  } catch (error) {
    console.error('OpenDoc Android incoming file error:', error);
  }
};

document.addEventListener('click',async e=>{const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act;
  if(a==='install')return installApp();
  if(a==='language')return openDialog($('#languageDialog'));
  if(a==='langEn'){closeDialog($('#languageDialog'));applyLanguage('en');return}
  if(a==='langRu'){closeDialog($('#languageDialog'));applyLanguage('ru');return}
  if(a==='closeLanguage')return closeDialog($('#languageDialog'));
  if(a==='help')return help(); if(a==='about')return about(); if(a==='closeInfo')return closeDialog($('#info'));
  if(a==='home'){syncNew();syncScanTitle();show('home');return}
  if(a==='openPdf'){ $('#pdfInput').click();return }
  if(a==='convert'){show('convertView');renderConvert();return}
  if(a==='convertOpen'){ $('#convertInput').click();return }
  if(a==='scan'){show('scanView');renderScan();if(!scanState.pages.length)openDialog($('#scanChoice'));return}
  if(a==='newDoc')return newDocument();
  if(a==='pdfPrintPage'&&requirePage(pdfState.pages))return printPages([{type:'image',image:pdfState.pages[pdfState.current].image}]);
  if(a==='pdfPrintAll'&&requirePage(pdfState.pages))return printPages(pdfState.pages.map(p=>({type:'image',image:p.image})));
  if(a==='pdfDeletePage')return deleteSelected(pdfState,renderPdf);
  if(a==='pdfSave')return saveOpenedPdf();
  if(a==='pdfExport')return openDialog($('#pdfExportDialog'));
  if(a==='pdfShare')return shareOpenedPdf();
  if(a==='closePdfExport')return closeDialog($('#pdfExportDialog'));
  if(a==='pdfExportTxt')return exportPdfTxt();
  if(a==='pdfExportDocx')return exportPdfDocx();
  if(a==='convertPrintPage'&&requirePage(convertState.pages))return printPages([convertState.pages[convertState.current]]);
  if(a==='convertPrintAll'&&requirePage(convertState.pages))return printPages(convertState.pages);
  if(a==='convertDeletePage')return deleteSelected(convertState,renderConvert);
  if(a==='convertSavePdf')return saveGenericPdf(convertState.pages,convertState.title,'#convertStatus');
  if(a==='convertShare')return shareConvertPdf();
  if(a==='scanAdd')return openDialog($('#scanChoice'));
  if(a==='scanCamera'){closeDialog($('#scanChoice'));$('#cameraInput').click();return}
  if(a==='scanGallery'){closeDialog($('#scanChoice'));$('#imageInput').click();return}
  if(a==='closeScanChoice'){closeDialog($('#scanChoice'));return}
  if(a==='scanPrintPage'&&requirePage(scanState.pages))return printPages([scanState.pages[scanState.current]]);
  if(a==='scanPrintAll'&&requirePage(scanState.pages))return printPages(scanState.pages);
  if(a==='scanDeletePage')return deleteSelected(scanState,renderScan);
  if(a==='scanSavePdf'){syncScanTitle();return saveGenericPdf(scanState.pages,scanState.title,'#scanStatus')}
  if(a==='scanShare')return shareScanPdf();
  if(a==='scanRotate')return rotatePending();
  if(a==='scanResetCrop')return resetScanCrop();
  if(a==='scanOriginal')return restoreScanOriginal();
  if(a==='scanUseA4')return finalizeScan();
  if(a==='scanCancelEdit')return cancelScanEdit();
  if(a==='newAddPage')return newAddPage();
  if(a==='newPrintPage'){syncNew();return printPages([{type:'text',text:newState.pages[newState.current].text}])}
  if(a==='newPrintAll'){syncNew();return printPages(newState.pages.map(p=>({type:'text',text:p.text}))) }
  if(a==='newDeletePage'){syncNew();return deleteSelected(newState,renderNew)}
  if(a==='newSaveAs'){syncNew();return openDialog($('#newSaveDialog'))}
  if(a==='newShare'){syncNew();return openDialog($('#newShareDialog'))}
  if(a==='closeNewShare')return closeDialog($('#newShareDialog'));
  if(a==='newSharePdf')return shareNewPdf();
  if(a==='newShareDocx')return shareNewDocx();
  if(a==='newShareTxt')return shareNewTxt();
  if(a==='closeNewSave')return closeDialog($('#newSaveDialog'));
  if(a==='newSavePdf')return saveNewPdf();
  if(a==='newSaveTxt')return saveNewTxt();
  if(a==='newSaveDocx')return saveNewDocx();
});

if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=0.2.5').catch(console.warn));
(async()=>{applyLanguage(currentLang,{persist:false});const restoredView=await restoreSavedWork();show(restoredView,{persist:false});persistenceReady=true;schedulePersist(0)})();
window.addEventListener('pagehide',()=>{saveWorkNow()});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')saveWorkNow()});
