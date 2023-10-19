

// Preloader Script
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 1500);
});




window.addEventListener("scroll", () => {
  // toggle between navbar fixed and relative positions
  const sectionToWatch = document.getElementById("Food-Delivery");
  const navbar = document.getElementById("navbar");

  const sectionTop = sectionToWatch.offsetTop;
  const sectionHeight = sectionToWatch.clientHeight;
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition >= sectionTop - 100) {
    navbar.classList.add("fixednav");
    navbar.style.padding = "0";
    document.body.classList.add("hamburger-color-invert");
  } else {
    navbar.classList.remove("fixednav");
    navbar.style.padding = "20px";
    document.body.classList.remove("hamburger-color-invert");
  }


const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll(".Navbar-Container .main-nav li a");
const BTT = document.getElementById('back-to-top-button');
  //  navbar active menu effect
  BTT.style.display = "none";
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 400) {
      current = section.getAttribute("id");
      BTT.style.display = "flex";
    }
  });
  navLi.forEach((a) => {
    a.classList.remove("activeThistab");
    if (a.classList.contains(current)) {
      a.classList.add("activeThistab");
    }
  });
});

// Back to top button clicked
function scrolltoTopfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// hamburger function called
function hamburgerMenu() {
  document.querySelector(".main-nav").classList.toggle("show-toggle-menu");
  document.querySelector(".dark-overlay").classList.toggle("show-overlay");
  document.body.classList.toggle("stopscrolling");

  document
    .getElementById("burger-bar1")
    .classList.toggle("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.toggle("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.toggle("hamburger-animation3");
}

// hidetogglemenu function called
function hidetogglemenu() {
  document.body.classList.remove("stopscrolling");
  document.querySelector(".main-nav").classList.remove("show-toggle-menu");
  document
    .getElementById("burger-bar1")
    .classList.remove("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.remove("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.remove("hamburger-animation3");
  document.querySelector(".dark-overlay").classList.remove("show-overlay");
}
console.log(
  "%c Redesigned and Redeveloped by Vinod Jangid ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);

// close mobile toggle menu by clicking on LI
function hidemenubyli() {
  document.body.classList.remove("stopscrolling");
  document.querySelector(".main-nav").classList.remove("show-toggle-menu");
  document
    .getElementById("burger-bar1")
    .classList.remove("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.remove("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.remove("hamburger-animation3");
  document.querySelector(".dark-overlay").classList.remove("show-overlay");
}
