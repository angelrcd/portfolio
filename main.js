import { initProjectCards } from "./modules/projectCard";
import { drawSkills } from "./modules/skills";

const homeNavButton = document.querySelector("#home-btn");
const nav = document.querySelector("nav");
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const hamburguerButton = document.querySelector(".hamburguer-button");
const backdrop = document.querySelector(".mobile-backdrop");

initProjectCards();
drawSkills();

// Mobile navbar
hamburguerButton.addEventListener("click", () => {
  const toggleExpandedValue = hamburguerButton.getAttribute("aria-expanded") === 'false' ? 'true' : 'false';
  hamburguerButton.setAttribute("aria-expanded", toggleExpandedValue)
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("mobile-active");
  backdrop.classList.toggle("active");
})

backdrop.addEventListener("click", () => {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("mobile-active");
  backdrop.classList.toggle("active");
})

navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    if (backdrop.classList.contains("active")){
      const menu = document.querySelector("nav ul");
      menu.classList.toggle("mobile-active");
      backdrop.classList.toggle("active");
    }
  })
})

// Home button in navbar take you to the top of the page
homeNavButton.addEventListener("click", () => {
  window.scrollTo(0,0)
})

window.addEventListener("scroll", () => {
  // Change the navbar visual style when you scroll down
  const scrollYPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollYPosition > 0) {
    nav.classList.remove("big-nav");
    nav.classList.add("small-nav");
  } else {
    nav.classList.add("big-nav");
    nav.classList.remove("small-nav");
  }

  let currentSection = "";

  sections.forEach( section => {
    const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
  })  
  // Remove the 'active' class from all nav links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  if (isPageScrolledToBottom()) {
    const activeLink = document.querySelector('nav a[href="#contact"]');
    activeLink.classList.add('active');
    return;
  }

  if(isPageScrolledToTop()){
    const activeLink = document.querySelector("nav a:first-child");
    activeLink.classList.add('active');
    return;
  }

  if(currentSection === "home"){
    currentSection = "about"
  }
  const activeLink = document.querySelector(`nav a[href="#${currentSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

})

function isPageScrolledToBottom() {
  const windowHeight = window.innerHeight; // Height of the visible window
  const scrollableHeight = document.documentElement.scrollHeight; // Total height of the webpage
  const currentScrollPosition = window.scrollY || window.pageYOffset; // Current scroll position

  // Check if the sum of current scroll position and visible height is close to the total height
  return Math.abs(scrollableHeight - (currentScrollPosition + windowHeight)) <= 1;
}

function isPageScrolledToTop() {
  const currentScrollPosition = window.scrollY || window.pageYOffset; // Current scroll position

  // Check if the sum of current scroll position and visible height is close to the total height
  return currentScrollPosition === 0;
}