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

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 992 && burgerBtn && menuPopup) {
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }
});

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        e.preventDefault();

        menuPopup.classList.toggle('active');
        body.classList.toggle('lock');
    }

    if (targetEl.closest('.menu-popup__close-btn')) {
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }

    if (targetEl.closest('.search-btn') 
    && !targetEl.closest('.search-popup__search-btn')) {
        let input = targetEl.closest('.search-btn').nextElementSibling;
        let inputValue = input.value;
        searchPopup.classList.add("active");
        searchPopupInner.classList.add("active");
        body.classList.add('lock');
        searchPopupInput.value = inputValue;
    }

    if (targetEl.closest('.search-popup__close-btn')
        || targetEl.closest('.search-popup__back-btn')
        || targetEl.closest('.search-popup') && !targetEl.closest('.search-popup__inner')) {
        searchPopup.classList.remove("active");
        searchPopupInner.classList.remove("active");
        body.classList.remove('lock');

        if (targetEl.closest('.search-popup__close-btn')
            && window.innerWidth < 993) {
                menuPopup.classList.remove('active');
                body.classList.remove('lock');
        }
    }
});

// бургер меню
let burgerBtn = document.querySelector('.burger-btn');
let menuPopup = document.querySelector('.menu-popup');
let body = document.body;
let searchInput = document.querySelector('.input_search');
let searchPopup = document.querySelector('.search-popup');
let searchPopupInner = document.querySelector('.search-popup__inner');
let searchPopupInput = document.querySelector('.search-popup__input');

new Swiper('.main-block__swiper', {
    navigation: {
        nextEl: '.main-block__btn_next',
        prevEl: '.main-block__btn_prev',
    },
    pagination: {
        el: '.main-block__pagination',
        clickable: true,
    },

    slidesPerView: 1,
    loop: true,
    autoplay: true,

    breakpoints: {
        767: {

        },
    }
});