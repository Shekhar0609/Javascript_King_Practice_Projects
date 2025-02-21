const social_menu = document.querySelector(".social-menu");
const socialListAllEle = document.querySelectorAll(".social-lists li");
const menu_arrow = document.querySelector(".fa-angle-down");
const social_lists = document.querySelector(".social-lists");
const socialMenuInnerP = document.querySelector(".social-menu p")

social_menu.addEventListener("click", () => {
  menu_arrow.classList.toggle("rotate");
  social_lists.classList.toggle("hide");
});

socialListAllEle.forEach((listEle) => {
  listEle.addEventListener("click", () => {
    socialMenuInnerP.innerHTML = listEle.innerHTML;
    menu_arrow.classList.add("rotate");
    social_lists.classList.toggle("hide");
  });
});
