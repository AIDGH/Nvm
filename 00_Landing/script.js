import { fadeIn } from "../Shared/js/common.js";

const dateBadge = document.getElementById("dateBadge");
const enterBtn = document.getElementById("enterBtn");

dateBadge.textContent = new Date().toLocaleDateString("fa-IR", {
  year: "numeric", month: "long", day: "numeric"
});

fadeIn(document.querySelector(".hero-content"));

enterBtn.addEventListener("click", () => {
  window.location.href = "01_Home/index.html";
});