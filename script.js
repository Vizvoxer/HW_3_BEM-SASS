var hamburger = document.querySelector(".c-navigation__menu-button--mobile");
var hamburgerLines = Array.from(
  document.querySelectorAll(".c-navigation__menu-line")
);
var menu = document.querySelector(".c-navigation__menu--hidden");
var menuItem = Array.from(
  document.querySelectorAll(".c-navigation__menu-item")
);
// Making the first menu utem selected by default
menuItem[0].classList.add("c-navigation__menu-item--active");
var menuIsShown = false;

function toggleMenuState() {
  menuIsShown = !menuIsShown;
  menu.classList.toggle("c-navigation__menu--shown", menuIsShown);
}

function animateHamburger() {
  toggleMenuState();
  setTimeout(function() {
    for (var i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].classList.toggle(
        "c-navigation__menu-line--arrow-" + (i + 1),
        menuIsShown
      );
    }
  }, 400);
}

function selectMenuItem(e) {
  for (var i = 0; i < menuItem.length; i++) {
    if (menuItem[i].classList.contains("c-navigation__menu-item--active")) {
      menuItem[i].classList.remove("c-navigation__menu-item--active");
    }
  }
  e.target.classList.add("c-navigation__menu-item--active");
}

menuItem.forEach(function(item) {
  item.addEventListener("click", selectMenuItem);
});

hamburger.addEventListener("click", animateHamburger);
