let btn = document.querySelector(".dark");

btn.onclick = function () {
	// flex add inner
	document.querySelectorAll(".flex-add .inner").forEach((ele) => {
		ele.classList.toggle("inner-dark-mode");
	});
	// charts
	document.querySelectorAll(".chart").forEach((ele) => {
		ele.classList.toggle("charts-dark-mode");
	});
	// body
	document.body.classList.toggle("dark-mode");

	// color links
	document.querySelectorAll(".links li a").forEach((ele) => {
		ele.classList.toggle("sidemenu-color");
	});

	// background color links
	document.querySelector(".side-menu").classList.toggle("sidemenu-dark");

	// btn mode
	if (btn.children[0].className == "fas fa-sun") {
		btn.children[0].className = "fas fa-moon";
		btn.classList.add("dark");
		btn.classList.remove("light");
	} else {
		btn.children[0].className = "fas fa-sun";
		btn.classList.add("light");
		btn.classList.remove("dark");
	}
	document.querySelector("nav").classList.toggle("nav-dark-mode");
};

let sideMenuBtn = document.querySelector(".side-menu-btn");
let sideMenu = document.querySelector(".side-menu");

sideMenuBtn.onclick = function () {
	sideMenu.classList.toggle("show-side");
};
