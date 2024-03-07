document.addEventListener("DOMContentLoaded", function () {
  mudaSrc();
});

function mudaSrc() {
  console.log("teste");
  const srcImagesArray = [
    "images/ChocoCookieChantillyCup.jpg",
    "images/RainbowBlissGelato.jpg",
    "images/ChocolateCookieCup.jpg",
  ];

  let cont = 0;
  let img = document.querySelector(".maisSaboresImg");
  setInterval(() => {
    if (cont >= srcImagesArray.length) {
      cont = 0;
    }
    img.src = `${srcImagesArray[cont]}`;
    cont++;
  }, 2000);
}
