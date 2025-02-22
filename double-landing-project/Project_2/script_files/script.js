const container = document.querySelector(".container")

const leftEl = document.querySelector(".left")
const rightEl = document.querySelector(".right")

leftEl.addEventListener("mouseenter", function(){
    container.classList.add("active-left")
})

leftEl.addEventListener("mouseleave", function(){
    container.classList.remove("active-left")
})

rightEl.addEventListener("mouseenter", function(){
    container.classList.add("active-right")
})

rightEl.addEventListener("mouseleave", function(){
    container.classList.remove("active-right")
})