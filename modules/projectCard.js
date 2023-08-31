const projects = [
  {
    name: "Connect Four",
    description: "Player vs player connect four game.",
    imageUrl: "assets/project-thumbnails/connect-four",
    details: [
      "Pure HTML, CSS and Javascript.",
      "No frameworks or npm packages.",
      "Player VS Player gameplay.",
      "Fully responsive design.",
      "Use of CSS grid for the game board."
    ],
    link: {
      access: "https://angelrcd.github.io/connect-four/",
      github: "https://github.com/angelrcd/connect-four"
    }
  },
  {
    name: "Todo App",
    description: "Maintain and keep track of your day-to-day tasks.",
    imageUrl: "assets/project-thumbnails/todo-app",
    details: [
      "Pure HTML, CSS and Javascript.",
      "No frameworks or npm packages.",
      "Organize groups of to-dos in different projects.",
      "To-dos can have a sub-list with small tasks.",
      "Fully responsive design.",
      "Use of local storage for user data persistance."
    ],
    link: {
      access: "https://angelrcd.github.io/odin-todo/",
      github: "https://github.com/angelrcd/odin-todo"
    }
  },
  {
    name: "Weather app",
    description: 'Weather forecast site using <a target="_blank" href="https://www.weatherapi.com/">Weather API</a>',
    imageUrl: "assets/project-thumbnails/weather-app",
    details: [
      "Pure HTML, CSS and Javascript, no frameworks.",
      "Calls made using native fetch API.",
      "Use the search bar to see the info of a diferent location.",
      "See forecast of the next 3 days, click on them to see hour-by-hour information graphics.",
    ],
    link: {
      access: "https://angelrcd.github.io/odin-weather-app/",
      github: "https://github.com/angelrcd/odin-weather-app"
    }
  },
  {
    name: "Battleship",
    description: "Play battleship against the computer.",
    imageUrl: "assets/project-thumbnails/battleship",
    details: [
      "Pure HTML, CSS and Javascript.",
      "Test Driven Development, test suite written on vitest.",
      "Fully responsive design.",
    ],
    link: {
      access: "https://angelrcd.github.io/odin-battleship/",
      github: "https://github.com/angelrcd/odin-battleship"
    }
  },
  {
    name: "Knight Travails",
    description: "Algorithm practice. It shows the shortest possible way a chess knight can make to get from one square to another.",
    imageUrl: "assets/project-thumbnails/knight-travails",
    details: [
      "Search tree algorithm practice.",
      "It treats all the possible moves a knight could make from it's current position as childrens of a tree. Then to search for the goal square, it traverses the tree in level order.",
      "Webpage visualizer made using pure HTML, CSS and Javascript.",
    ],
    link: {
      access: "https://angelrcd.github.io/odin-knight-travails/",
      github: "https://github.com/angelrcd/odin-knight-travails"
    }
  },
  {
    name: "Binary Search Tree",
    description: "Algorithm practice. Binary search tree implemented in Javascript.",
    imageUrl: "assets/project-thumbnails/binary-search-tree",
    details: [
      "Binary Search tree algorithm practice.",
      "Insert new nodes, and delete them.",
      "Find the depth of a node (distance from the root).",
      "Rebalance binary search tree if it gets unbalanced after deleting nodes."
    ],
    link: {
      access: "https://angelrcd.github.io/odin-binary-search-tree/",
      github: "https://github.com/angelrcd/odin-binary-search-tree"
    }
  },
  {
    name: "Memory game",
    description: "Match pair memory game.",
    imageUrl: "assets/project-thumbnails/memory-game",
    details: [
      "Pure HTML, CSS and Javascript.",
      "Game keeps track of your time and number of moves.",
      "Can select board size and style of icons/numbers.",
    ],
    link: {
      access: "https://angelrcd.github.io/memory-game/",
      github: "https://github.com/angelrcd/memory-game"
    }
  }
]

export function initProjectCards(){
  drawProjectCards(projects)
  const showCardInputs = document.querySelectorAll(".show-card");
  const hideCardInputs = document.querySelectorAll(".close-button");

  showCardInputs.forEach(showCardInput =>{
    showCardInput.addEventListener("click", (e) => {
      const projectCardToReveal = e.target.closest(".project-card");
        revealCardDetails(projectCardToReveal);
    })
  })

  hideCardInputs.forEach(hideCardInput => {
    hideCardInput.addEventListener("click", (e) => {
      const projectCardToHide = e.target.closest(".project-card");
      hideCardDetails(projectCardToHide);
    })
  })

  // Project cards keyboard controls when focused
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(projectCard => {
    projectCard.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter'){
        const projectCardToReveal = e.target.closest(".project-card");
        revealCardDetails(projectCardToReveal);
      }
    })
  })
}

function revealCardDetails(projectCard){
  projectCard.classList.add("revealed");
  projectCard.ariaExpanded = true;
}

function hideCardDetails(projectCard){
  projectCard.classList.remove("revealed")
  projectCard.ariaExpanded = false;
}

function drawProjectCards(projects){
  const projectCardContainer = document.querySelector(".projects-container");
  projects.forEach(project => {
    const projectElem = document.createElement("li");
    projectElem.classList.add("project-card");
    projectElem.tabIndex = 0;
    projectElem.ariaExpanded = false;
    let detailsList = "";

    for (let detail of project.details){
      detailsList += `<li>${detail}</li>`
    }

    projectElem.innerHTML = `
    <picture>
      <source srcset="${project.imageUrl}.opti.webp" type="image/webp">
      <img class="show-card" src="${project.imageUrl}.opti.png" alt="">
    </picture>
    <div class="project-info">
      <h4 class="show-card">${project.name}</h4>
      <p>${project.description}</p>
    </div>  
    <div class="card-reveal">
      <div>
        <div class="close-card-container">
          <p>${project.name}</p>
          <button aria-label='Close project details' class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          </button>
        </div>
        <ul>
          ${detailsList}
        </ul>
      </div>
      <div class="project-links-container">
        <a aria-label='Visit external link ${project.name} in new tab' target="_blank" href="${project.link.access}">
          <span hidden>Visit external link</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
        <a aria-label='Visit ${project.name} code repository in new tab' target="_blank" href="${project.link.github}">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" stroke="currentColor" stroke-width="0" class="ml-4" viewBox="0 0 1024 1024"><path stroke="none" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/></svg>
        </a>
      </div>
    </div>

    `
    projectCardContainer.appendChild(projectElem);
  })
}