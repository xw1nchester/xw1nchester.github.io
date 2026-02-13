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

        if(targetEl.closest('.multipl-list')) {
            console.log(1);
            const dropdown = targetEl.closest('li').querySelector('.double-ul-menu');
            dropdown.classList.toggle('opened');
        }
    });

    document.querySelectorAll('.sidebar-swiper').forEach(el => {
        console.log({
                nextEl: el.closest('.promotions-sidebar').querySelector('.sidebar-swiper__btn_next'),
                prevEl: el.closest('.promotions-sidebar').querySelector('.sidebar-swiper__btn_prev')
            });
        new Swiper(el, {
            navigation: {
                nextEl: el.closest('.promotions-sidebar').querySelector('.sidebar-swiper__btn_next'),
                prevEl: el.closest('.promotions-sidebar').querySelector('.sidebar-swiper__btn_prev')
            },

            slidesPerView: 1,
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

            slidesPerView: 1
        });
    });
});
