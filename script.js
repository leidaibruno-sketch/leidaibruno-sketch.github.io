const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
