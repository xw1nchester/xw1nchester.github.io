$(document).ready(function () {

});

$(window).resize(function () {
    if ($(window).width() > 767) {
        burgerBtn.classList.remove('active');
        document.body.classList.remove('lock');
        document.querySelector('.header__menu').classList.remove('active');
    }
});

AOS.init();

let burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    burgerBtn.classList.toggle('active');
    document.body.classList.toggle('lock');
    document.querySelector('.header__menu').classList.toggle('active');
})

document.querySelectorAll('.rtx').forEach(r => r.addEventListener('click', function (e) {
    let circles = document.querySelectorAll('.circle');
    circles.forEach(c => c.classList.toggle('active'));
    e.preventDefault();
}))

new Swiper('.learn__slider', {
    autoplay: {
        disableOnInteraction: false
    },
    spaceBetween: 20,
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    on: {
        slideChange: function (e) {
            let slides = document.querySelectorAll('.swiper-slide');
            slides.forEach(s => s.style.visibility = 'visible');
            if (window.screen.width > 766) {
                for (let i = 0; i < this.activeIndex; i++)
                    slides[i].style.visibility = 'hidden';
            }
        }
    },
    breakpoints: {
        767: {
            centeredSlides: false,
            spaceBetween: 60
        },
        440: {
            spaceBetween: 60
        }
    },
});

new Swiper('.seller__slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    grid: {
        fill: 'row',
        rows: 2,
    },
    navigation: {
        nextEl: '.seller__swiper-button-next',
        prevEl: '.seller__swiper-button-prev',
    },
    breakpoints: {
        1220: {
            slidesPerView: 3,
        },
        820: {
            spaceBetween: 36,
            slidesPerView: 2,
        },
        500: {
            // grid: {
            //     rows: 2
            // },
        }
    },
});