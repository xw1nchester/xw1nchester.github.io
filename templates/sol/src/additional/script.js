document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const sidebar = document.querySelector('.quick-bar');
    const burgerBtn = document.querySelector('.btn-burger');

    document.addEventListener('click', function (e) {
        const targetEl = e.target;

        if (targetEl.closest('.btn-burger')) {
            sidebar.classList.toggle('active');
            burgerBtn.classList.toggle('btn--back')
            body.classList.toggle('lock');
        }
    });

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
        autoplay: true,
        speed: 800,
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

            slidesPerView: 2.5,
            spaceBetween: 12,

            breakpoints: {
                768: {
                    slidesPerView: 3.625
                },
                1280: {
                    slidesPerView: 4.75
                }
            }
        });
    });

    new Swiper('.provider-slider', {
        navigation: {
            nextEl: '.slider__navigation-providerList-next',
            prevEl: '.slider__navigation-providerList-prev'
        },

        slidesPerView: 4.5,
        spaceBetween: 8,

        breakpoints: {
            768: {
                slidesPerView: 6.5
            },
            1280: {
                slidesPerView: 8.5
            }
        }
    });
});
