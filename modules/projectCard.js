const projects = [
  {
    name: "Project Name",
    description: "Description",
    imageUrl: "/assets/code.jpg",
    details: [
      "Detail 1",
      "Detail 2",
      "Detail 3"
    ],
    link: {
      access: "",
      github: ""
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
      projectCardToReveal.classList.add("revealed")
    })
  })

  hideCardInputs.forEach(hideCardInput => {
    hideCardInput.addEventListener("click", (e) => {
      const projectCardToHide = e.target.closest(".project-card");
      projectCardToHide.classList.remove("revealed")
    })
  })
}

function drawProjectCards(projects){
  const projectCardContainer = document.querySelector(".projects-container");
  projects.forEach(project => {
    const projectElem = document.createElement("div");
    projectElem.classList.add("project-card");

    let detailsList = "";

    for (let detail of project.details){
      detailsList += `<li>${detail}</li>`
    }

    projectElem.innerHTML = `
    <div class="project-card">
    <img class="show-card" src="${project.imageUrl}" alt="">
    <div class="project-info">
      <h5 class="show-card">${project.name}</h5>
      <p>${project.description}</p>
    </div>
    <div class="card-reveal">
      <div>
        <div class="close-card-container">
          <p>${project.name}</p>
          <span class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          </span>
        </div>
        <ul>
          ${detailsList}
        </ul>
      </div>
      <div class="project-links-container">
        <a href="${project.link.access}">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
        <a href="${project.link.github}">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" stroke="currentColor" stroke-width="0" class="ml-4" viewBox="0 0 1024 1024"><path stroke="none" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/></svg>
        </a>
      </div>
    </div>
  </div>
    `
    projectCardContainer.appendChild(projectElem)
  })
}