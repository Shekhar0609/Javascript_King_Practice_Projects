const careers = ["Web Developer", "Intructor", "Freelancer", "Youtuber"];

const containerEl = document.querySelector(".container");

let careerIndex = 0;
let characterIndex = 0;

textUpdate();

function textUpdate() {
  containerEl.innerHTML = `
    <h1>I am 
    ${careers[careerIndex].slice(0,1)==="I"? "AN" : "A"} 
    ${careers[careerIndex].slice(0, characterIndex+1)}
    </h1>
    `;

  characterIndex++;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }



  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(textUpdate,500);
}
