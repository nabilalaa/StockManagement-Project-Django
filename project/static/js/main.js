let btn = document.querySelector(".dark");

let darkMode = localStorage.getItem("darkMode");

function enable() {
	// flex add inner
	document.querySelectorAll(".flex-add .inner").forEach((ele) => {
		ele.classList.add("inner-dark-mode");
	});
	// charts
	document.querySelectorAll(".chart").forEach((ele) => {
		ele.classList.add("charts-dark-mode");
	});
	// body
	document.body.classList.add("dark-mode");

	// color links
	document.querySelectorAll(".links li a").forEach((ele) => {
		ele.classList.add("sidemenu-color");
	});
	// side menu
	document.querySelector(".side-menu").classList.add("sidemenu-dark");

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
	// nav
	document.querySelector("nav").classList.add("nav-dark-mode");
	localStorage.setItem("darkMode", "enable");
}

function disabled() {
	// flex add inner
	document.querySelectorAll(".flex-add .inner").forEach((ele) => {
		ele.classList.remove("inner-dark-mode");
	});
	// charts
	document.querySelectorAll(".chart").forEach((ele) => {
		ele.classList.remove("charts-dark-mode");
	});
	// body
	document.body.classList.remove("dark-mode");

	// color links
	document.querySelectorAll(".links li a").forEach((ele) => {
		ele.classList.remove("sidemenu-color");
	});

	// side menu
	document.querySelector(".side-menu").classList.remove("sidemenu-dark");

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
	// nav
	document.querySelector("nav").classList.remove("nav-dark-mode");
	localStorage.setItem("darkMode", "disabled");
}
if (darkMode == "enable") {
	// flex add inner
	document.querySelectorAll(".flex-add .inner").forEach((ele) => {
		ele.classList.add("inner-dark-mode");
	});
	// charts
	document.querySelectorAll(".chart").forEach((ele) => {
		ele.classList.add("charts-dark-mode");
	});
	// body
	document.body.classList.add("dark-mode");

	// color links
	document.querySelectorAll(".links li a").forEach((ele) => {
		ele.classList.add("sidemenu-color");
	});
	// side menu
	document.querySelector(".side-menu").classList.add("sidemenu-dark");

	if (btn.children[0].className == "fas fa-sun") {
		btn.children[0].className = "fas fa-moon";
		btn.classList.add("dark");
		btn.classList.remove("light");
	} else {
		btn.children[0].className = "fas fa-sun";
		btn.classList.add("light");
		btn.classList.remove("dark");
	}
	// nav
	document.querySelector("nav").classList.add("nav-dark-mode");
}
btn.onclick = function () {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enable") {
		enable();
	} else {
		disabled();
	}
};

let sideMenuBtn = document.querySelector(".side-menu-btn");
let sideMenu = document.querySelector(".side-menu");

sideMenuBtn.onclick = function () {
	sideMenu.classList.add("show-side");
};
