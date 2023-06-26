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

function setPadding(padding) {
    wrapper.style.paddingRight = padding + 'px';
}

const updateDropdownPosition = (filter) => {
    if (window.innerWidth <= 992) {
        return;
    }

    if (!filter.classList.contains('active')) {
        return;
    }

    const dropdown = filter.querySelector('.dropdown');

    if (!dropdown) {
        return;
    }

    const parent = filter.closest('.main__container');
    const parentTop = parent.getBoundingClientRect().top;
    const filterTop = filter.getBoundingClientRect().top;
    dropdown.style.top = filterTop - parentTop + 'px';
}

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 992 && burgerBtn && sidebar) {
        burgerBtn.classList.remove('active');
        sidebar.classList.remove('active');
        header.classList.remove('fixed');
        mainInner.classList.remove('padding');
        body.classList.remove('lock');
    }
});

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        burgerBtn.classList.toggle('active');
        sidebar.classList.toggle('active');
        header.classList.toggle('fixed');
        mainInner.classList.toggle('padding');
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

            updateDropdownPosition(filter);
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

    if(targetEl.closest('.open-reviews')) {
        const btn = targetEl.closest('.open-reviews');
        const reviewsBlock = btn.closest('.profile__block_reviews');
        
        if(reviewsBlock){
        reviewsBlock.classList.toggle('active');}
    }

    if(targetEl.closest('.open-review-form')) {
        const btn = targetEl.closest('.open-review-form');
        const reviewForm = btn.closest('.profile__block_review-form');

        if(reviewForm) {
            reviewForm.classList.toggle('active');
        }
    }

    if (targetEl.closest('.map-block__btn')) {
        const map = document.querySelector('.map-block');
        map.classList.add('active');
    }
});

// бургер меню
const burgerBtn = document.querySelector('.burger-btn');
const sidebar = document.querySelector('.sidebar');
const body = document.body;
const cityPopup = document.querySelector('.city-popup');
const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const mainInner = document.querySelector('.main__inner');

// слайдер с отзывами
$(".reviews-slider").slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true
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
            breakpoint: 769,
            settings: {
                dots: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 4,
                dots: true
            }
        },
    ]
});