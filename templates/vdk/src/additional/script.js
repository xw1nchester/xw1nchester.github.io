document.addEventListener('DOMContentLoaded', e => {
    const sandwichMenu = document.querySelector('.sandwichMenu');

    document.addEventListener('click', function (e) {
        const targetEl = e.target;

        if (targetEl.closest('.sandwich ')) {
            sandwichMenu.classList.add('opened');
            document.body.classList.add('lock');
        }

        if (targetEl.closest('.close ')) {
            sandwichMenu.classList.remove('opened');
            document.body.classList.remove('lock');
        }
    });

    new Swiper('.mainSwiper', {
        pagination: {
            el: '.mainSwiper__pagination',
            clickable: true
        },
        effect: 'coverflow',
        initialSlide: 1
    });

    new Swiper('.tournamentSwiper', {
        effect: 'coverflow',
        initialSlide: 1
    });

    new Swiper('.liveBetsSwiper', {
        slidesPerView: 'auto',
        freeMode: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    document.querySelectorAll('.gameSwiper').forEach(s => {
        const arrows = s.closest('.gameList').querySelector('.arrows');
        new Swiper(s, {
            navigation: {
                nextEl: arrows.querySelector('.right'),
                prevEl: arrows.querySelector('.left')
            },

            slidesPerView: 'auto',
            spaceBetween: 20,

            breakpoints: {
                767: {}
            }
        });
    });

    new Swiper('.categories', {
        navigation: {
            nextEl: document.querySelector('.categories__right'),
            prevEl: document.querySelector('.categories__left')
        },
        slidesPerView: 'auto'
    });
});
