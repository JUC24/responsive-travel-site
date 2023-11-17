/*=============== SHOW MENU ===============*/

//Declaracion constantes
const navMenu = document.getElementById("nav-menu");
const navTonggle = document.getElementById("nav-tonggle");
const navClose = document.getElementById("nav-close");

//validacion para mostrar menu y agregacion del evento mostar
function showMenu() {
  if (navTonggle) {
    navTonggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
}

//funcion para ocultar el menu
function hideMenu() {
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
}

export { showMenu, hideMenu };
