import { initProjectCards } from "./modules/projectCard";
import { drawSkills } from "./modules/skills";

const homeNavButton = document.querySelector("#home-btn");
const nav = document.querySelector("nav");

homeNavButton.addEventListener("click", () => {
  window.scrollTo(0,0)
})

window.addEventListener("scroll", () => {
  const scrollYPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollYPosition > 0) {
    nav.classList.remove("big-nav");
    nav.classList.add("small-nav");
  } else {
    nav.classList.add("big-nav");
    nav.classList.remove("small-nav");
  }
})

initProjectCards();
drawSkills();