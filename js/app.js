//NAVIGATION
const nav = document.querySelector("#nav");
const navLinks = document.querySelector(".nav-links");
const navBtn = document.querySelector(".nav-toggle");
const toggleImg = document.querySelector(".toggle-img");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-toggled");

  if (nav.classList.contains("nav-toggled")) {
    toggleImg.src = "./images/icon-close.svg";
  } else {
    toggleImg.src = "./images/icon-hamburger.svg";
    toggleImg.style.fill = "white";
  }
});

window.addEventListener("scroll", (e) => {
  const windowPosition = window.scrollY;

  if (windowPosition > 0) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});

//HEADER IMAGE
const headerimage = document.querySelector(".header-background");

//BUTTONS
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

//TEXT
const heading = document.querySelector(".heading-1");
const info = document.querySelector(".paragraph");

const texts = [
  {
    h1: "Discover innovative ways to decorate",
    text: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and
        function in bringing your vision to life. Create a room in your own style with our collection and make your property
        a reflection of you and what you love.`,
  },
  {
    h1: "We are available all across the globe",
    text: `With stores all over the world, it's easy for you to find furniture for your home or place of bussines. Locally, we're 
        in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate 
        to contact us today.`,
  },
  {
    h1: "Manufactured with the best materials",
    text: `Our modern furniture store provide a high-level of quality. Our company has invested in advanced technology to ensure 
        that every product is made as perfect as consistent as possible. With three decades of experience in this industry, we 
        understand what customers want for their home and office.`,
  },
];

let current = 0;

document.addEventListener("DOMContentLoaded", () => {
  setImage();
  setText();
});

nextBtn.addEventListener("click", function () {
  current++;
  if (current >= texts.length) {
    current = 0;
  }
  setImage();
  setText();
});

prevBtn.addEventListener("click", function () {
  current--;
  if (current < 0) {
    current = texts.length - 1;
  }
  setImage();
  setText();
});

function setImage() {
  headerimage.style.backgroundImage = `url(images/desktop-image-hero-${
    current + 1
  }.jpg)`;
}

function setText() {
  heading.textContent = texts[current].h1;
  info.textContent = texts[current].text;
}
