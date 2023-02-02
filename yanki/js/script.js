$(document).ready(function () {
    $('.footer__label').click(function (e) {
        if ($(window).width() < 441) {
            $(this).toggleClass('active');
            $(this).next().slideToggle(100);

            e.preventDefault();
        }
    });
});

$(window).resize(function () {
    if ($(window).width() > 992) {
        burgerBtn.classList.remove('active');
        document.querySelector('.menu-popup').classList.remove('active');
        header.classList.remove('active');
        document.body.classList.remove('lock');
    } else {
        header.classList.remove('opt');
        headerMenu.classList.remove('opt');
        document.querySelector('.header__logo').classList.remove('hide');
        document.querySelector('.header__langs').classList.remove('hide');
        document.querySelector('.header__btns').classList.remove('hide');
    }
});

let headerMenu = document.querySelector('.header__menu');
let burgerBtn = document.querySelector('.burger-btn');
let header = document.querySelector('.header');

burgerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    burgerBtn.classList.toggle('active');
    if (window.innerWidth > 992) {
        header.classList.toggle('opt');
        headerMenu.classList.toggle('opt');
        document.querySelector('.header__logo').classList.toggle('hide');
        document.querySelector('.header__langs').classList.toggle('hide');
        document.querySelector('.header__btns').classList.toggle('hide');
    } else {
        document.querySelector('.menu-popup').classList.toggle('active');
        header.classList.toggle('active');
        document.body.classList.toggle('lock');
    }
});

let headerMenuClone = document.querySelector('.header__menu').cloneNode(1);
let searchBtn = document.querySelector('.header__btn:nth-child(1)').cloneNode(1);
let currency = document.querySelector('.header__lang:nth-child(2)').cloneNode(1);
document.querySelector('.menu-popup__input').appendChild(searchBtn);
document.querySelector('.menu-popup__row').appendChild(currency);
document.querySelector('.menu-popup__inner').appendChild(headerMenuClone);
let menuItem = document.createElement('li');
let menuLink = document.createElement('a');
menuLink.href = "#";
let itemText = document.createTextNode('ЛИЧНЫЙ КАБИНЕТ');
menuLink.appendChild(itemText);
menuItem.appendChild(menuLink);
document.querySelector('.menu-popup .header__menu ul').prepend(menuItem);
let profile = document.querySelector('.header__btn:nth-child(2)').cloneNode(1);
document.querySelector('.menu-popup .header__menu ul li:first-child a').appendChild(profile);
let contacts = document.querySelector('.footer__column:last-child .footer__drop').cloneNode(1);
document.querySelector('.menu-popup__inner').appendChild(contacts);

new Swiper('.main-screen__slider', {
    slidesPerView: 1,
    autoplay: true,
    loop: true,
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.categories__slider', {
    slidesPerView: 2,
    spaceBetween: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    }
});

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

let headerDropBtns = document.querySelectorAll('.header__lang a');

headerDropBtns.forEach(b => {
    b.addEventListener('click', function (e) {
        e.preventDefault();
        if (isMobile.any()) {
            let parent = e.target.closest('.header__lang');
            parent.classList.toggle('active');
        }
    });
});

document.addEventListener('click', function(e) {
    if(!e.target.closest('.header__lang a')) {
        let subLists = document.querySelectorAll('.header__lang');
        subLists.forEach(l => l.classList.remove('active'));
    }
});