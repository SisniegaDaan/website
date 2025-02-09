import Swiper from 'swiper';
import { Pagination, EffectCreative, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const projectIds = [1, 2, 3];

var swiper = new Swiper(".mySwiper1", {
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
  initialSlide: 1,
  modules: [Pagination, Autoplay, EffectCreative],
});

var swiper2 = new Swiper(".mySwiper2", {
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
  modules: [Pagination, Autoplay, EffectCreative]
});

var swiper3 = new Swiper(".mySwiper3", {
  grabCursor: true,
  effect: "creative",
  pagination: {
    el: '.swiper-pagination',
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
  modules: [Pagination, Autoplay, EffectCreative]
});

var gallerySwiper1 = new Swiper(".myGallerySwiper1", {
  grabCursor: true,
  effect: "creative",
  pagination: {
    el: '.swiper-pagination',
    clickable: true
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
  initialSlide: 1,
  modules: [Pagination, Autoplay, EffectCreative],
});

var gallerySwiper2 = new Swiper(".myGallerySwiper2", {
  grabCursor: true,
  effect: "creative",
  pagination: {
    el: '.swiper-pagination',
    clickable: true
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
  modules: [Pagination, Autoplay, EffectCreative]
});

var gallerySwiper3 = new Swiper(".myGallerySwiper3", {
  grabCursor: true,
  effect: "creative",
  pagination: {
    el: '.swiper-pagination',
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
  modules: [Pagination, Autoplay, EffectCreative]
});

// Actualizando los swipers de galerías
const mySwiper1 = document.querySelector(".mySwiper1");
mySwiper1.addEventListener('click', function(){
  setTimeout(() => {
    gallerySwiper1.update();
  }, "300");
})

const project1Images = document.querySelectorAll(".img-project-1");
project1Images.forEach((image) => {
  image.addEventListener('click', () => {
    setTimeout(() => {
      gallerySwiper1.update();
      gallerySwiper1.slideTo((+image.getAttribute("id").split("-")[1]) - 1);
    }, "100")
  })
})

const project2Images = document.querySelectorAll(".img-project-2");
project2Images.forEach((image) => {
  image.addEventListener('click', () => {
    setTimeout(() => {
      gallerySwiper2.update();
      gallerySwiper2.slideTo((+image.getAttribute("id").split("-")[1]) - 1);
    }, "100")
  })
})

const project3Images = document.querySelectorAll(".img-project-3");
project3Images.forEach((image) => {
  image.addEventListener('click', () => {
    setTimeout(() => {
      gallerySwiper3.update();
      gallerySwiper3.slideTo((+image.getAttribute("id").split("-")[1]) - 1);
    }, "100")
  })
})
