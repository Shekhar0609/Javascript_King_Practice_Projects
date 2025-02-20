const searchContainer = document.querySelector(".search-container");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input-text")
const micIcon = document.querySelector(".mic-icon")

searchIcon.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
  searchInput.classList.toggle("active");
  micIcon.classList.toggle("active");
});
