const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  let positionLeft = event.offsetX;
  let posistionTop = event.offsetY;

  let heartEl = document.createElement("span");
  heartEl.style.left = positionLeft + "px";
  heartEl.style.top = posistionTop + "px";

  let size = Math.trunc(Math.random()*100)
heartEl.style.height = size +"px"
heartEl.style.width = size +"px"

  bodyEl.append(heartEl);


  setTimeout(() => {
    heartEl.remove();
  }, 500);
});
