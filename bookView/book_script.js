// Sticky Nav - taken from "50 Projects in 50 Days" "Sticky Nav Bar"
const nav = document.querySelector('.nav')
window.addEventListener('scroll',fixNav)

function fixNav(){
  if(window.scrollY > nav.offsetHeight + 150){
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

// Rating Button
for(let i=1; i<=5; i++) {
    let rate = document.querySelector(`#book-rating-${i}`);
    let ratebox = document.querySelector(`#rating-box-${i}`);

    rate.addEventListener('click', () => {
        ratebox.classList.remove("hidden");
    });
}

// Categories Button
let catbutton = document.querySelector(`#cat-container`);
let catArea = document.querySelector(`.categories`);
let clickCount = 0;
console.log(catArea);

catbutton.addEventListener('click', () => {
    if(clickCount%2==0) {
        console.log("clicked");
        catArea.classList.remove("hidden");
    }
    else {
        console.log("clicked");
        catArea.classList.add("hidden");    
    }
    clickCount++;    
});

// Search - taken / adapted from "50 Projects in 50 days" "Hidden Search Bar"
const search = document.querySelector(`.search`);
const btn = document.querySelector(`.btn`);
const input = document.querySelector(`.input`);

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})
