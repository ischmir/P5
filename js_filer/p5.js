/* Vælger class "to-top" og laver en constant ved navn toTop */
const toTop = document.querySelector(".to-top");

/* tilføjer eventlistener ved scroll */

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
    /* Hvis sidens længde, Y, er større end 100 vises knappen */
  } else {
    toTop.classList.remove("active");
    /* Hvis sidens længde, Y, ikke er større end 100 fjernes aktiv */
  }
})