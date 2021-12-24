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

document
  .querySelector("img[alt='민서']")
  .addEventListener("click", function () {
    let text = document.getElementById("메");
    if (text.style.display == "none") text.style.display = "block";
    else text.style.display = "none";
  });

document
  .querySelector("img[alt='지영']")
  .addEventListener("click", function () {
    let text = document.getElementById("리");
    if (text.style.display == "none") text.style.display = "block";
    else text.style.display = "none";
  });

document
  .querySelector("img[alt='화정']")
  .addEventListener("click", function () {
    let text = document.getElementById("티");
    if (text.style.display == "none") text.style.display = "block";
    else text.style.display = "none";
  });

document
  .querySelector("img[alt='유진']")
  .addEventListener("click", function () {
    let text = document.getElementById("에");
    if (text.style.display == "none") text.style.display = "block";
    else text.style.display = "none";
  });
document
  .querySelector("img[alt='지현']")
  .addEventListener("click", function () {
    let text = document.getElementById("스1");
    if (text.style.display == "none") text.style.display = "block";
    else text.style.display = "none";
  });
document
  .querySelector("img[alt='수연']")
  .addEventListener("click", function () {
    let text = document.getElementById("마");
    if (text.style.display == "none") text.style.display = "block";
    else text.style.display = "none";
  });
document
  .querySelector("img[alt='세원']")
  .addEventListener("click", function () {
    let text = document.getElementById("스2");
    if (text.style.display == "none") text.style.display = "block";
    else text.style.display = "none";
  });
document
  .querySelector("img[alt='나연']")
  .addEventListener("click", function () {
    let text = document.getElementById("하트");
    if (text.style.display == "none") text.style.display = "block";
    else text.style.display = "none";
  });
