const openPorfolioModal = (id) => {

    const modal = document.getElementById(`porfolio-modal-${id}`);
    modal.classList.remove("hidden");
    setTimeout(() => {modal.classList.add("opacity-100")}, 400);
}


/*document.addEventListener("DOMContentLoaded", () => {
    const porfolioModal = document.getElementById("modal");
    const openPorfolioModal = document.getElementById("openModal");
    const closePorfolioModal = document.getElementById("closeModal");

    closePorfolioModal.addEventListener("click", () => {
        porfolioModal.classList.remove("opacity-100");
      setTimeout(() => {
        porfolioModal.classList.add("hidden");
      }, 300);
    });

    // Cerrar modal si se da clic fuera del contenido
    
  });*/