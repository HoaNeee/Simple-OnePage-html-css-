const menuBarMobi = document.querySelector("#menu-mobi-icon");
const menuMobi = document.querySelector("#menu-mobi");
const socialMobi = document.querySelector("#social-mobi");
const header = document.querySelector(".header");

menuBarMobi.addEventListener("click", (e) => {
  menuMobi.classList.toggle("opend");
  socialMobi.classList.toggle("opend");
  const i = menuBarMobi.querySelector("i");
  i.classList.toggle("fa-bars");
  i.classList.toggle("fa-close");
});

window.onscroll = function () {
  const logo = header.querySelector(".inner-logo img ");
  if (document.documentElement.scrollTop > 0) {
    logo.style.width = "40px";
  } else {
    logo.style.width = "50px";
  }
};
