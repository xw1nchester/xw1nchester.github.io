document.addEventListener('DOMContentLoaded', () => {
    const mainSliders = document.querySelectorAll('.main-slider');
    const basicSliders = document.querySelectorAll('.basic-slider');
    const loyalSlider = document.querySelector('.loyal-slider');
    const jackpotSlider = document.querySelector('.jackpot-slider');

    mainSliders.forEach(
        s =>
            new Swiper(s, {
                navigation: {
                    nextEl: s
                        .closest('.main-slider-wrapper')
                        .querySelector('.wlc-swiper-button-next'),
                    prevEl: s
                        .closest('.main-slider-wrapper')
                        .querySelector('.wlc-swiper-button-prev')
                },

                slidesPerView: 1,

                breakpoints: {
                    768: {}
                }
            })
    );

    basicSliders.forEach(
        s =>
            new Swiper(s, {
                navigation: {
                    nextEl: s
                        .closest('.basic-slider-wrapper')
                        .querySelector('.wlc-swiper-button-next'),
                    prevEl: s
                        .closest('.basic-slider-wrapper')
                        .querySelector('.wlc-swiper-button-prev')
                },

                slidesPerView: 6,
                spaceBetween: 12,
                grid: {
                    fill: 'row',
                    rows: 2
                },

                breakpoints: {
                    768: {}
                }
            })
    );

    new Swiper(loyalSlider, {
        navigation: {
            nextEl: loyalSlider
                .closest('.loyal-slider-wrapper')
                .querySelector('.wlc-swiper-button-next'),
            prevEl: loyalSlider
                .closest('.loyal-slider-wrapper')
                .querySelector('.wlc-swiper-button-prev')
        },

        slidesPerView: 5,
        spaceBetween: 20,

        breakpoints: {
            768: {}
        }
    });

    new Swiper(jackpotSlider, {
        navigation: {
            nextEl: jackpotSlider
                .closest('.jackpot-slider-wrapper')
                .querySelector('.wlc-swiper-button-next'),
            prevEl: jackpotSlider
                .closest('.jackpot-slider-wrapper')
                .querySelector('.wlc-swiper-button-prev')
        },

        slidesPerView: 5,
        spaceBetween: 20,

        breakpoints: {
            768: {}
        }
    });

    new Swiper('.providers-slider', {
        slidesPerView: 7,
        spaceBetween: 15,

        breakpoints: {
            768: {}
        }
    });
});
