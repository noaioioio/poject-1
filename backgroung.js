const images = ["로그인 화면.jpg", "배경화면2.jpg", "배경화면.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgIamge = document.createElement("img");

console.log(bgIamge);

bgIamge.src = `img/${chosenImage}`;

document.body.appendChild(bgIamge);