document.addEventListener('DOMContentLoaded', () => {
    const mainSliders = document.querySelectorAll('.main-slider');
    const basicSliders = document.querySelectorAll('.basic-slider');
    const loyalSlider = document.querySelector('.loyal-slider');
    const jackpotSlider = document.querySelector('.jackpot-slider');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    new Swiper('.banner-slider', {
        pagination: {
            el: '.banner-slider__pagination',
            clickable: true
        },

        slidesPerView: 'auto',
        spaceBetween: 10
    });

    mainSliders.forEach(
        s =>
            new Swiper(s, {
                pagination: {
                    el: s.querySelector('.slider__pagination'),
                    clickable: true
                },
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

    new Swiper(loyalSlider, {
        navigation: {
            nextEl: loyalSlider
                .closest('.loyal-slider-wrapper')
                .querySelector('.wlc-swiper-button-next'),
            prevEl: loyalSlider
                .closest('.loyal-slider-wrapper')
                .querySelector('.wlc-swiper-button-prev')
        },

        slidesPerView: 2,
        spaceBetween: 20,

        breakpoints: {
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }
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

        slidesPerView: 2.25,
        spaceBetween: 20,

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
    });

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

    document.addEventListener('click', function (e) {
        const targetEl = e.target;

        if (targetEl.closest('.burger-btn')) {
            sidebar.classList.add('active');
            body.classList.add('lock');
        }

        if (targetEl.closest('.sidebar__close')) {
            sidebar.classList.remove('active');
            body.classList.remove('lock');
        }
    });
});
