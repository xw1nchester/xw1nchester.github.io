document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.main-slider__inner', {
        navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev'
        },
        pagination: {
            el: '.main-slider__pagination',
            type: 'fraction'
        },

        speed: 800,
        slidesPerView: 1.75,
        loop: true,
        centeredSlides: true,
        autoplay: true,
        simulateTouch: false,

        // TODO: свайп при проведении

        // breakpoints: {
        //     768: {}
        // }
    });
});
