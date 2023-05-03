let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function () {
  body.classList.toggle('open');
});

// import './sass/index.scss';
// // import Swiper JS
// import Swiper from 'swiper';

// // core version + navigation, pagination modules:
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// // configure Swiper to use modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

// const swiper = new Swiper('.swiper-container', {
//     loop: true,
//         spaceBetween: 30,
//         centeredSlides: true,
//         autoplay: {
//             delay: 5000,
//             disableOnInteraction: true,
//         },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         bulletActiveClass: 'customer-reviews__dots--active',
//         bulletClass: 'customer-reviews__dots',
//         modifierClass: 'customer-reviews__pagination'
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     });
