const burgerBtn = document.querySelector('.burger-btn');
const body = document.body;
const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const blur = document.querySelector('.blur');

document.addEventListener('click', function (e) {
    const targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        body.classList.add('lock');
        blur.classList.add('active');
        sidebar.classList.add('active');
    }

    if (
        sidebar.classList.contains('active') &&
        !targetEl.closest('.sidebar') &&
        !targetEl.closest('.burger-btn')
    ) {
        e.preventDefault();
        
        body.classList.remove('lock');
        blur.classList.remove('active');
        sidebar.classList.remove('active');
    }

    if (targetEl.closest('.sidebar__btn')) {
        const parent = targetEl.closest('.sidebar-dropdown');
        document.querySelectorAll('.sidebar-dropdown').forEach(d => {
            if (d != parent) d.classList.remove('active');
        });
        parent.classList.toggle('active');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
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

new Swiper('.welcome-swiper', {
    navigation: {
        nextEl: '.welcome-swiper__btn_next',
        prevEl: '.welcome-swiper__btn_prev'
    },
    slidesPerView: 'auto',
    spaceBetween: 12,
    freeMode: true,
    breakpoints: {
        922: {
            slidesPerGroup: 8,
            freeMode: false
        }
    }
});

const sectionSwiperBaseCfg = {
    navigation: {
        nextEl: '.section-swiper__btn_next',
        prevEl: '.section-swiper__btn_prev'
    },
    spaceBetween: 12,
    freeMode: true,
    slidesPerView: 'auto',
    breakpoints: {
        992: {
            slidesPerGroup: 8,
            freeMode: false,
            slidesPerView: 7.75
        }
    }
};

new Swiper('.section-swiper', sectionSwiperBaseCfg);

new Swiper('.popular-swiper', {
    ...sectionSwiperBaseCfg,
    grid: {
        fill: 'row', // или 'column',
        rows: 2
    }
});

new Swiper('.tournament-swiper', {
    // navigation: {
    //     nextEl: '.section-swiper__btn_next',
    //     prevEl: '.section-swiper__btn_prev'
    // },
    slidesPerView: 5.25,
    spaceBetween: 4,
    loop: true,
    autoplay: {
        delay: 2000, // 3 секунды между слайдами
        disableOnInteraction: false, // не останавливать после свайпа
        pauseOnMouseEnter: true
    }
});
