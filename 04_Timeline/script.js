const IMG_BASE = "../Shared/assets/Photos/Timeline/"; // مسیر عکس‌ها طبق حرف تو

const events = [
  {
    id: 1,
    title: "دیدار اول",
    date: "مهر 1403",
    text: "همون اولین روزی که وارد لابی دانشکده شدیم، وقتی داشتیم همو به هم معرفی می‌کردیم، برای اولین بار اون چشمای قشنگت رو دیدم و برقشون منو گرفت...😃✨",
    hasPhoto: true
  },
  {
    id: 2,
    title: "شروع پیام دادن‌هامون",
    date: "آذر 1403",
    text: "یادمه اونموقع‌ها که کلاسامون یه چند روزی مجازی شد، یه کلاس فیزیک ۱ داشتیم با بهمن‌آبادی و اون به گل پژمرده من اشاره کرد😂 و پیام دادنامون از همونجا شروع شد که ازم پرسیدی که جریانش چیه. قبلشم حالا دو سه تا پیام داده بودم برای یه سری لیست و اینا ولی دیگه از اینجا شروع شد:)🤍",
    hasPhoto: false
  },
  {
    id: 3,
    title: "اولین تایم گفتنمون",
    date: "دی 1403",
    text: "اولین بار که به هم تایم گفتیم، قشنگ یادمه که ساعت 17:17 بود و یهو اون پیام زیبات رو دیدم و سر تا پای وجودم ذوق کرد که یکی هست مثل من اهمیت بده به این موضوع. پس من صبر کردم تا دقیقا اولین 1111 بعد اون تایم رو بهت بگم چون به نظرم قشنگ‌ترینشه و از اون روز به بعد همممیشه به هم تایم‌ها رو میگفتیم🕰️❤️‍🩹",
    hasPhoto: true
  },
  {
    id: 4,
    title: "صمیمی شدنمون",
    date: "بهمن 1403",
    text: "هر چی که میگذشت بیشتر میفهمیدیم چقدر به هم میایم و کلییی با هم شوخی می‌کردیم چه با خودمون و چه با بقیه. قیچی می‌کردیم موهای آدما رو، اسنپ چت می‌کردیم، می‌بردیمشون اینور و اونور و خیلیی کارای دیگهه🤪❤️",
    hasPhoto: false
  },
  {
    id: 5,
    title: "اولین بغلمون",
    date: "اواخر بهمن 1403",
    text: "وقتی من تو سایت بودم، یهو تو و فرخی اومدین و منو بردین آوا سنتر. موقع خدافظی همو بغل کردیمممم، چه حس خوبی داشت وقتی اولین بار همو حس کردیم، هیچوقت یادم نمیره. تازه بعد اون هم همو جلوی حراستتت در آزادی بغل کردیممم🫂❤️‍🔥",
    hasPhoto: true
  },
  {
    id: 6,
    title: "شروع رابطه، اولین قرار",
    date: "2 مارچ 2025",
    text: "همون روزی که رفتی برق با کیاشا و فرخی که برگردی خونه‌ت و خدا خواست که اونا بخوان بمونن بازی کنن و منم بودم که با هم برگردیم، تو مترو گفتم که نریم خونه‌مون و ما تصمیم گرفتیم مترو هروی پیاده بشیم. رفتیم به سمت هدیش، تو اون پارک مسیرمون ساندویچ مرغ خوردیم، اولین ناهار مشترکمون که تو ماه رمضون هم بود. بعد همونو رفتیم تا میدون هروی و رفتیم هدیش. رفتیم فود کورتش و من سرمو گذشتم رو میز و تو هم سرتو رو سر من، موهامو نوازش می‌کردی و اونجا بود که من معنی محبت و دوست داشته شدن رو با تو فهمیدم=)\nبعدشم با هم رفتیم پارک صدف و شطرنج اون پیرمردا رو نگاه کردیم و بعدشم خدافظی کردیم و بغل، که شد اولین دیتمون🥰🩷",
    hasPhoto: true
  },
  {
    id: 7,
    title: "اولین بوسه",
    date: "13 فروردین 1404",
    text: "قبلش ما توی پارک قیطریه (روزی که بعدش رفتیم پالادیوم و شهید بهشتی با فرخی) لپ همو بوس کردیم و لپم رژ لبی شد D: یا زیر سینما ملت یدونه میکرو کیس داشتیم؛ ولی روز سیزده به در بود که روزای قبلش در مورد بوسیدن صحبت میکردیم ولی دقیقا همون روز بود که تو همون سراشیبی‌های خاکی یه لحظه اومدم جلو و بهترین حس دنیا رو تجربه کردیم و یاد گرفتیم :)))💋👩🏻‍❤️‍💋‍👨🏻",
    hasPhoto: true
  },
  {
    id: 8,
    title: "اولین دعوا",
    date: "15 فروردین 1404",
    text: "بالاخره هر رابطه‌ای یه روزی دعواهای خودشو داره، ما هم اولینمون رو بعد عید که دانشگاه‌ها باز شد داشتیم که حالا مهم نیست گذشت و ببخشید برای هر چی که بوده💔",
    hasPhoto: false
  },
  {
    id: 9,
    title: "اولین آشتی",
    date: "اردیبهشت 1404",
    text: "بعد دو هفته از اولین قهر و کاتمون به هم برگشتیم و قوی‌تر از قبل به تجربه‌هامون ادامه دادیم،‌ زندگیمونو پیش بردیم و کلییی خاطره قشنگ کنار هم ساختیم...💖",
    hasPhoto: false
  },
  {
    id: 10,
    title: "شیطونی‌هامون",
    date: "تابستون 1404",
    text: "خب ما جفتمون خیلی شیطون بودیم، درسته من اولش می‌گفتم عشق افلاطونی و اینا؛ ولی بعدا بهم نشون دادی که چقدر چرت و پرته 😂، بعدشم هی کارای مختلفو امتحان می‌کردیم و با هر آشتی بعد دعوا نزدیک‌تر می‌شدیم و کلییی تجربه نزدیک با هم داشتیم که واقعا ارزششو داشت اون آدم برای من تو باشی، برای تک‌تک این‌ها. مرسی که همممه‌ی اولین‌هام بودی:)🥺💓",
    hasPhoto: true
  },
  {
    id: 11,
    title: "اولین غذامون",
    date: "مهر 1404",
    text: "ما عاااشق خوردنیم و اولویت یک غذاهامونم پاستاستتت و یادمه اونروزی که تصمیم گرفتیم بریم و اولین پاستامون رو درست کنیممم. مرغ داشتیم و قارچ و خامه و پاستا رو گرفتیم، من قارچا رو شستم، تو شروع کردی به خرد کردنشون، من سیر رو رنده کردم، مرغ‌ها رو با هم خرد کردیم و ادویه زدیم، پاستا هم با هم گذشتیم جوش بیاد و کنار هم وقتی یکی اونیکی رو از پشت بغل میکرد سسمون رو درست کردیممم (که یکم شیرش زیاد شد😅) ولی درکل خیلیی خوب بووددد💗",
    hasPhoto: true
  },
  {
    id: 12,
    title: "ولنتاینمون",
    date: "25 بهمن 1404",
    text: "میشه گفت اولین روز مهمی که جفتمون از ته دل واقعا دوستش داشتیم، چقدر برای هم لذت بخش بود و کلییی کادوی قشنگ داشتیمم. تو به من یه نیم زیپ سیاه خوشگل، یه شات بامزه و سکسی، کللللیییی شکلات خوشمزه میلکا و کیندرر و مهم‌تر از همه قشنگ‌ترین کیف پول دنیا که از برند اسم خودت بود و همممیشه قراره داشته باشمششش. منم بهت کلییی کاردستیو چیزای کوچولو موچولو بامزه مثل خوک کوچولو و زنگ و کاردستییی دادممم و کیندر و مارسس و یه قابی که دوستش داشتی؛ ولی بدجنسی کردی کثیف شد😒😂 (فدای سرت بهترشو میگیریم) و یه کیکوووو ۱۷\nخیلیییی ولنتاین خوبی داشتیممم😭♥️",
    hasPhoto: true
  },
  {
    id: 13,
    title: "سالگرد",
    date: "2 اسفند 1404",
    text: "و سر انجام هم رسیدیم به یکسااالل که با همیم و خیلی خوشحالم که تو توی زندگیمی، با تک‌تک سلول‌های بدنم و تمام وجودم عاشقتم پرنسس من:)🤍❤️‍🩹❤️❤️‍🔥🩷💖💓💗💞",
    hasPhoto: true
  }
];

