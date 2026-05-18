import Swiper from 'swiper';
import { Pagination, EffectCreative, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const projectIds = [1, 2, 3];

document.addEventListener('astro:page-load', () => {
  if (document.querySelector(".mySwiper1")) {
    var swiper = new Swiper(".mySwiper1", {
      grabCursor: true,
      effect: "creative",
      pagination: {
        el: '.swiper-pagination',
        clickable: false
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
  }

  if (document.querySelector(".mySwiper2")) {
    var swiper2 = new Swiper(".mySwiper2", {
      grabCursor: true,
      effect: "creative",
      pagination: {
        el: '.swiper-pagination',
        clickable: false
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
  }

  if (document.querySelector(".mySwiper3")) {
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
  }

  var gallerySwiper1, gallerySwiper2, gallerySwiper3;

  if (document.querySelector(".myGallerySwiper1")) {
    gallerySwiper1 = new Swiper(".myGallerySwiper1", {
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
  }

  if (document.querySelector(".myGallerySwiper2")) {
    gallerySwiper2 = new Swiper(".myGallerySwiper2", {
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
  }

  if (document.querySelector(".myGallerySwiper3")) {
    gallerySwiper3 = new Swiper(".myGallerySwiper3", {
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
  }

  const buttonProject1 = document.getElementById("trigger-porfolio-1");
  if (buttonProject1 && gallerySwiper1) {
    buttonProject1.addEventListener('click', () => {
        setTimeout(() => {
          gallerySwiper1.update();
          gallerySwiper1.slideTo(0);
        }, "250")
      });
  }

  const buttonProject2 = document.getElementById("trigger-porfolio-2");
  if (buttonProject2 && gallerySwiper2) {
    buttonProject2.addEventListener('click', () => {
        setTimeout(() => {
          gallerySwiper2.update();
          gallerySwiper2.slideTo(0);
        }, "250")
      });
  }

  const buttonProject3 = document.getElementById("trigger-porfolio-3");
  if (buttonProject3 && gallerySwiper3) {
    buttonProject3.addEventListener('click', () => {
        setTimeout(() => {
          gallerySwiper3.update();
          gallerySwiper3.slideTo(0);
        }, "250")
      });
  }
});

/* const project1Images = document.querySelectorAll("button-project-3");
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
}) */
