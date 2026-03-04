const songs = [
  {title:"Extasy", artist:"Koroush, Sijal, Sami Low, Raha", file:"song01.mp3", cover:"song01.jpg"},
  {title:"Nashod Behet Begam", artist:"Koroush, Tamara", file:"song02.mp3", cover:"song02.jpg"},
  {title:"CK", artist:"Koroush, Sami Low, Raha", file:"song03.mp3", cover:"song03.jpg"},
  {title:"Dadim Raft To Ro", artist:"Behzad Leito, Sogand", file:"song04.mp3", cover:"song04.jpg"},
  {title:"Heyf", artist:"Sogand, Zakhmi", file:"song05.mp3", cover:"song05.jpg"},
  {title:"Shabe Tavalod", artist:"Sijal, Khalse, Sami Low", file:"song06.mp3", cover:"song06.jpg"},
  {title:"Dance Me to the End of Love", artist:"Leonard Cohen", file:"song07.mp3", cover:"song07.jpg"},
  {title:"U-Turn (Lili)", artist:"Aaron", file:"song08.mp3", cover:"song08.jpg"},
  {title:"Payeez", artist:"Bomrani", file:"song09.mp3", cover:"song09.jpg"},
  {title:"Gelofen & Tea", artist:"Bomrani", file:"song10.mp3", cover:"song10.jpg"},
];
let currentIndex = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current");
const durationEl = document.getElementById("duration");
const playlist = document.getElementById("playlist");

function loadSong(index){
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = "Songs/" + song.file;
  cover.src = "Songs/covers/" + song.cover;
  document.getElementById("bgBlur").style.backgroundImage =
  `url(Songs/covers/${song.cover})`;
  updateActiveSong();
}

function playSong(){
  audio.play();
  playBtn.textContent = "⏸";
  cover.classList.add("playing");
}

function pauseSong(){
  audio.pause();
  playBtn.textContent = "▶";
  cover.classList.remove("playing");
}

playBtn.addEventListener("click",()=>{
  if(audio.paused){
    playSong();
  } else {
    pauseSong();
  }
});

nextBtn.addEventListener("click",()=>{
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  playSong();
});

prevBtn.addEventListener("click",()=>{
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  playSong();
});

audio.addEventListener("timeupdate",()=>{
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent || 0;

  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

progress.addEventListener("input",()=>{
  audio.currentTime = (progress.value / 100) * audio.duration;
});

function formatTime(time){
  if(!time) return "0:00";
  const minutes = Math.floor(time/60);
  const seconds = Math.floor(time%60).toString().padStart(2,"0");
  return `${minutes}:${seconds}`;
}

songs.forEach((song,index)=>{
  const div = document.createElement("div");
  div.classList.add("song");
  div.textContent = `${index+1}. ${song.title}`;
  div.addEventListener("click",()=>{
    currentIndex = index;
    loadSong(index);
    playSong();
  });
  playlist.appendChild(div);
});

function updateActiveSong(){
  document.querySelectorAll(".song").forEach((el,i)=>{
    el.classList.toggle("active", i === currentIndex);
  });
}

document.addEventListener("keydown",(e)=>{
  if(e.code === "Space"){
    e.preventDefault();
    if(audio.paused){
      playSong();
    } else {
      pauseSong();
    }
  }
});

audio.addEventListener("ended",()=>{
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  playSong();
});

loadSong(currentIndex);