function imgPath(id){
  // طبق گفته‌ی تو: برای n → img0n یا imgn
  // اینجا الگو رو imgNN.jpg گذاشتم (مثلاً img12.jpg). اگر تک‌رقمی بود img01.jpg.
  const n = String(id).padStart(2, "0");
  return `${IMG_BASE}img${n}.jpg`;
}

/* ---------- Horizontal render ---------- */
const nodes = document.getElementById("nodes");

function renderHorizontal(){
  nodes.innerHTML = events.map(e => {
    const previewImg = e.hasPhoto ? `<img src="${imgPath(e.id)}" alt="">` : ``;
    return `
      <div class="node" data-id="${e.id}">
        <div class="preview">
          ${previewImg}
          <div class="p-title">${e.title}</div>
          <div class="p-date">${e.date}</div>
        </div>

        <div class="dot" aria-hidden="true"></div>
        <div class="label">${e.title}</div>
        <div class="sublabel">${e.date}</div>
      </div>
    `;
  }).join("");

  document.querySelectorAll(".node").forEach(n => {
    n.addEventListener("click", () => {
      const id = Number(n.dataset.id);
      openModal(id);
    });
  });
}

/* ---------- Vertical render ---------- */
const vitems = document.getElementById("vitems");
function renderVertical(){
  vitems.innerHTML = events.map(e => `
    <div class="vevent" data-id="${e.id}">
      <span class="vdot" aria-hidden="true"></span>
      <div class="vtop">
        <h3 class="vtitle">${e.title}</h3>
        <span class="vdate">${e.date}</span>
      </div>
      <p class="vtext">${e.text}</p>
    </div>
  `).join("");

  document.querySelectorAll(".vevent").forEach(card => {
    card.addEventListener("click", () => {
      const id = Number(card.dataset.id);
      openModal(id);
    });
  });
}

