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

const setPadding = (padding) => {
    wrapper.style.paddingRight = padding + 'px';
}

const updateActiveSmallDropdownPosition = () => {
    if (window.innerWidth <= 768) {
        return;
    }

    const activeFilter = document.querySelector('.filter.active');

    if (!activeFilter) {
        return;
    }

    const smallDropdown = activeFilter.querySelector('.dropdown.small');

    if (!smallDropdown) {
        return;
    }

    const filterRect = activeFilter.getBoundingClientRect();

    if (filterRect.left + filterRect.width > window.innerWidth / 2) {
        smallDropdown.style.left = 'auto';
        smallDropdown.style.right = '0';
    } else {
        smallDropdown.style.left = '0';
        smallDropdown.style.right = 'auto';
    }
}

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 768 && burgerBtn && menuPopup) {
        menuPopup.classList.remove('active');
        burgerBtn.classList.remove('active');
        body.classList.remove('lock');
    }

    updateActiveSmallDropdownPosition();
});

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        menuPopup.classList.toggle('active');
        burgerBtn.classList.toggle('active');
        body.classList.toggle('lock');
    }

    if (targetEl.closest('.up-btn')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (!targetEl.closest('.dropdown')
        && !targetEl.closest('.filter')) {
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

            updateActiveSmallDropdownPosition();
        }
    }

    if (cityPopup && targetEl.closest('.open-city-popup')) {
        cityPopup.classList.add('active');
        let scrollWidth = window.innerWidth - wrapper.offsetWidth;
        setPadding(scrollWidth);
        body.classList.add('lock');
    }

    if (cityPopup && cityPopup.classList.contains('active')
        && !targetEl.closest('.open-city-popup')
        && (!targetEl.closest('.city-popup__inner')
            || targetEl.closest('.city-popup__close-btn'))) {
        cityPopup.classList.remove('active');
        setPadding(0);
        body.classList.remove('lock');
    }

    if (targetEl.closest('.open-review-form')
        || targetEl.closest('.open-reviews')) {
        const btn = targetEl.closest('.open-review-form') || targetEl.closest('.open-reviews');
        const parent = btn.closest('.profile__block');

        if (parent) {
            parent.classList.toggle('active');
        }
    }

    if (targetEl.closest('.map-block__btn')) {
        const map = document.querySelector('.map-block');
        map.classList.add('active');
    }
});

// бургер меню
const burgerBtn = document.querySelector('.burger-btn');
const menuPopup = document.querySelector('.header__bottom');
const body = document.body;
const wrapper = document.querySelector('.wrapper');

const cityPopup = document.querySelector('.city-popup');

// большой слайдер
$(".big-slider").slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.small-slider'
});

// маленький слайдер
$(".small-slider").slick({
    slidesToShow: 8,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.big-slider',

    responsive: [
        {
            breakpoint: 1360,
            settings: {
                slidesToShow: 7
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 8,
                dots: true
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 7,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 6,
                dots: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 5,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                dots: true
            }
        }
    ]
});

// слайдер отзывов
$(".reviews-slider").slick({
    slidesToShow: 1,
    arrows: false,
    dots: true
});