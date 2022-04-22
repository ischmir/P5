/* NICKLAS */

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

/* TIMM KODE */

//JAVASCRIPT NAV START

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');
  
  
  burger.addEventListener('click',() => {
  
      //åben og luk nav
      nav.classList.toggle('nav-active');
  
      // nav link animation
      navlinks.forEach((link,index)=>{
          if(link.style.animation){
          link.style.animation ='';
          }else{
           link.style.animation = `navlinkfade 0.5s ease forwards ${index/7+0.3}s`;
          }
      });   
      //burger animation
      burger.classList.toggle('toggle');
  });
}

navSlide();

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});