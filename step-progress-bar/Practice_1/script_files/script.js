const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const progessBar = document.querySelector(".progress-bar-front");
const stepEls = document.querySelectorAll(".step");

let checked = 1;
nextBtn.addEventListener("click", () => {
  checked++;
  if (checked > stepEls.length) {
    checked = stepEls.length;
  }
  stepBarProgress();
});

prevBtn.addEventListener("click", () => {
  checked--;
  if (checked < 1) {
    checked = 1;
  }
  stepBarProgress();
});

function stepBarProgress() {
  stepEls.forEach((stepEl, idx) => {
    if (idx < checked) {
      stepEl.classList.add("checked");

      stepEl.innerHTML = `
    <i class="fa-solid fa-check"></i>
    <small>${
      idx === 0 ? "Start" : idx === stepEls.length - 1 ? "Final" : "Step" + idx
    }</small>`;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");
  progessBar.style.width =
    ((checkedNumber.length - 1) / (stepEls.length - 1)) * 100 + "%";

    if(checked ===1) {
        prevBtn.disabled = true
    } else if (checked===stepEls.length){
        nextBtn.disabled = true
    }else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}
