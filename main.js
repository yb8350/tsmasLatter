const audio = new Audio("./images/We Wish You a Merry Christmas.mp3");
let doorEl = document.querySelector(".door");
let popupEl = document.querySelector(".popup");
let blackEl = document.querySelector(".bg_black");
doorEl.addEventListener("click", function () {
  doorEl.style.transform = "rotateY(180deg)";
  doorEl.style.transformOrigin = "left";
  setTimeout(function () {
    audio.loop = true;
    audio.play();
    popupEl.style.display = "flex";
    blackEl.style.display = "block";
  }, 800);
});

document.querySelector(".close").addEventListener("click", function () {
  doorEl.style.transform = "rotateY(0deg)";
  doorEl.style.transformOrigin = "left";
  audio.pause();
  popupEl.style.display = "none";
  blackEl.style.display = "none";
});
