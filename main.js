const audio = new Audio("./images/We Wish You a Merry Christmas.mp3");
let doorEl = document.querySelector(".door");
let popupEl = document.querySelector(".popup");
let blackEl = document.querySelector(".bg_black");
doorEl.addEventListener("click", function () {
  audio.play();
  popupEl.style.display = "flex";
  blackEl.style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
  audio.pause();
  popupEl.style.display = "none";
  blackEl.style.display = "none";
});
