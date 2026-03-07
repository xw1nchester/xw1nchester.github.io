document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.quick-bar');
    const body = document.body;

    document.addEventListener('click', function (e) {
        const targetEl = e.target;

        if (targetEl.closest('.burger-wrapper')) {
            sidebar.classList.add('active');
            body.classList.add('lock');
        }

        if (
            (targetEl.closest('.quick-bar') &&
                !targetEl.closest('.quick-bar__sidebar') &&
                sidebar.classList.contains('active')) ||
            targetEl.closest('.quick-bar__close')
        ) {
            sidebar.classList.remove('active');
            body.classList.remove('lock');
        }
    });

    const mainSlider = new Swiper('.main-slider__inner', {
        navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev'
        },
        pagination: {
            el: '.main-slider__pagination',
            type: 'fraction'
        },

        speed: 800,
        slidesPerView: 1,
        loop: true,
        allowTouchMove: false,
        simulateTouch: false,
        // autoplay: true,

        breakpoints: {
            576: {
                slidesPerView: 1.43,
                centeredSlides: true
            }
        }
    });

    let startX = 0;

    mainSlider.el.addEventListener('pointerdown', e => {
        console.log('pointerdown');
        if (e.button !== 0) return; // только ЛКМ
        startX = e.clientX;
    });

    mainSlider.el.addEventListener('pointerup', e => {
        console.log('pointerup');
        const diff = e.clientX - startX;

        if (diff > 50) mainSlider.slidePrev();
        if (diff < -50) mainSlider.slideNext();
    });

    new Swiper('.promotions-slider__slider', {
        navigation: {
            nextEl: '.promotions-slider__next',
            prevEl: '.promotions-slider__prev'
        },

        slidesPerView: 1.25,
        spaceBetween: 16,
        loop: true

        // breakpoints: {
        //     768: {}
        // }
    });

    new Swiper('.providers-list-slider', {
        navigation: {
            nextEl: '.providers-list-slider__next',
            prevEl: '.providers-list-slider__prev'
        },

        slidesPerView: 2.25,
        spaceBetween: 8,

        grid: {
            rows: 2,
            fill: 'row'
        },

        breakpoints: {
            576: {
                slidesPerView: 3.25,
                grid: {
                    rows: 1
                }
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
