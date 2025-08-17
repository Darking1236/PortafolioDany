const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".content-bar");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
