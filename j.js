const navList = document.querySelector(".nav-list");
const mobileMenu = document.querySelector(".nav-menu");

const handleMenuToggle = () => {
  const defaultValue = navList.getAttribute("aria-hidden");
  console.log(defaultValue);
  if (defaultValue === "true") {
    navList.setAttribute("aria-hidden", false);
    mobileMenu.setAttribute("aria-hidden", false);
  } else if (defaultValue === "false") {
    navList.setAttribute("aria-hidden", true);
    mobileMenu.setAttribute("aria-hidden", true);
  }
};

mobileMenu.addEventListener("click", handleMenuToggle);
