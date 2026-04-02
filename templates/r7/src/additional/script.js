document.addEventListener('DOMContentLoaded', () => {
    const mainSliders = document.querySelectorAll('.main-slider');
    const basicSliders = document.querySelectorAll('.basic-slider');

    mainSliders.forEach(
        s =>
            new Swiper(s, {
                // pagination: {
                //     el: s.querySelector('.slider__pagination'),
                //     clickable: true
                // },
                navigation: {
                    nextEl: s
                        .closest('.main-slider-wrapper')
                        .querySelector('.wlc-swiper-button-next'),
                    prevEl: s
                        .closest('.main-slider-wrapper')
                        .querySelector('.wlc-swiper-button-prev')
                },

                slidesPerView: 1,
                spaceBetween: 12,

                breakpoints: {
                    768: {}
                }
            })
    );

    basicSliders.forEach(s => 
        new Swiper(s, {
            navigation: {
                nextEl: s
                    .closest('.basic-slider-wrapper')
                    .querySelector('.wlc-swiper-button-next'),
                prevEl: s
                    .closest('.basic-slider-wrapper')
                    .querySelector('.wlc-swiper-button-prev')
            },

            slidesPerView: 2.25,
            spaceBetween: 12,
            grid: {
                fill: 'row',
                rows: 2
            },

            breakpoints: {
                576: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 4
                },
                992: {
                    slidesPerView: 5
                },
                1200: {
                    slidesPerView: 6
                }
            }
        })
    );

    new Swiper('.providers-slider', {
        slidesPerView: 2.25,
        spaceBetween: 15,

        breakpoints: {
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 7
            }
        }
    });

    new Swiper('.streamers-slider', {
        navigation: {
                nextEl: document.querySelector('.streamers-slider-next'),
                prevEl: document.querySelector('.streamers-slider-prev')
            },
            
        slidesPerView: 3,
        spaceBetween: 15,

        breakpoints: {
            576: {
            },
        }
    });

    new Swiper('.jackpot-slider', {
        navigation: {
            nextEl: document.querySelector('.jackpot-next'),
            prevEl: document.querySelector('.jackpot-prev')
        },

        slidesPerView: 4,
        spaceBetween: 20,

        breakpoints: {
            576: {
            },
        }
    });
});
