document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu");
  const subMenu = menuButton.nextElementSibling;

  menuButton.addEventListener("click", function (event) {
    event.preventDefault(); 
    subMenu.classList.toggle("active");
  });
});
