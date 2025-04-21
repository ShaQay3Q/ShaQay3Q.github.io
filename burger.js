const burgerButton = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");

burgerButton.addEventListener("click", () => {
	const isExpanded = burgerButton.getAttribute("aria-expanded") === "true";
	burgerButton.setAttribute("aria-expanded", String(!isExpanded));
	burgerMenu.classList.toggle("show");
	burgerMenu.setAttribute("aria-hidden", String(isExpanded));
});
