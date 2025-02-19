const generatBtn = document.querySelector(".generate-btn");
const inputPassword = document.querySelector(".input-password");
const copiedPassword = document.querySelector(".fa-copy")
const copiedAlert = document.querySelector(".alert")

generatBtn.addEventListener("click", () => {
  // console.log("clicked");
  generatePassword();
});

copiedPassword.addEventListener("click", () => {
  passwordCopied()
  copiedAlert.classList.remove("active")
  setTimeout(() => {    
    copiedAlert.classList.add("active")
  , 2000})
})

function generatePassword(password) {
  num = [1,2,3,4,5,6,7,8,9,0];
  lowerAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  upperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  specialSymbol = ["~","!","@","#","$","%","^","&","*","(",")","_","+","=","-","?"];
  password = `${num.join('')}${lowerAlpha.join('')}${upperAlpha.join('')}${specialSymbol.join('')}`
  // console.log(password);
  const passwordLenght = 14;
  let createPassword = ""
  for (let index = 0; index < passwordLenght; index++) {
    randomGenerate = Math.floor(Math.random() * password.length)
    createPassword = createPassword + password.substring(randomGenerate, randomGenerate + 1)
  }
  inputPassword.value = createPassword;
  copiedAlert.innerText = createPassword + " copied!"
}

function passwordCopied() {
  inputPassword.select()
  inputPassword.setSelectionRange(0, 9999)
  navigator.clipboard.writeText(inputPassword.value)

}
