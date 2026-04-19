document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.main-slider', {
        navigation: {
            nextEl: '.wlc-swiper-button-next-0bf054618b6a6a8',
            prevEl: '.wlc-swiper-button-prev-0bf054618b6a6a8'
        },
        // pagination: {
        //     el: '.selector',
        //     clickable: true,
        // },

        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000
        },

        breakpoints: {
            768: {}
        }
    });

    new Swiper('.categories-slider', {
        navigation: {
            nextEl: '.wlc-category-menu__control--next',
            prevEl: '.wlc-category-menu__control--prev'
        },

        slidesPerView: 'auto',
        freeMode: true
    });

    new Swiper('.random-slider', {
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0
        },
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 5,
        spaceBetween: -100
    });

    new Swiper('.jackpot-slider', {
        navigation: {
            nextEl: '.wlc-swiper-button-next-90cd47',
            prevEl: '.wlc-swiper-button-prev-90cd47'
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

    new Swiper('.providers-slider', {
        navigation: {
            nextEl: '.providers-slider__next',
            prevEl: '.providers-slider__prev'
        },

        slidesPerView: 2.25,
        spaceBetween: 15,
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
                slidesPerView: 7
            }
        }
    });

    const sidebarWrapper = document.querySelector('.sidebar-wrapper');
    const body = document.body;

    document.addEventListener('click', function (e) {
        const targetEl = e.target;

        if (targetEl.closest('.burger-btn')) {
            sidebarWrapper.classList.add('active');
            sidebarWrapper.classList.add('wlc-float-panels--open');
            body.classList.add('lock');
        }

        if (
            targetEl.closest('.sidebar-wrapper') &&
            !targetEl.closest('.sidebar') &&
            sidebarWrapper.classList.contains('active') ||
            targetEl.closest('.sidebar-close')
        ) {
            sidebarWrapper.classList.remove('active');
            sidebarWrapper.classList.remove('wlc-float-panels--open');
            body.classList.remove('lock');
        }
    });
});
