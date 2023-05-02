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
    if (window.innerWidth > 768 && burgerBtn && menuPopup) {
        // burgerBtn.classList.remove('active');
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }
});

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        e.preventDefault();

        // burgerBtn.classList.toggle('active');
        menuPopup.classList.add('active');
        body.classList.add('lock');
    }

    if(targetEl.closest('.menu-popup__close-btn')) {
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }
});

// бургер меню
let burgerBtn = document.querySelector('.burger-btn');
let menuPopup = document.querySelector('.menu-popup');
let body = document.body;

new Swiper('.slider-block__slider', {
    navigation: {
        nextEl: '.slider-block__next',
        prevEl: '.slider-block__prev',
    },

    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
});

new Swiper('.trust__slider', {
    navigation: {
        nextEl: '.trust__next',
        prevEl: '.trust__prev',
    },

    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    }
});