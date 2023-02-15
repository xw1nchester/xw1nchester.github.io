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
    if (window.innerWidth > 1024) {
        burgerBtn.classList.remove('active');
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
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

// кнопка на верх
function GoUp() {
    window.scrollTo({
        behavior: "smooth",
        top: 0,
    });
}

document.querySelector('.up-btn__circle')
    .addEventListener('click', GoUp);

document.querySelector('.up-btn__text')
    .addEventListener('click', GoUp);

// reasons
let reasonItems = document.querySelectorAll('.reasons__item');

for (let i = 0; i < reasonItems.length; i++) {
    let circles = reasonItems[i].querySelector('.reasons__circles');

    for (let j = 0; j < i + 1; j++) {
        circles.insertAdjacentHTML('beforeend', '<span class="reasons__circle"></span>');
    }
}

// trust-slider
new Swiper('.trust-slider', {
    navigation: {
        nextEl: '.trust-slider__btn-next',
        prevEl: '.trust-slider__btn-prev',
    },
    pagination: {
        el: '.trust-slider__dots',
        clickable: true,
    },

    spaceBetween: 32,
    loop: true,

    breakpoints: {
        767: {

        },
    }
});

// events-slider
new Swiper('.events-slider', {
    navigation: {
        nextEl: '.events-slider__btn-next',
        prevEl: '.events-slider__btn-prev',
    },

    spaceBetween: 32,
    loop: true,

    breakpoints: {
        767: {

        },
    }
});