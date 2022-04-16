let btn = document.querySelector(".dark");

btn.onclick = function () {
	// body
	document.body.classList.toggle("dark-mode");

	// color links
	document.querySelectorAll(".links li a").forEach((ele) => {
		ele.classList.toggle("sidemenu-color");
	});

	// background color links
	document.querySelector(".side-menu").classList.toggle("sidemenu-dark");
	// form
	document.querySelectorAll("input").forEach((ele) => {
		ele.classList.toggle("dark-mode");
	});
	document.querySelectorAll("button").forEach((ele) => {
		ele.classList.toggle("dark-mode-button");
	});
	document.querySelectorAll("select").forEach((ele) => {
		ele.classList.toggle("dark-mode");
	});
	document.querySelectorAll(".add-items").forEach((ele) => {
		ele.classList.toggle("dark-mode-forms");
	});
	document.querySelector(".forms h3").classList.toggle("dark-mode");

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
};

// sideMenu
let sideMenuBtn = document.querySelector(".side-menu-btn");
let sideMenu = document.querySelector(".side-menu");

sideMenuBtn.onclick = function () {
	sideMenu.classList.toggle("show-side");
};

// add sales
let add = document.querySelector(".add-sales");
num = 1;

function addsale() {
	num++;
	let newSales = `<div class="sales">
		<div class="group-form">
			<label for="category">المنتج</label>
			<select id="products" name="products">
				<option value="default" selected disabled>
					-- اختر منتج --
				</option>
	
				<option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
				<option value="mercedes">Mercedes</option>
				<option value="audi">Audi</option>
			</select>
		</div>
		<div class="group-form">
			<label for="quantity">الكمية</label>
			<input
				id="quantity"
				type="number"
				name="quantity"
				data-total="#total${num}"
				data-price="#price${num}"
			/>
		</div>
		<div class="group-form">
			<label for="price">سعر البيع</label>
			<input id="price${num}" type="number" name="price" />
		</div>
		<div class="group-form">
			<label for="total">المجموع</label>
			<input id="total${num}" type="number" name="total" />
		</div>
	</div>`;

	document.getElementById("demo").insertAdjacentHTML("beforeend", newSales);

	let quantity = document.querySelectorAll("#quantity"),
		ftotal = document.getElementById("final-total");

	quantity.forEach((q) => {
		q.onkeyup = function () {
			let total = document.querySelector(q.dataset.total);
			let price = document.querySelector(q.dataset.price);
			console.log(total);
			console.log(price);
			console.log(price.value * q.value);
			total.value = price.value * q.value;
			let listTotal = document.getElementsByName("total");
			console.log(listTotal);
			let list = [];
			listTotal.forEach((ele) => {
				list.push(ele.value);
				ftotal.value = d3.sum(list);
				console.log(d3.sum(list));
				// Math.sum;
			});
		};
	});
}

add.addEventListener("click", addsale);

let quantity = document.querySelectorAll("#quantity"),
	ftotal = document.getElementById("final-total");

quantity.forEach((q) => {
	q.onkeyup = function () {
		let total = document.querySelector(q.dataset.total);
		let price = document.querySelector(q.dataset.price);
		let ftotal = document.querySelector("#final-total");

		console.log(total);
		console.log(price);
		console.log(price.value * q.value);
		total.value = price.value * q.value;
		ftotal.value = price.value * q.value;
	};
});
