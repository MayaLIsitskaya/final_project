import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
    // effect: "coverflow",
    // grabCursor: true,
    // centeredSlides: true,
    // coverflowEffect: {
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 300,
    //     slideShadows: false,
    // },
    scrollbar: {
        el: '.swiper-scrollbar-custom',
    },
});

export default swiper;