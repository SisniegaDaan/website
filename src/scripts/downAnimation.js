const projects = [1, 2, 3];
const experience = [1, 2, 3];

projects.forEach(project => {
    const modalBody = document.getElementById(`modal-portfolio-body-${project}`);
    const scrollIndicator = document.getElementById(`scroll-portfolio-indicator-${project}`);

    console.log(modalBody);
    console.log(scrollIndicator);

    modalBody.addEventListener('scroll', function() {
        const isBottom = modalBody.scrollTop + modalBody.clientHeight >= modalBody.scrollHeight

        if(isBottom){
            scrollIndicator.classList.add("opacity-0", "transition-opacity", "duration-500");
        } else {
            scrollIndicator.classList.remove("opacity-0")
        }
    })
})

experience.forEach(experience => {

    const modalBody = document.getElementById(`modal-experience-body-${experience}`);
    const scrollIndicator = document.getElementById(`scroll-experience-indicator-${experience}`);

    console.log(modalBody);
    console.log(scrollIndicator);

    modalBody.addEventListener('scroll', function() {
        const isBottom = modalBody.scrollTop + modalBody.clientHeight >= modalBody.scrollHeight

        if(isBottom){
            scrollIndicator.classList.add("opacity-0", "transition-opacity", "duration-500");
        } else {
            scrollIndicator.classList.remove("opacity-0")
        }
    })
})