/* ---------- Modal ---------- */
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeBtn");
const mDate = document.getElementById("mDate");
const mTitle = document.getElementById("mTitle");
const mText = document.getElementById("mText");
const mImg = document.getElementById("mImg");

function openModal(id){
  const e = events.find(x => x.id === id);
  if(!e) return;

  mDate.textContent = e.date;
  mTitle.textContent = e.title;
  mText.textContent = e.text;

  if(e.hasPhoto){
    mImg.src = imgPath(e.id);
    mImg.classList.remove("hidden");
  } else {
    mImg.classList.add("hidden");
    mImg.src = "";
  }

  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
}

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
}

modalBackdrop.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape") closeModal();
});

/* ---------- Toggle view ---------- */
const toggleBtn = document.getElementById("toggleViewBtn");
const horizontal = document.getElementById("timelineHorizontal");
const vertical = document.getElementById("timelineVertical");

let view = "horizontal"; // default

toggleBtn.addEventListener("click", ()=>{
  if(view === "horizontal"){
    view = "vertical";
    horizontal.classList.add("hidden");
    vertical.classList.remove("hidden");
    toggleBtn.textContent = "Horizontal";
  } else {
    view = "horizontal";
    vertical.classList.add("hidden");
    horizontal.classList.remove("hidden");
    toggleBtn.textContent = "Vertical";
  }
});

/* init */
renderHorizontal();
renderVertical();