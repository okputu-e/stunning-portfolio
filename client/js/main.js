//timer for loader
// function preLoad() {
//   let load = setTimeout(showWrapper, 3000);
// }

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
//get all inputs
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

//prevent defualt submission
form.addEventListener("submit", (event) => {
  validateForm();
  console.log(isFormValid());
  if (isFormValid() == true) {
    form.submit();
  } else {
    event.preventDefault();
  }
});

function isFormValid() {
  const spans = form.querySelectorAll("span");
  let result = true;
  spans.forEach((span) => {
    if (span.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

//validate form
function validateForm() {
  //username
  if (username.value.trim() == "") {
    setError(username, "Name can not be empty");
  } else if (
    username.value.trim().length < 5 ||
    username.value.trim().length > 15
  ) {
    setError(username, "Name must be min 5 and max 15 charecters");
  } else {
    setSuccess(username);
  }

  //email
  if (email.value.trim() == "") {
    setError(email, "Provide email address");
  } else if (isEmailValid(email.value)) {
    setSuccess(email);
  } else {
    setError(email, "Provide a valid email address");
  }
}

// set error message
function setError(element, errorMessage) {
  const parent = element.parentElement;
  const span = parent.querySelector("span");
  if (span.classList.contains("success")) {
    span.classList.remove("success");
  }
  span.classList.add("error");
  span.textContent = errorMessage;
}

// set success message
function setSuccess(element) {
  const parent = element.parentElement;
  const span = parent.querySelector("span");
  if (span.classList.contains("error")) {
    span.classList.remove("error");
  }
  span.classList.add("success");
}

//verify email
function isEmailValid(email) {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return reg.test(email);
}
