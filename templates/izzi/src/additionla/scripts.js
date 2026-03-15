document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.quick-bar');
    const body = document.body;

    document.addEventListener('click', function (e) {
        const targetEl = e.target;

        if (targetEl.closest('.burger') || targetEl.closest('.mobile-menu__btn_burger')) {
            sidebar.classList.add('active');
            body.classList.add('lock');
        }

        if (
            (targetEl.closest('.quick-bar') &&
                !targetEl.closest('.quick-bar__box') &&
                sidebar.classList.contains('active')) ||
            targetEl.closest('.quick-bar__close')
        ) {
            sidebar.classList.remove('active');
            body.classList.remove('lock');
        }
    });

    new Swiper('.main-slider', {
        navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev'
        },

        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        speed: 750,
        autoplay: true,

        breakpoints: {
            576: {
                slidesPerView: 1.35,
                speed: 1500
            }
        }
    });

    new Swiper('.promotions-slider', {
        navigation: {
            nextEl: '.promotions-slider__next',
            prevEl: '.promotions-slider__prev'
        },

        slidesPerView: 1.1,
        spaceBetween: 16,
        loop: true,

        breakpoints: {
            768: {
                slidesPerView: 1.25
            }
        }
    });

    new Swiper('.provider-slider', {
        navigation: {
            nextEl: '.provider-list__btn--next',
            prevEl: '.provider-list__btn--prev'
        },

        slidesPerView: 2.25,
        spaceBetween: 8,
        freeMode: true,

        grid: {
            rows: 2,
            fill: 'row'
        },

        breakpoints: {
            576: {
                slidesPerView: 3.25,
                grid: {
                    rows: 1
                },
                freeMode: false
            },
            768: {
                slidesPerView: 5.25
            },
            992: {
                slidesPerView: 7.25
            },
            1200: {
                slidesPerView: 9.25
            }
        }
    });
});
