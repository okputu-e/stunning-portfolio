//timer for loader
function preLoad() {
  let load = setTimeout(showWrapper, 3000);
}

//show Wrapper
function showWrapper() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".wrapper").style.display = "block";
}

const harm = document.querySelector(".nav__harm");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const overly = document.querySelector(".overlay");
const more = document.getElementById("more");
let mob_nav = document.querySelector(".mobile_nav");
let harmOpen = false;
let less = false;

harm.addEventListener("click", () => {
  if (!harmOpen) {
    harm.classList.add("open");
    overly.style.display = "block";
    body.classList.add("noscroll");
    nav.classList.remove("sticky");
    harmOpen = true;
  } else {
    harm.classList.remove("open");
    overly.style.display = "none";
    body.classList.remove("noscroll");
    nav.classList.add("sticky");
    harmOpen = false;
  }
});

more.addEventListener("click", () => {
  if (!less) {
    document.querySelector(".projects").style.height = `100%`;
    // show remaining
    document.getElementById("last").style.display = "block";
    //change more to less
    more.innerText = "less";
    less = true;
  } else {
    document.querySelector(".projects").style.height = `100vh`;
    // show remaining
    document.getElementById("last").style.display = "none";
    //change more to less
    more.innerText = "More";
    less = false;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

//get the links
let links = document.getElementsByClassName("link");

//loop through the nav link
for (let index = 0; index < links.length; index++) {
  links[index].addEventListener("click", () => {
    console.log("clicked");
    //get the current active
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    links[index].classList.add("active");
  });
}

//add authentication to form
