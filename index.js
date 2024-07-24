var menuOpenButton = document.getElementById("menuopen");
var navList = document.querySelector(".navigation");
var center = document.querySelector(".center1");
var menuIcon = document.querySelector(".menu-icon");

function openMenu() {
  navList.style.opacity = "1";
  center.style.height = "200vh";
  menuIcon.innerHTML = '<i class="bi bi-x"></i>';
  menuOpenButton.removeEventListener("click", openMenu);
  menuOpenButton.addEventListener("click", closeMenu);
}

function closeMenu() {
  navList.style.opacity = "0";
  center.style.height = "0vh";
  menuIcon.innerHTML = '<i class="bi bi-list"></i>';
  menuOpenButton.removeEventListener("click", closeMenu);
  menuOpenButton.addEventListener("click", openMenu);
}

menuOpenButton.addEventListener("click", openMenu);

