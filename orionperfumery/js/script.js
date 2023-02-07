// проверка на мобильное устройство
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 767) {
        burgerBtn.classList.remove('active');
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }

    if (window.innerWidth > 576) {
        initImageHeight();
    }
});

// бургер меню
let burgerBtn = document.querySelector('.burger-btn');
let menuPopup = document.querySelector('.menu-popup');
let body = document.body;

burgerBtn.addEventListener('click', function (e) {
    e.preventDefault();

    burgerBtn.classList.toggle('active');
    menuPopup.classList.toggle('active');
    body.classList.toggle('lock');
})

// картинка в блоке about-us
let image = document.querySelector('.about-us__image');
let aboutUs = document.querySelector('.about-us');
let aboutUsInner = document.querySelector('.about-us__inner');
let aboutUsTitle = document.querySelector('.about-us__title');
let aboutUsColumn = document.querySelector('.about-us__column');

function initImageHeight() {
    let step = 0.06;
    let coeff = 130;

    if (window.innerWidth < 1440) {
        coeff -= Math.abs(1440 - window.innerWidth) * step;
    }

    let height = aboutUs.clientHeight;
    height -= window.getComputedStyle(aboutUs).paddingTop.replace('px', '');
    height -= window.getComputedStyle(aboutUsInner).gap.replace('px', '');
    height -= aboutUsTitle.clientHeight;
    height -= aboutUsColumn.clientHeight;
    height += coeff;
    image.style.height = height + 'px';
}

document.addEventListener('onload', initImageHeight());
document.addEventListener('DOMNodeInserted', initImageHeight());
document.addEventListener('DOMNodeRemoved', initImageHeight());