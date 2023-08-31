const $sidebar = document.querySelector("header > nav");
const $menuBtn = document.querySelector("header > button.header-menu");
const $blocker = document.querySelector("body > #blocker");

$menuBtn.addEventListener("click", () => {
  if (window.innerWidth >= 1250) return false;
  $sidebar.classList.toggle("active");
  $blocker.classList.toggle("active");
});

$blocker.addEventListener("click", () => {
  $sidebar.classList.remove("active");
  $blocker.classList.remove("active");
});
