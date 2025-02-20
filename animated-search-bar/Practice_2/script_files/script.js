const searchIcon = document.querySelector(".search-icon")
const searchContainer = document.querySelector(".search-container")
const inputSearch = document.querySelector(".input-search")
const micIcon = document.querySelector(".mic-icon")


searchIcon.addEventListener("click", ()=>{
    searchContainer.classList.toggle("active")
    inputSearch.classList.toggle("active")
    micIcon.classList.toggle("active")
})