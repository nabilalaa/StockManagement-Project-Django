let btn = document.querySelector(".dark");

let darkMode = localStorage.getItem("darkMode");

function enable() {
	// body table
	document.querySelectorAll("tbody").forEach((ele) => {
		ele.classList.add("dark-mode-rbody");
	});

	// head table
	document.querySelector("thead").classList.add("dark-mode-rhead");

	// pag
	document.querySelector(".pag").classList.add("dark-mode");

	// responsive table
	document.querySelectorAll(".row").forEach((ele) => {
		ele.classList.add("dark-mode-t-responsive");
	});
	// form
	document.querySelectorAll("input").forEach((ele) => {
		ele.classList.add("dark-mode");
	});
	document.querySelectorAll("button").forEach((ele) => {
		ele.classList.add("dark-mode-button");
	});
	document.querySelector(".add").classList.add("dark-mode-button");
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
	// body table
	document.querySelectorAll("tbody").forEach((ele) => {
		ele.classList.remove("dark-mode-rbody");
	});

	// head table
	document.querySelector("thead").classList.remove("dark-mode-rhead");

	// pag
	document.querySelector(".pag").classList.remove("dark-mode");

	// responsive table
	document.querySelectorAll(".row").forEach((ele) => {
		ele.classList.remove("dark-mode-t-responsive");
	});
	// form
	document.querySelectorAll("input").forEach((ele) => {
		ele.classList.remove("dark-mode");
	});
	document.querySelectorAll("button").forEach((ele) => {
		ele.classList.remove("dark-mode-button");
	});
	document.querySelector(".add").classList.remove("dark-mode-button");
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
	// body table
	document.querySelectorAll("tbody").forEach((ele) => {
		ele.classList.add("dark-mode-rbody");
	});

	// head table
	document.querySelector("thead").classList.add("dark-mode-rhead");

	// pag
	document.querySelector(".pag").classList.add("dark-mode");

	// responsive table
	document.querySelectorAll(".row").forEach((ele) => {
		ele.classList.add("dark-mode-t-responsive");
	});
	// form
	document.querySelectorAll("input").forEach((ele) => {
		ele.classList.add("dark-mode");
	});
	document.querySelectorAll("button").forEach((ele) => {
		ele.classList.add("dark-mode-button");
	});
	document.querySelector(".add").classList.add("dark-mode-button");
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
		console.log(darkMode);
	} else {
		disabled();
		console.log(darkMode);
	}
};

let sideMenuBtn = document.querySelector(".side-menu-btn");
let sideMenu = document.querySelector(".side-menu");

sideMenuBtn.onclick = function () {
	sideMenu.classList.toggle("show-side");
};
