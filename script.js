
// Sticky Nav JS
// window.onscroll = function() {stickNav()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function stickNav() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// taken from "50 Projects in 50 Days" "Sticky Nav Bar"
const nav = document.querySelector('.nav')
window.addEventListener('scroll',fixNav)

function fixNav(){
  if(window.scrollY > nav.offsetHeight + 150){
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

