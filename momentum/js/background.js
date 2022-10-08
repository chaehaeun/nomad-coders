const imgs = ["0.png", "1.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg", "6.jpg"];

const chosenimg = imgs[Math.floor(Math.random() * imgs.length)];
document.body.style.background = `url(./img/${chosenimg})`;
