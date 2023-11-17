const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

const handleRemoveMenu = navLink.forEach((n) =>
  n.addEventListener("click", linkAction)
);

export default handleRemoveMenu;
