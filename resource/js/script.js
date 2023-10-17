
// toggle between navbar fixed and relative positions
    window.addEventListener('scroll', () => {
        const sectionToWatch = document.getElementById('Food-Delivery'); 
        const navbar = document.getElementById('navbar');
      
        const sectionTop = sectionToWatch.offsetTop;
        const sectionHeight = sectionToWatch.clientHeight;
        const currentScrollPosition = window.pageYOffset;
      
        if (currentScrollPosition >= (sectionTop - 100)) {
          navbar.classList.add('fixednav');
          navbar.style.padding = "0";
          document.body.classList.add('hamburger-color-invert');
        } else {
          navbar.classList.remove('fixednav');
          navbar.style.padding = "20px";
          document.body.classList.remove('hamburger-color-invert');
        }
      });

    //   navbar li active effect
    const sections = document.querySelectorAll('.section');
const navLi = document.querySelectorAll('.Navbar-Container .main-nav li a');

window.addEventListener('scroll', ()=>{
let current = "";
sections.forEach(section => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.clientHeight;
  if(pageYOffset >= (sectionTop - 400)){
    current = section.getAttribute('id');
  }
})
navLi.forEach( a => {
a.classList.remove('activeThistab');
if(a.classList.contains(current)){
  a.classList.add('activeThistab');
}
})
})


function hamburgerMenu() {
document.querySelector('.main-nav').classList.toggle("show-toggle-menu");
document.querySelector('.dark-overlay').classList.toggle("show-overlay");
document.body.classList.toggle("stopscrolling");

document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");



}

function hidetogglemenu(){
  document.body.classList.remove("stopscrolling");
  document.querySelector('.main-nav').classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
  document.querySelector('.dark-overlay').classList.remove("show-overlay");
  }

// close mobile toggle menu by clicking on LI
function hidemenubyli(){
  document.body.classList.remove("stopscrolling");
  document.querySelector('.main-nav').classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
  document.querySelector('.dark-overlay').classList.remove("show-overlay");
  }
  