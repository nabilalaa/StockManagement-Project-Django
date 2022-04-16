let btn = document.querySelector(".dark");
console.log(btn);

btn.onclick = function () {
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
	// nav
	document.querySelector("nav").classList.toggle("nav-dark-mode");

	// body table
	document.querySelectorAll("tbody").forEach((ele) => {
		ele.classList.toggle("dark-mode-rbody");
	});

	// head table
	document.querySelector("thead").classList.toggle("dark-mode-rhead");

	// pag
	document.querySelector(".pag").classList.toggle("dark-mode");

	// responsive table
	document.querySelectorAll(".row").forEach((ele) => {
		ele.classList.toggle("dark-mode-t-responsive");
	});
	// form
	document.querySelectorAll("input").forEach((ele) => {
		ele.classList.toggle("dark-mode");
	});
	document.querySelectorAll("button").forEach((ele) => {
		ele.classList.toggle("dark-mode-button");
	});
	document.querySelector(".add").classList.toggle("dark-mode-button");
};

let sideMenuBtn = document.querySelector(".side-menu-btn");
let sideMenu = document.querySelector(".side-menu");

sideMenuBtn.onclick = function () {
	sideMenu.classList.toggle("show-side");
};
