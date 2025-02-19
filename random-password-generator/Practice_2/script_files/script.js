const generateBtn = document.querySelector(".generate-btn");
const inputPassword = document.querySelector(".input-password");
const copyPassword = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

generateBtn.addEventListener("click", () => {
  createPassword();
});

copyPassword.addEventListener("click", () => {
  copiedPassword();
  
  if(inputPassword.value) {
      alertContainer.classList.add("copied-alert");
      setTimeout(() => {
          alertContainer.classList.remove("copied-alert");
    }, 2000);
}
  alertContainer.innerText = inputPassword.value + " Copied!"
});

function createPassword() {
  characters =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()[]_:+=-?";
  let passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
  inputPassword.value = password;
}

function copiedPassword() {
  inputPassword.select();
  inputPassword.setSelectionRange(0, 99999); //for mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(inputPassword.value);
}
