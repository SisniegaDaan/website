import Swiper from "swiper";
import { Pagination, EffectCreative, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// Obtener el sitio donde colocaremos las imágenes

// Instanciar el swiper
var swiperGallery = new Swiper(".myGallerySwiper", {
    grabCursor: true,
    effect: "creative",
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    modules: [Pagination, Autoplay, EffectCreative],
  });

// Obtener las imagenes de alta resolución
// Obtener el ID de la imagen activa
const setGallery = (images, activeId) => {

    // Limpiar la galería pasada

    console.log("ACTIVANDO IMAGENES");
    const galleryWrapper = document.querySelector(".gallery-wrapper");
    galleryWrapper.innerHTML = "";

    setTimeout(() => {
        console.log("1 Segundo esperado")
      }, 1000);

    images.forEach(element => {
        const slide = document.createElement('div');
        slide.classList.add("swiper-slide");
        slide.classList.add("h-full");
        slide.classList.add("w-full");
        slide.classList.add("rounded-md");

        const img = document.createElement('img');
        img.src = element;

        slide.appendChild(img);
        galleryWrapper.appendChild(slide);
    });

    swiperGallery.update();
    swiperGallery.slideTo(activeId);
}

// Imagenes de los sliders principales
const mainImages = document.querySelectorAll(".main-image");

mainImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        let projectImages = Array.from(mainImages).filter((img) => img.parentElement.parentElement.id === image.parentElement.parentElement.id)
        let imageUrls = projectImages.map((img) => img.getAttribute('data-src'));
        let currentIndex = projectImages.findIndex((img) => img.getAttribute('data-src') === image.getAttribute('data-src'))
        console.log(currentIndex)
        setGallery(imageUrls, currentIndex + 1);
    })
})
