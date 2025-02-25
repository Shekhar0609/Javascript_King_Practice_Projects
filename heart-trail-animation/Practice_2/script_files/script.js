const bodyEL = document.querySelector("body");

bodyEL.addEventListener("mousemove", (event) => {
  let posistionLeft = event.offsetX;
  let posistionTop = event.offsetY;

  let sizeHeart = Math.trunc(Math.random() * 100);

  let heartEl = document.createElement("span");
  heartEl.style.left = posistionLeft + "px";
  heartEl.style.top = posistionTop + "px";
  heartEl.style.width = sizeHeart + "px";
  heartEl.style.height = sizeHeart + "px";
  bodyEL.append(heartEl);

  setTimeout(() => {
    heartEl.remove();
  }, 500);
});
