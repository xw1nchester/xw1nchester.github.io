document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.main-slider', {
        navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev'
        },
        pagination: {
            el: '.main-slider__pagination',
            clickable: true
        },
        loop: true,
        effect: 'fade'
    });

    const popularSliders = document.querySelectorAll('.game-slider');

    popularSliders.forEach(s => {
        new Swiper(s, {
            navigation: {
                nextEl: s
                    .closest('.games-slider-wrap')
                    .querySelector('.swiper-button-next'),
                prevEl: s
                    .closest('.games-slider-wrap')
                    .querySelector('.swiper-button-prev')
            },

            slidesPerView: 4.75,
            spaceBetween: 12,

            breakpoints: {
                768: {}
            }
        });
    });

    new Swiper('.provider-slider', {
        navigation: {
            nextEl: document
                .querySelector('.provider-slider')
                .querySelector('.swiper-button-next'),
            prevEl: document
                .querySelector('.provider-slider')
                .querySelector('.swiper-button-prev')
        },

        slidesPerView: 8.5,
        spaceBetween: 8,

        breakpoints: {
            768: {}
        }
    });
});
