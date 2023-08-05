const showCardInputs = document.querySelectorAll(".show-card");
const hideCardInputs = document.querySelectorAll(".close-button");

export function initProjectCard(){
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