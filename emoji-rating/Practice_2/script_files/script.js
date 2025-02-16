const emojiElements = document.querySelectorAll(".fa-regular");
const starElements = document.querySelectorAll(".fa-star");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0)

starElements.forEach((starEl, index) => {
  //   console.log(starEl, index);
  starEl.addEventListener("click", () => {
    //   debugger;
    // console.log(index);
    updateRating(index);
  });
});

function updateRating(index) {
//   console.log(index);
  starElements.forEach((star, idx) => {
    // console.log(star, idx);
    if (idx <= index) {
      // console.log(idx);
      // console.log(index);
      // console.log(index <= idx);
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
  emojiElements.forEach((emoji) => {
    // console.log(emoji, index);
    emoji.style.transform = `translateX(-${index * 50}px)`;
    emoji.style.color = colorsArray[index];
  });
}
