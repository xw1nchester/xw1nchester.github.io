document.addEventListener('DOMContentLoaded', () => {
    const mainSlider = document.querySelector('.main-slider');

    new Swiper('.main-slider', {
        navigation: {
            nextEl: '.wlc-swiper-button-next',
            prevEl: '.wlc-swiper-button-prev'
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
        freeMode: true,
    });

    new Swiper('.winners-slider', {
        slidesPerView: 'auto',

        breakpoints: {
            768: {}
        }
    });

    const body = document.body;
    const sidebar = document.querySelector('.sidebar');

    document.addEventListener('click', function (e) {
        const targetEl = e.target;

        if (targetEl.closest('.burger-btn')) {
            body.classList.add('lock');
            sidebar.classList.add('wlc-float-panels--open');
        }

        if (
            (targetEl.closest('.sidebar') &&
                !targetEl.closest('.wlc-burger-panel')) ||
            targetEl.closest('.wlc-burger-panel__close')
        ) {
            body.classList.remove('lock');
            sidebar.classList.remove('wlc-float-panels--open');
        }
    });
});
