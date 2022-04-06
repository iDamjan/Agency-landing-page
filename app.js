const navbarDesktop = document.querySelector(".navbar_desktop");
const navLinks = document.querySelectorAll(".nav_links");
const contactLink = document.querySelectorAll(".contact");
const burgerMenuIcon = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.burgerMenu')

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY > 0;

  navbarDesktop.classList.toggle("onscroll", scrollPosition);

  if (scrollPosition) {
    navLinks.forEach((nav) => {
      nav.style.color = "black";
    });
  } else {
    navLinks.forEach((nav) => {
      nav.style.color = "white";
    });
  }
});

burgerMenuIcon.addEventListener('click', () =>{
    burgerMenu.classList.toggle('burgerMenuShow');
})

