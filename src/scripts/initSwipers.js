import Swiper from 'swiper';
import { Pagination, EffectCreative, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

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