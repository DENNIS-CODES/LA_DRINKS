const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
	navigation.classList.toggle("is-open");
	hamburger.classList.toggle("is-open");
});