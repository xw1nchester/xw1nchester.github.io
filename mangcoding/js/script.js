$(document).ready(function() {
    
});

$(window).resize(function () {
    if ($(window).width() > 992) {
        burgerBtn.classList.remove('active');
        document.querySelector('.header__menu').classList.remove('active');
        document.body.classList.remove('lock');
    }
});

let burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    burgerBtn.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.body.classList.toggle('lock');
});

new Swiper('.what__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView:'3',
    spaceBetween:40,
});