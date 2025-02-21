const socialMenu = document.querySelector(".social-menu")
const menuList = document.querySelector(".menu-lists")
const menuListElemts = document.querySelectorAll(".menu-lists li")
const socialMenuPara = document.querySelector(".social-menu p")

socialMenu.addEventListener("click", function(){
    this.classList.toggle("rotate")
    menuList.classList.toggle("hide")
})

menuListElemts.forEach((list)=>{
    list.addEventListener("click", ()=>{
        socialMenuPara.innerHTML = list.innerHTML
        socialMenu.classList.add("rotate")
        menuList.classList.add("hide")
    })
})