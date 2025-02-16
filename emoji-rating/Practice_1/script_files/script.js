const starElements = document.querySelectorAll(".fa-star");
const emojiElements = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0)

starElements.forEach((star, index) => {
  // console.log(star, index);
  star.addEventListener("click", () => {
    // console.log(star);
    updateRating(index);
  });
});

function updateRating(index) {
//   console.log(index);
  starElements.forEach((starEl, idx) => {
    // console.log(starEl, idx);
    if (idx <= index) {
    //   console.log(idx <= index);
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });
  emojiElements.forEach((emoji)=>{
    // console.log(emoji);
    emoji.style.transform = `translateX(-${index * 50}px)`
    emoji.style.color = colorsArray[index]
    console.log(colorsArray[index]);
  })
}
