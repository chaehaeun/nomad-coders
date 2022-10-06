const body = document.querySelector("body");

const imgs = ["0.png", "1.jpg", "2.jpg", "3.png", "4.jpg"];

const chosenimg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");
bgImg.src = `./img/${chosenimg}`;
document.body.appendChild(bgImg);
