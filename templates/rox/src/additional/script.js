document.addEventListener('DOMContentLoaded', e => {
    const burgerBtn = document.querySelector('.js-burger');

    document.addEventListener('click', function (e) {
        const targetEl = e.target;

        if (targetEl.closest('.js-burger')) {
            burgerBtn.classList.toggle('c-burger--active');
            document.body.classList.toggle('mobile-menu--opened');
            document.body.classList.toggle('lock');
        }

        if (
            !targetEl.closest('.js-burger') &&
            !targetEl.closest('.inner-mobile-menu-block') &&
            document.body.classList.contains('mobile-menu--opened')
        ) {
            burgerBtn.classList.remove('c-burger--active');
            document.body.classList.remove('mobile-menu--opened');
            document.body.classList.remove('lock');
        }

        if (targetEl.closest('.multipl-list')) {
            const dropdown = targetEl
                .closest('li')
                .querySelector('.double-ul-menu');
            dropdown.classList.toggle('opened');
        }
    });

    document.querySelectorAll('.sidebar-swiper').forEach(el => {
        new Swiper(el, {
            navigation: {
                nextEl: el
                    .closest('.promotions-sidebar')
                    .querySelector('.sidebar-swiper__btn_next'),
                prevEl: el
                    .closest('.promotions-sidebar')
                    .querySelector('.sidebar-swiper__btn_prev')
            },

            slidesPerView: 1,
            loopFillGroupWithBlank: true,
            allowTouchMove: false,
            loop: true
        });
    });

    document.querySelectorAll('.mob-swiper').forEach(el => {
        new Swiper(el, {
            navigation: {
                nextEl: el.querySelector('.mob-swiper__btn_next'),
                prevEl: el.querySelector('.mob-swiper__btn_prev')
            },

            slidesPerView: 1,
        });
    });

    const flipSlider = new Swiper('.flip-swiper', {
        navigation: {
            nextEl: '.flip-swiper__next',
            prevEl: '.flip-swiper__prev'
        },
        direction: 'vertical',
        effect: 'flip',
        speed: 750,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.main-slider-nav',
            clickable: true
        }
    });

    const infoSlider = new Swiper('.info-swiper', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        slidesPerView: 1,
        loop: true,
        allowTouchMove: false
    });

    flipSlider.controller.control = infoSlider;
    infoSlider.controller.control = flipSlider;
});
