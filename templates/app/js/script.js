const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.header__nav-wrapper');
const body = document.body;
const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const categories = document.querySelector('.categories__list');
const gamesCategories = document.querySelector('.games-categories__list');

const scrollList = (el, px) => {
    el.scrollBy({ left: px, behavior: 'smooth' });

    setTimeout(() => {
        const scrollLeft = el.scrollLeft;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        const parent = el.parentElement;

        if (scrollLeft === 0) {
            parent.classList.add('start');
        } else if (scrollLeft >= maxScrollLeft) {
            parent.classList.add('end');
        } else {
            parent.classList.remove('start');
            parent.classList.remove('end');
        }
    }, 100);
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

    if (targetEl.closest('.footer-dropdown__btn')) {
        const parent = targetEl.closest('.footer-dropdown');
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
