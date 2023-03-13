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

document.addEventListener('DOMContentLoaded', updateAdvantagesTitle);

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    updateAdvantagesTitle();
});

function updateAdvantagesTitle() {
    advantagesTitle.innerHTML = window.innerWidth > 767? 'Рост удовлетворённости клиентов и увеличение продаж' : 'Кому будет полезно?';
}

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    // if (targetEl.closest('.burger-btn')) {
    //     e.preventDefault();

    //     burgerBtn.classList.toggle('active');
    //     menuPopup.classList.toggle('active');
    //     body.classList.toggle('lock');
    // }
});

// бургер меню
// let burgerBtn = document.querySelector('.burger-btn');
// let menuPopup = document.querySelector('.menu-popup');
// let body = document.body;

let advantagesTitle = document.querySelector('.advantages__title');
