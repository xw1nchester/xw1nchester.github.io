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

    if(targetEl.closest('.review__open')) {
        let reviewToggleButton = document.querySelector(".review__open");
        let reviewContent = document.querySelector(".profile__review");

        e.preventDefault();

        reviewToggleButton.classList.toggle("active");
        reviewContent.classList.toggle("active");
    }

    if(targetEl.closest('.comment__open')) {
        let commentToggleButton = document.querySelector(".comment__open");
        let reviewContent = document.querySelector(".profile__comment");

        e.preventDefault();

        commentToggleButton.classList.toggle("active");
        reviewContent.classList.toggle("active");
    }
});

// бургер меню
let burgerBtn = document.querySelector('.burger-btn');
let menuPopup = document.querySelector('.sidebar');
let body = document.body;

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

const allSwipers = document.querySelectorAll('.swiper');

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