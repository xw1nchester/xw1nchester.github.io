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

document.addEventListener("DOMContentLoaded", function () {
    const currentProductColor = document.querySelector('.product-card__color.active');

    if (currentProductColor) {
        setProductCurrentColor(currentProductColor.dataset.color);
    }
})

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 992 && burgerBtn && menuPopup) {
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }
});

// установка цвета
const setProductCurrentColor = (color) => {
    if (productCurrentColor) {
        productCurrentColor.innerHTML = color;
    }
}

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        e.preventDefault();

        menuPopup.classList.toggle('active');
        body.classList.toggle('lock');
    }

    if (targetEl.closest('.menu-popup__close-btn')) {
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }

    if (targetEl.closest('.search-btn')
        && !targetEl.closest('.search-popup__search-btn')) {
        let input = targetEl.closest('.search-btn').nextElementSibling;
        let inputValue = input.value;
        searchPopup.classList.add("active");
        searchPopupInner.classList.add("active");
        body.classList.add('lock');
        searchPopupInput.value = inputValue;
    }

    if (targetEl.closest('.search-popup__close-btn')
        || targetEl.closest('.search-popup__back-btn')
        || targetEl.closest('.search-popup') && !targetEl.closest('.search-popup__inner')) {
        searchPopup.classList.remove("active");
        searchPopupInner.classList.remove("active");
        body.classList.remove('lock');

        if (targetEl.closest('.search-popup__close-btn')
            && window.innerWidth < 993) {
            menuPopup.classList.remove('active');
            body.classList.remove('lock');
        }
    }

    if (targetEl.closest('.product-card__color')) {
        const activeColor = document.querySelector('.product-card__color.active');
        activeColor.classList.remove('active');
        const targetColor = targetEl.closest('.product-card__color');
        targetColor.classList.add('active');
        setProductCurrentColor(targetColor.dataset.color);
    }

    if (targetEl.closest('.product-card__size-item')) {
        const activeSize = document.querySelector('.product-card__size-item.active');
        if (activeSize) {
            activeSize.classList.remove('active');
        }
        const selectedSize = targetEl.closest('.product-card__size-item');
        selectedSize.classList.toggle('active');
    }

    if (targetEl.closest('.product-card__desc-btn')) {
        productDescBtn.classList.toggle('active');
        productDesc.classList.toggle('active');
    }

    if (targetEl.closest('.order__products-btn')) {
        console.log(1);
        orderProductsBtn.classList.toggle('active');
        orderProducts.classList.toggle('active');
    }
});

const burgerBtn = document.querySelector('.burger-btn');
const menuPopup = document.querySelector('.menu-popup');
const body = document.body;
const searchInput = document.querySelector('.input_search');
const searchPopup = document.querySelector('.search-popup');
const searchPopupInner = document.querySelector('.search-popup__inner');
const searchPopupInput = document.querySelector('.search-popup__input');
const productDescBtn = document.querySelector('.product-card__desc-btn');
const productDesc = document.querySelector('.product-card__desc');
const productCurrentColor = document.querySelector('.product-card__current-color');
const orderProductsBtn = document.querySelector('.order__products-btn');
const orderProducts = document.querySelector('.order__products');

// инпут выбора магазина
const pickupCheckbox = document.querySelector('.order__pickup-checkbox');
const deliveryCheckbox = document.querySelector('.order__delivery-checkbox');
const selectShopInput = document.querySelector('.order__input-inner_shop');

if (pickupCheckbox && deliveryCheckbox && selectShopInput) {
    const updateSelectShopInput = (e) => {
        pickupCheckbox.checked ? selectShopInput.classList.add('active') : selectShopInput.classList.remove('active');
    }

    pickupCheckbox.addEventListener('change', (e) => updateSelectShopInput(e))
    deliveryCheckbox.addEventListener('change', (e) => updateSelectShopInput(e))
}

// кнопка активации промокода
const promoInput = document.querySelector('.order__promo-input');
const promoBtn = document.querySelector('.order__promo-btn');

if (promoInput && promoBtn) {
    promoInput.addEventListener('input', function (e) {
        if (promoInput.value) {
            if (!promoBtn.classList.contains('active')) {
                promoBtn.classList.add('active');
            }
        } else {
            promoBtn.classList.remove('active');
        }
    })
}

// слайдер на главной
new Swiper('.main-block__swiper', {
    navigation: {
        nextEl: '.main-block__btn_next',
        prevEl: '.main-block__btn_prev',
    },
    pagination: {
        el: '.main-block__pagination',
        clickable: true,
    },

    slidesPerView: 1,
    loop: true,
    autoplay: true,
    effect: "fade",
});

// слайдеры в карточке товара
const verticalSlider = new Swiper('.vertical-slider', {
    navigation: {
        nextEl: '.vertical-slider__btn_next',
        prevEl: '.vertical-slider__btn_prev',
    },

    slidesPerView: 3,
    direction: "vertical",
    spaceBetween: 20,
});

const gorizontalSlider = new Swiper('.gorizontal-slider', {
    navigation: {
        nextEl: '.gorizontal-slider__btn_next',
        prevEl: '.gorizontal-slider__btn_prev',
    },
    pagination: {
        el: '.gorizontal-slider__pagination',
        clickable: true,
    },

    slidesPerView: 1
});

var verticalSliderSlides = document.querySelectorAll('.vertical-slider__slide');

if (verticalSliderSlides) {
    verticalSliderSlides.forEach(el =>
        el.addEventListener('mouseenter', function () {
            const index = el.dataset.slide;
            gorizontalSlider.slideTo(index);
        }));
}

// карта
let center = [45.050329, 41.986017];

function init() {
    let map = new ymaps.Map('map-block__map', {
        center: center,
        zoom: 17
    });

    // метка
    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/placemark.svg',
        iconImageSize: [32, 51],
        // отступ от центра (не нужен)
        // iconImageOffset: [0, 0]
    });

    map.geoObjects.add(placemark);

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);
