import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 7000,
    },
    navigation: {
        nextEl: '.swiper-button__next',
        prevEl: '.swiper-button__prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets',
    },
    scrollbar: {
        el: '.swiper-scrollbar-custom',
        dragClass: 'drag-class',
    }
});

export default swiper;
