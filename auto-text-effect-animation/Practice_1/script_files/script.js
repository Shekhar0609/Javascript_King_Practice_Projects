const contanerEl = document.querySelector(".container");
const careers = ["Web Developer", "Youtuber", "Instructor", "Freelancer"];

let careerIndex = 0;

let characterIndex = 0;

textUpdate();

function textUpdate() {
  characterIndex++;
  contanerEl.innerHTML = `
    <h1>I Am ${careers[careerIndex].slice(0, 1) === "I" ? "An" : "A"} 
    ${careers[careerIndex].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(textUpdate, 500);
}
