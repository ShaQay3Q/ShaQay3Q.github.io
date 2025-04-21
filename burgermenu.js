// const veganburger = document.querySelector(".veganburger");
// const navMenu = document.querySelector(".nav-menu");

// veganburger.addEventListener("click", () => {
// 	veganburger.classList.toggle("active");
// 	navMenu.classList.toggle("active");
// });

// document.addEventListener("DOMContentLoaded", function () {
// 	const veganburger = document.querySelector(".veganburger");
// 	const navMenu = document.querySelector(".nav-menu");

// 	veganburger.addEventListener("click", function () {
// 		veganburger.classList.toggle("active");
// 		navMenu.classList.toggle("active");
// 	});
// });

const veganburger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

veganburger.addEventListener("click", () => {
	veganburger.classList.toggle("open");
	navLinks.classList.toggle("active");
});
