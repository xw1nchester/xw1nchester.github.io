// проверка на мобильное устройство
// let isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function () {
//         return (isMobile.Android() ||
//             isMobile.BlackBerry() ||
//             isMobile.iOS() ||
//             isMobile.Opera() ||
//             isMobile.Windows());
//     }
// };

// для попапов
// let wrapper = document.querySelector('.wrapper');
// перед body.lock
// let scrollWidth = window.innerWidth - wrapper.offsetWidth;
// setPadding(scrollWidth);

// function setPadding(padding) {
//     wrapper.style.paddingRight = padding + 'px';
// }

// инициализация
document.addEventListener('DOMContentLoaded', function (e) {
    if (dropdowns) {
        dropdowns.forEach(dropdown => {
            const parent = dropdown.closest('.filter');
            const top = parent.getBoundingClientRect().top;
            dropdown.style.top = top + "px";
        })
    }
})

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 998 && burgerBtn && menuPopup) {
        burgerBtn.classList.remove('active');
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }
});

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        e.preventDefault();
        burgerBtn.classList.toggle('active');
        menuPopup.classList.toggle('active');
        body.classList.toggle('lock');
    }

    if (targetEl.closest('.main__up-btn')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (!targetEl.closest('.dropdown')
        && !targetEl.closest('.filter__btn')) {
        const activeFilter = document.querySelector('.filter.active');

        if (activeFilter) {
            activeFilter.classList.remove('active');
        }
    }

    if (targetEl.closest('.filter__btn')) {
        const filter = targetEl.closest('.filter');
        const activeFilter = document.querySelector('.filter.active');

        if (activeFilter && activeFilter != filter) {
            activeFilter.classList.remove('active');
        }

        filter.classList.toggle('active');
    }

    if (targetEl.closest('.review__open')) {
        let reviewToggleButton = document.querySelector(".review__open");
        let reviewContent = document.querySelector(".profile__review");

        e.preventDefault();

        reviewToggleButton.classList.toggle("active");
        reviewContent.classList.toggle("active");
    }

    if (targetEl.closest('.comment__open')) {
        let commentToggleButton = document.querySelector(".comment__open");
        let reviewContent = document.querySelector(".profile__comment");

        e.preventDefault();

        commentToggleButton.classList.toggle("active");
        reviewContent.classList.toggle("active");
    }

    if (targetEl.closest('.open-city-popup')) {
        cityPopup.classList.toggle('active');

        if (window.innerWidth > 998) {
            body.classList.add('lock');
        }
    }

    if (!targetEl.closest('.city-popup__inner')
        && !targetEl.closest('.open-city-popup')
        || targetEl.closest('.city-popup__close-btn')) {
        cityPopup.classList.remove('active');
        if (window.innerWidth > 998) {
            body.classList.remove('lock');
        }
    }

    if(targetEl.closest('.profile__map--btn')) {
        const parent = document.querySelector('.profile__map');
        if(parent) {
            parent.classList.add('active');
        }
    }
});

// бургер меню
let burgerBtn = document.querySelector('.burger-btn');
let menuPopup = document.querySelector('.sidebar');
let body = document.body;

const dropdowns = document.querySelectorAll('.dropdown');
const cityPopup = document.querySelector('.city-popup');

$(".profile__main--slider").slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.profile__slider--small'
});

$(".profile__slider--small").slick({
    slidesToShow: 4,
    dots: true,
    arrows: false,
    asNavFor: '.profile__main--slider',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});

const allSwipers = document.querySelectorAll('.card__slider');

allSwipers.forEach(swiper => {
    const card = swiper.closest('.card');
    const swiperPagination = card.querySelector('.card__pagination');

    new Swiper(swiper, {
        pagination: {
            el: swiperPagination,
            clickable: true,
            dynamicBullets: true
        },
    });
});
