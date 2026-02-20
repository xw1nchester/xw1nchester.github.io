const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.header__nav-wrapper');
const body = document.body;
const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const categories = document.querySelector('.categories__list');
const gamesCategories = document.querySelector('.games-categories__list');
const gameCategories = document.querySelector('.game-category__categories');

const scrollList = (el, px) => {
    const current = el.scrollLeft;
    const max = el.scrollWidth - el.clientWidth;
    const target = current + px;
    const parent = el.parentElement;

    let finalTarget = target;

    if (target < 100) {
        finalTarget = 0;
    }

    if (max - target < 100) {
        finalTarget = max;
    }

    el.scrollTo({
        left: finalTarget,
        behavior: 'smooth'
    });

    if (finalTarget === 0) {
        parent.classList.add('start');
        parent.classList.remove('end');
    } else if (finalTarget === max) {
        parent.classList.add('end');
        parent.classList.remove('start');
    } else {
        parent.classList.remove('start');
        parent.classList.remove('end');
    }
};

document.addEventListener('click', function (e) {
    const targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        body.classList.add('lock');
        nav.classList.add('active');
    }

    if (
        nav.classList.contains('active') &&
        (targetEl.closest('.header__nav-close') ||
            !targetEl.closest('.header__nav')) &&
        targetEl.closest('.header__nav-wrapper')
    ) {
        body.classList.remove('lock');
        nav.classList.remove('active');
    }

    if (targetEl.closest('.categories__btn_prev')) {
        scrollList(categories, -200);
    }

    if (targetEl.closest('.categories__btn_next')) {
        scrollList(categories, 200);
    }

    if (targetEl.closest('.games-categories__btn_prev')) {
        scrollList(gamesCategories, -200);
    }

    if (targetEl.closest('.games-categories__btn_next')) {
        scrollList(gamesCategories, 200);
    }

    if (targetEl.closest('.game-category__btn_prev')) {
        scrollList(gameCategories, -200);
    }

    if (targetEl.closest('.game-category__btn_next')) {
        scrollList(gameCategories, 200);
    }

    if (targetEl.closest('.footer-dropdown__btn')) {
        const parent = targetEl.closest('.footer-dropdown');
        parent.classList.toggle('active');
    }

    if (targetEl.closest('.game-page__tab-btn')) {
        document
            .querySelectorAll('.game-page__tab-btn')
            .forEach(btn => btn.classList.remove('active'));
        document
            .querySelectorAll('.game-page__tab-content')
            .forEach(content => content.classList.remove('active'));
        const btn = targetEl.closest('.game-page__tab-btn');
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    }

    if (targetEl.closest('.game-page-faq__btn')) {
        const parent = targetEl.closest('.game-page-faq__item');
        parent.classList.toggle('active');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

new Swiper('.find-slider', {
    slidesPerView: 1.15,
    spaceBetween: 0,
    grid: {
        rows: 3,
        fill: 'row'
    },
    navigation: {
        nextEl: '.find-slider__btn_next',
        prevEl: '.find-slider__btn_prev'
    },
    breakpoints: {
        576: {
            slidesPerView: 1.5
        },
        768: {
            slidesPerView: 2.5
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 12
        }
    }
});

new Swiper('.games-slider', {
    slidesPerView: 1.25,
    spaceBetween: 12,
    navigation: {
        nextEl: '.games-slider__btn_next',
        prevEl: '.games-slider__btn_prev'
    },
    breakpoints: {
        576: {
            slidesPerView: 2.25,
            spaceBetween: 16
        },
        768: {
            slidesPerView: 3.25,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3.75,
            spaceBetween: 24
        }
    }
});

new Swiper('.blog-slider', {
    slidesPerView: 1.25,
    spaceBetween: 12,
    navigation: {
        nextEl: '.blog-slider__btn_next',
        prevEl: '.blog-slider__btn_prev'
    },
    breakpoints: {
        576: {
            slidesPerView: 1.75
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 16
        },
        992: {
            slidesPerView: 3
        }
    }
});

new Swiper('.game-slider', {
    slidesPerView: 1.1,
    spaceBetween: 12,
    navigation: {
        nextEl: '.game-slider__btn_next',
        prevEl: '.game-slider__btn_prev'
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 16
        }
    }
});

new Swiper('.review-slider', {
    slidesPerView: 1.1,
    spaceBetween: 12,
    navigation: {
        nextEl: '.review-slider__btn_next',
        prevEl: '.review-slider__btn_prev'
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 16
        }
    }
});

new Swiper('.similar-slider', {
    slidesPerView: 1.25,
    spaceBetween: 12,
    grid: {
        rows: 3,
        fill: 'row'
    },
    navigation: {
        nextEl: '.similar-slider__btn_next',
        prevEl: '.similar-slider__btn_prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
    }
});

// window.addEventListener('resize', function (e) {
//     if (window.innerWidth > 768) {
//         burgerBtn.classList.remove('active');
//         body.classList.remove('lock');
//     }
// });

// для попапов
// перед body.lock вставить:
// const scrollWidth = window.innerWidth - wrapper.offsetWidth;
// setPadding(scrollWidth);

// const setPadding = (padding) => {
//     wrapper.style.paddingRight = padding + 'px';
// }
