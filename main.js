// 📌 Elements
const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");
const emptyArea = document.getElementById("emptyarea");
const mobileToggleMenu = document.getElementById("mobiletogglemenu");
const mybutton = document.getElementById("backtotopbutton");

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobileNavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

// 🎛️ Settings toggle
function settingToggle() {
  document.getElementById("setting-container").classList.toggle("settingactivate");
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
  document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// 🔊 Play/pause audio
function playPause() {
  const isChecked = document.getElementById("switchforsound").checked;
  if (!isChecked) {
    audio.pause();
  } else {
    audio.play();
  }
}

// 🌗 Toggle light/dark visual mode
function visualMode() {
  document.body.classList.toggle("light-mode");
  document.querySelectorAll(".needtobeinvert").forEach((el) => {
    el.classList.toggle("invertapplied");
  });
}

// ⏳ Hide loader on load
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector(".hey").classList.add("popup");
});

// 🍔 Hamburger menu
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  mobileToggleMenu.classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// ❌ Close menu when nav item clicked
function hideMenuByLi() {
  document.body.classList.remove("stopscrolling");
  mobileToggleMenu.classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// 📌 Scroll spy logic
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  mobileNavLi.forEach((li) => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThismobiletab");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("activeThistab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThistab");
    }
  });
});

// 🔝 Back to top button
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollFunction();
};

// 🚫 Disable right-click on images
document.addEventListener(
  "contextmenu",
  function (e) {
    if (e.target.nodeName === "IMG") {
      e.preventDefault();
    }
  },
  false
);

// 👀 Eye-follow effect
const Pupils = document.getElementsByClassName("footer-pupil");
const pupilsArr = Array.from(Pupils);

let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;

let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (e) => {
  currentXPosition = e.clientX - mouseXStartPoint;
  currentYPosition = e.clientY;

  fracXValue = currentXPosition / mouseXRange;
  fracYValue = currentYPosition / mouseYEndPoint;

  const translateX = pupilStartPoint + fracXValue * pupilRangeX;
  const translateY = pupilStartPoint + fracYValue * pupilRangeY;

  pupilsArr.forEach((pupil) => {
    pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
};

const windowResize = () => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);
