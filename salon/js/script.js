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

const dropdowns = document.querySelectorAll('.dropdown');

const updateDropdownsPostions = () => {
    if (dropdowns) {
        dropdowns.forEach(dropdown => {
            const parent = dropdown.closest('.filter');
            const top = parent.getBoundingClientRect().top;
            dropdown.style.top = top + "px";
        })
    }
}

// инициализация
document.addEventListener('DOMContentLoaded', updateDropdownsPostions)

const sidebar = document.querySelector('.sidebar');

if (sidebar) {
    sidebar.addEventListener('scroll', updateDropdownsPostions);
}

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 992 && burgerBtn && sidebar) {
        sidebar.classList.remove('active');
        burgerBtn.classList.remove('active');
        body.classList.remove('lock');
    }

    updateDropdownsPostions();
});

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        e.preventDefault();

        sidebar.classList.toggle('active');
        burgerBtn.classList.toggle('active');
        body.classList.toggle('lock');
    }

    if (targetEl.closest('.theme-switcher')) {
        themeSwitchers.forEach(switcher => switcher.classList.toggle('light'));
        body.classList.toggle('light');
    }

    if (targetEl.closest('.up-btn')) {
        if (window.innerWidth > 992) {
            mainInner.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    if (!targetEl.closest('.dropdown')
        && !targetEl.closest('.filter')
        && !targetEl.closest('.theme-switcher')) {
        const activeFilter = document.querySelector('.filter.active');

        if (activeFilter) {
            activeFilter.classList.remove('active');
        }
    }

    if (targetEl.closest('.filter__btn')) {
        const filter = targetEl.closest('.filter');

        if (filter) {

            const activeFilter = document.querySelector('.filter.active');

            if (activeFilter && filter !== activeFilter) {
                activeFilter.classList.remove('active');
            }

            filter.classList.toggle('active');
        }
    }

    if (targetEl.closest('.map__btn')) {
        const map = document.querySelector('.map__inner');
        map.classList.add('active');
    }

    if (targetEl.closest('.open-reviews-list')) {
        const btn = targetEl.closest('.open-reviews-list');
        const parent = targetEl.closest('.reviews__block');
        const reviewsList = parent.querySelector('.reviews__items');
        btn.classList.toggle('active');
        reviewsList.classList.toggle('active');
    }

    if (targetEl.closest('.open-reviews-form')) {
        const btn = targetEl.closest('.open-reviews-form');
        const parent = targetEl.closest('.reviews__block');
        const form = parent.querySelector('.reviews__form');
        btn.classList.toggle('active');
        form.classList.toggle('active');
    }

    if (cityPopup && targetEl.closest('.open-city-popup')) {
        cityPopup.classList.add('active');
        body.classList.add('lock');
    }

    if (cityPopup && cityPopup.classList.contains('active')
        && !targetEl.closest('.open-city-popup')
        && (!targetEl.closest('.city-popup__inner')
            || targetEl.closest('.city-popup__close-btn'))) {
        cityPopup.classList.remove('active');
        body.classList.remove('lock');
    }

    if (sliderPopup && targetEl.closest('.open-slider-popup')) {
        sliderPopup.classList.add('active');
        body.classList.add('lock');
    }

    if (sliderPopup && sliderPopup.classList.contains('active')
        && !targetEl.closest('.open-slider-popup')
        && !targetEl.closest('.slider-popup__inner')) {
        sliderPopup.classList.remove('active');
        body.classList.remove('lock');
    }
});

// бургер меню
const burgerBtn = document.querySelector('.burger-btn');
const body = document.body;

const themeSwitchers = document.querySelectorAll('.theme-switcher');
const cityPopup = document.querySelector('.city-popup');
const sliderPopup = document.querySelector('.slider-popup');
const mainInner = document.querySelector('.main__inner');

// картинка на заднем фоне
const imageBlock = document.querySelector('.image-block');
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', (e) => {
    if(!header || !imageBlock) {
        return;
    }
    
    if (header.getBoundingClientRect().top < -headerHeight) {
        if (!imageBlock.classList.contains('hide')) {
            imageBlock.classList.add('hide');
        }
    } else {
        if (imageBlock.classList.contains('hide')) {
            imageBlock.classList.remove('hide');
        }
    }
});

// большой слайдер
$(".big-slider").slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.small-slider'
});

// маленький слайдер
$(".small-slider").slick({
    slidesToShow: 5,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.big-slider',

    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }
    ]
});

// слайдер в попапе
$(".slider-popup__slider").slick({
    slidesToShow: 1,
    arrows: false
});
