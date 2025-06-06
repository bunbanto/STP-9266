import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

Swiper.use([Autoplay, Pagination, Navigation, Keyboard]);

const swiper = new Swiper('#story-swiper', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '[data-next="next"]',
    prevEl: '[data-prev="prev"]',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 104,
    },
  },
});
