const projects = [1, 2, 3];
const experience = [1, 2, 3];

const modalButtons = document.querySelectorAll("[trigger-modal]");
const closeButtons = document.querySelectorAll("[close-modal]");

// =================================================
// FUNCIONES OPEN & CLOSE PORFOLIO MODALS ==========
// =================================================
function openModal(event){

  const buttonInfo = event.target.closest('[trigger-modal]').getAttribute("id").split("-");
  const modalType = buttonInfo[1];
  const modalId = buttonInfo[2];
  const modal = document.getElementById(`${modalType}-modal-${modalId}`);

  if(modal){
    modal.classList.remove('hidden')
    modal.classList.add("opacity-100");
    modal.classList.remove('opacity-0')
    setTimeout(() => {
      modal.children[0].classList.remove("scale-95", "opacity-0");
      modal.children[0].classList.add("scale-100", "opacity-100");
      modal.setAttribute("aria-hidden", "false");
      modal.setAttribute("tabindex", "-1");
      modal.focus();
    }, 10);
  }
}

function closeModal(event){

    const buttonInfo = event.target.closest('[close-modal]').getAttribute("id").split("-");
    const modalType = buttonInfo[1];
    const modalId = buttonInfo[2];
    const modal = document.getElementById(`${modalType}-modal-${modalId}`);

    if(modal){
      document.body.focus();
      modal.classList.remove("opacity-100");
      modal.classList.add('opacity-0');
      modal.children[0].classList.add("scale-95", "opacity-0");
      modal.children[0].classList.remove("scale-100", "opacity-100");
      setTimeout(() => {
        console.log("ESCONDIENDO")
        modal.classList.add('hidden');
        modal.setAttribute("aria-hidden", "true");
      }, 300)
    }
}

modalButtons.forEach((button) => {
  button.addEventListener('click', (event) => openModal(event));
});

closeButtons.forEach((button) => {
  button.addEventListener('click', (event) => closeModal(event))
});

// Agregando función de cierre al presionar fuera del modal o con la tecla ESC
projects.forEach((project) => {
  const modal = document.getElementById(`porfolio-modal-${project}`);
  modal.addEventListener('click', (event) => {
    if(event.target === modal) {
      document.body.focus();
      modal.classList.remove("opacity-100");
      modal.classList.add('opacity-0');
      modal.children[0].classList.add("scale-95", "opacity-0");
      modal.children[0].classList.remove("scale-100", "opacity-100");
      setTimeout(() => {
        console.log("ESCONDIENDO")
        modal.classList.add('hidden');
        modal.setAttribute("aria-hidden", "true");
      }, 300)
    };
  })
});

experience.forEach((exp) => {
  const modal = document.getElementById(`experience-modal-${exp}`);
  modal.addEventListener('click', (event) => {
    if(event.target === modal) {
      document.body.focus();
      modal.classList.remove("opacity-100");
      modal.classList.add('opacity-0');
      modal.children[0].classList.add("scale-95", "opacity-0");
      modal.children[0].classList.remove("scale-100", "opacity-100");
      setTimeout(() => {
        console.log("ESCONDIENDO")
        modal.classList.add('hidden');
        modal.setAttribute("aria-hidden", "true");
      }, 300)
    };
  })
});