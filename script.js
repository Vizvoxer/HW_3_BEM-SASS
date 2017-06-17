var hamburger = document.querySelector(".c-navigation__menu-button--mobile");
var hamburgerLines = Array.from(document.querySelectorAll(".c-navigation__menu-line"));
var menu = document.querySelector(".c-navigation__menu--hidden");
var menuIsShown = false;

function toggleMenuState(){
	menuIsShown = !menuIsShown;
	menu.classList.toggle("c-navigation__menu--shown",menuIsShown);
}

function animateHamburger(){
	toggleMenuState();
	setTimeout(function(){
		for(var i=0; i< hamburgerLines.length; i++){
		hamburgerLines[i].classList.toggle("c-navigation__menu-line--arrow-"+(i+1),menuIsShown)
		}
	},400)
	

}

hamburger.addEventListener("click", animateHamburger);
