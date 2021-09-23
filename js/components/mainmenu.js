//CHANGE ALL THIS CODE
const mainMenu = document.querySelector(".main-menu");
const hamburgerIcons = document.querySelector(".hamburger-icons");
const closeMenuIcon = document.querySelector(".fa-bars");
const openMenuIcon = document.querySelector(".fa-times");

hamburgerIcons.addEventListener("click", toggleMenu);
mainMenu.classList.contains("open-menu");

function toggleMenu() {
  if (mainMenu.classList.contains("open-menu")) {
    mainMenu.classList.remove("open-menu");
    closeMenuIcon.style.display = "block";
    openMenuIcon.style.display = "none";
  } else {
    mainMenu.classList.add("open-menu");
    closeMenuIcon.style.display = "none";
    openMenuIcon.style.display = "block";
  }
}
var navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function (navLink) {
  navLink.addEventListener("click", toggleMenu);
});
