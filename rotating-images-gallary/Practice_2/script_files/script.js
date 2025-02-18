const imageContailerEl = document.querySelector(".image-container");
const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");

let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  clearTimeout(timer);
  x = x + 45;
  updateGallery();
});

nextEl.addEventListener("click", () => {
  clearTimeout(timer);
  x = x - 45;
  updateGallery();
});

function updateGallery() {
  imageContailerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();

