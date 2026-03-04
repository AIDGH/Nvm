const BASE = "../Shared/assets/Photos/Gallery/"; // مسیر پوشه عکس‌ها نسبت به 03_Gallery/index.html

const grid = document.getElementById("grid");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");

const closeBtn = document.getElementById("closeBtn");
const closeBackdrop = document.getElementById("closeBackdrop");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// ✅ فقط عکس‌های واقعی که لود می‌شن اینجا ذخیره می‌شن
const loadedPhotos = [];
let current = 0;

function createCard(p, realIndex){
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img class="thumb" src="${p.src}" alt="photo">`;
  card.addEventListener("click", ()=> openModal(realIndex));
  return card;
}

function openModal(i){
  if(!loadedPhotos.length) return;
  current = (i + loadedPhotos.length) % loadedPhotos.length;

  const p = loadedPhotos[current];
  modalImg.src = p.src;
  caption.textContent = p.cap || "";
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

function prev(){
  openModal(current - 1);
}

function next(){
  openModal(current + 1);
}

// ✅ تلاش برای لود: هم img01.jpg هم img1.jpg
function tryLoad(i){
  const n2 = String(i).padStart(2, "0");
  const candidates = [
    `${BASE}img${n2}.jpg`,
    `${BASE}img${i}.jpg`,
    `${BASE}img${n2}.jpeg`,
    `${BASE}img${i}.jpeg`,
    `${BASE}img${n2}.png`,
    `${BASE}img${i}.png`,
  ];

  let c = 0;

  function attempt(){
    if(c >= candidates.length) return;

    const src = candidates[c++];
    const img = new Image();

    img.onload = () => {
      const photo = { src, cap: `عکس ${loadedPhotos.length + 1}` };
      const realIndex = loadedPhotos.length;
      loadedPhotos.push(photo);
      grid.appendChild(createCard(photo, realIndex));
    };

    img.onerror = attempt;
    img.src = src;
  }

  attempt();
}

// ✅ به اندازه کافی امتحان کن (اگه بیشتر داری عدد رو ببر بالا)
for(let i = 1; i <= 300; i++){
  tryLoad(i);
}

/* events */
closeBtn.addEventListener("click", closeModal);
closeBackdrop.addEventListener("click", closeModal);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("show")) return;

  if (e.key === "Escape") closeModal();

  // تو RTL حس طبیعی‌تر: چپ = بعدی، راست = قبلی
  if (e.key === "ArrowLeft") next();
  if (e.key === "ArrowRight") prev();
});