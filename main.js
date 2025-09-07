const navbutton = document.querySelector(".header__nav-button");
const menu = document.querySelector(".header__nav");

navbutton.addEventListener("click", () => {
  menu.classList.toggle("open_nav");
});
