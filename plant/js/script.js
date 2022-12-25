$(document).ready(function () {
    $('.our__tab').click(function(e) {
        e.preventDefault();
        $('.our__tab').not($(this)).removeClass('active');
        $(this).addClass('active');
        let index = $(this).index();
        $('.our__items').not($('.our__items').eq(index)).removeClass('active');
        $('.our__items').eq(index).addClass('active');
    })
});

$(window).resize(function () {
    if ($(window).width() < 768) {
    }
});

let burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    burgerBtn.classList.toggle('active');
    document.body.classList.toggle('lock');
    document.querySelector('.header__menu').classList.toggle('active');
});

new Swiper('.slider-what', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView:1,
});