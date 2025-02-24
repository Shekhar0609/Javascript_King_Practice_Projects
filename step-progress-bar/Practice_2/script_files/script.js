const nextBtn = document.querySelector(".next-Btn");
const prevBtn = document.querySelector(".prev-Btn");
const pregessBar = document.querySelector(".pregress-bar-front");

const stepEls = document.querySelectorAll(".step");
// debugger

let checked = 1;
nextBtn.addEventListener("click", () => {
  checked++;
  if (checked > stepEls.length) {
    checked = stepEls.length;
  }
  stepPregessBar();
});

prevBtn.addEventListener("click", () => {
  checked--;
  console.log(checked);
  if (checked === 0) {
    checked = 1;
  }
  stepPregessBar();
});

function stepPregessBar() {
  stepEls.forEach((stepEl, idx) => {
    // console.log(idx < checked);
    if (idx < checked) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `<i class="fa-solid fa-check"></i>
      <small>
                ${
                  idx === 0
                    ? "Start"
                    : idx === stepEls.length - 1
                    ? "Final"
                    : "Step" + idx
                }
      </small>`;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
  });

  const checkedEls = document.querySelectorAll(".checked");
  pregessBar.style.width =
    ((checkedEls.length - 1) / (stepEls.length - 1)) * 100 + "%";

  if (checked===1) {
      prevBtn.disabled = true;
    } else if (checked > stepEls.length-1) {
        nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
