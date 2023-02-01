$(document).ready(function () {
    $('.header__nav a').click(function (e) {
        if ($(window).width() < 768) {
            $(this).next().slideToggle(100);
        }
    })

    $('.footer__spoiler').click(function (e) {
        if ($(window).width() < 576) {
            $(this).next().slideToggle(100);
            $(this).toggleClass('active');
        }
    })
});

$(window).resize(function () {
    if ($(window).width() > 767) {
        $('.header__nav a').next().slideDown();
        burgerBtn.classList.remove('active');
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }
    if ($(window).width() > 576) {
        $('.footer__spoiler').next().slideDown();
    }
    // if ($(window).width() < 576) {
    //     $('.footer__spoiler').next().slideUp();
    //     $('.footer__spoiler').removeClass('active');
    // }
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

// выпадающие списки
let dropLinks = document.querySelectorAll('.header__nav a');

dropLinks.forEach(l =>
    l.addEventListener('click', function (e) {
        e.preventDefault();

        if (isMobile.any()) {
            l.classList.toggle('active');
            if (l.nextElementSibling != null)
                l.nextElementSibling.classList.toggle('active');
        }
    }));

let openSearchFormBtn = document.querySelector('.header__search');
let searchForm = document.querySelector('.header__form');

openSearchFormBtn.addEventListener('click', function (e) {
    e.preventDefault();

    searchForm.classList.toggle('active');
})

// Добавление товара в корзину
function addToCart(btn, prodId) {
    if (!btn.classList.contains('hold')) {
        btn.classList.add('hold');
        btn.classList.add('fly');

        let cartIcon = document.querySelector('.cart-header');
        let prod = document.querySelector(`[data-pid="${prodId}"]`);
        let prodImage = prod.querySelector('.card-product__image');

        let prodImageFly = prodImage.cloneNode(1);

        let prodImageFlyWidth = prodImage.offsetWidth;
        let prodImageFlyHeight = prodImage.offsetHeight;
        let prodImageFlyTop = prodImage.getBoundingClientRect().top;
        let prodImageFlyLeft = prodImage.getBoundingClientRect().left;

        prodImageFly.setAttribute('class', 'fly-image ibg');

        let a = 5;

        prodImageFly.style.cssText =
            `
        left: ${prodImageFlyLeft}px;
        top: ${prodImageFlyTop}px;
        width: ${prodImageFlyWidth}px;
        height: ${prodImageFlyHeight}px;
        `;

        document.body.append(prodImageFly);

        let cartIconCenterX = cartIcon.getBoundingClientRect().left + cartIcon.offsetWidth / 2;
        let cartIconCenterY = cartIcon.getBoundingClientRect().top + cartIcon.offsetHeight / 2;

        prodImageFly.style.cssText =
            `
        left: ${cartIconCenterX}px;
        top: ${cartIconCenterY}px;
        width: 0px;
        height: 0px;
        `;

        prodImageFly.addEventListener('transitionend', function (e) {
            if (btn.classList.contains('fly')) {
                prodImageFly.remove();
                updateCart(btn, prodId);
                btn.classList.remove('fly');
            }
        });
    }
}

function updateCart(btn, prodId, prodAdd = true) {
    let cart = document.querySelector('.cart-header');
    let cartQuantity = cart.querySelector('span');
    let cartList = cart.querySelector('ul');
    let prod = document.querySelector(`[data-pid="${prodId}"]`);

    if (prodAdd) {
        if (cartQuantity) {
            cartQuantity.innerHTML = ++cartQuantity.innerHTML;
        } else {
            cart.insertAdjacentHTML('beforeend', `<span>1</span>`);
        }
        btn.classList.remove('hold');
    }
}

document.addEventListener('click', function (e) {
    let targetElement = e.target;

    // Добавление товара в корзину
    if (targetElement.classList.contains('card-product__btn')) {
        e.preventDefault();
        let prodId = targetElement.closest('.card-product').dataset.pid;
        addToCart(targetElement, prodId);
    }

    // нажатие в произвольную область
    if (!targetElement.closest('.header__search')
        && !targetElement.closest('.header__form'))
        searchForm.classList.remove('active');

    if (!targetElement.closest('.header__nav a')
        && !targetElement.closest('.header__nav li ul'))
        document.querySelectorAll('.header__nav li ul').forEach(x => x.classList.remove('active'));


})

// бургер меню
let burgerBtn = document.querySelector('.burger-btn');
let menuPopup = document.querySelector('.menu-popup');
let searchFormClone = document.querySelector('.header__form').cloneNode(1);
let body = document.body;
menuPopup.appendChild(searchFormClone);

burgerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    burgerBtn.classList.toggle('active');
    menuPopup.classList.toggle('active');
    body.classList.toggle('lock');
})

// главный слайдер
new Swiper('.slider-main-block', {
    navigation: {
        nextEl: '.main-block__slider-btn_next',
        prevEl: '.main-block__slider-btn_prev',
    },

    pagination: {
        el: '.main-block__slider-pagination',
        clickable: true,
    },

    loop: true,
    spaceBetween: 0,
    autoplay: true,

    breakpoints: {
        992: {
            spaceBetween: 32,
        },
    }
});

// добавление класса scroll хедеру при проскролливании
let header = document.querySelector('.header');

let callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
        header.classList.remove('scroll');
    } else {
        header.classList.add('scroll');
    }
}

let headerObserver = new IntersectionObserver(callback);
headerObserver.observe(header);

// работа с json
function loadProducts(data) {
    let productItems = document.querySelector('.products__cards');

    data.products.forEach(item => {
        let productId = item.id;
        let productUrl = item.url;
        let productImage = item.image;
        let productTitle = item.title;
        let productText = item.text;
        let productPrice = item.price;
        let productOldPrice = item.priceOld;
        let productShareUrl = item.shareUrl;
        let productLikeUrl = item.likeUrl;
        let productLabels = item.labels;

        let productTemplateStart = `<div class="card-product" data-pid="${productId}">`;
        let productTemplateEnd = `</div>`;

        let productTemplateLabels = '';
        if (productLabels) {
            let productTemplateLabelsStart = `<div class="card-product__stickers">`;
            let productTemplateLabelsEnd = `</div>`;
            let productTemplateLabelsContent = '';

            productLabels.forEach(labelItem => {
                productTemplateLabelsContent +=
                    `<span class="card-product__sticker card-product__sticker_${labelItem.type}">${labelItem.value}</span>`;
            });

            productTemplateLabels += productTemplateLabelsStart;
            productTemplateLabels += productTemplateLabelsContent;
            productTemplateLabels += productTemplateLabelsEnd;
        }

        let productTemplateImage =
            `<a href="${productUrl}" class="card-product__image ibg">
                <img src="img/products/${productImage}" alt="image">
            </a>`;

        let productTemplateContent =
            `<div class="card-product__content">
                <a href="${productUrl}" class="card-product__title">${productTitle}</a>
                <p class="card-product__desc">${productText}</p>
                <div class="card-product__price">
                    <p class="card-product__current-price">Rp ${productPrice}</p>
                    <p class="card-product__old-price">${productOldPrice ? 'Rp' + productOldPrice : ""}</p>
                </div>
                <div class="card-product__opt">
                    <a href="#" class="card-product__btn">Add to cart</a>
                    <a href="${productShareUrl}" class="card-product__share-btn">
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 14C14.212 14 13.5 14.31 12.966 14.807L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.088 16.308C12.0317 16.5344 12.0022 16.7667 12 17C12 17.5933 12.1759 18.1734 12.5056 18.6667C12.8352 19.1601 13.3038 19.5446 13.8519 19.7716C14.4001 19.9987 15.0033 20.0581 15.5853 19.9424C16.1672 19.8266 16.7018 19.5409 17.1213 19.1213C17.5409 18.7018 17.8266 18.1672 17.9424 17.5853C18.0581 17.0033 17.9987 16.4001 17.7716 15.8519C17.5446 15.3038 17.1601 14.8352 16.6667 14.5056C16.1734 14.1759 15.5933 14 15 14V14Z"
                                fill="white" />
                        </svg>
                        Share
                    </a>
                    <a href="${productLikeUrl}" class="card-product__like-btn">
                        <svg width="24" height="21" viewBox="0 0 24 21" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.9996 19.0541C-8 8 5.99999 -4 11.9996 3.58806C18 -4 32 8 11.9996 19.0541Z"
                                stroke="white" stroke-width="1.8" />
                        </svg>
                        Like
                    </a>
                </div>
            </div>`;

        let productTemplate = '';
        productTemplate += productTemplateStart;
        productTemplate += productTemplateLabels;
        productTemplate += productTemplateImage;
        productTemplate += productTemplateContent;
        productTemplate += productTemplateEnd;

        productItems.insertAdjacentHTML('beforeend', productTemplate);
    });
}

async function getProducts(btn) {
    if (!btn.classList.contains('hold')) {
        btn.classList.add('hold');
        let file = 'json/products.json';
        let response = await fetch(file, {
            method: 'GET'
        });
        if (response.ok) {
            let result = await response.json();
            loadProducts(result);
            btn.classList.remove('hold');
            btn.remove();
        } else {
            alert('Ошибка');
        }
    }
}

let showMoreProductsBtn = document.querySelector('.products__btn');

showMoreProductsBtn.addEventListener('click', function (e) {
    e.preventDefault('.products__btn');
    addProductToCartBtns = document.querySelectorAll('.card-product__btn');
    getProducts(this);
})

// слайдер rooms
new Swiper('.slider-rooms', {
    navigation: {
        nextEl: '.rooms__slider-btn_next',
        prevEl: '.rooms__slider-btn_prev',
    },

    pagination: {
        el: '.rooms__slider-dots',
        clickable: true,
    },

    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    breakpoints: {
        1080: {
            centeredSlides: false,
            slidesPerView: 'auto',
            spaceBetween: 32,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 24,
        }
    }
});

// слайдер tips
new Swiper('.slider-tips', {
    navigation: {
        nextEl: '.slider-tips__btn_next',
        prevEl: '.slider-tips__btn_prev',
    },

    pagination: {
        el: '.slider-tips__dots',
        clickable: true,
    },

    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    // centeredSlides: true,

    breakpoints: {
        1080: {
            spaceBetween: 32,
            slidesPerView: 3,
        },
        767: {
            spaceBetween: 24,
            slidesPerView: 2,
        }
    }
});

if (!isMobile.any()) {
    let galleryItems = document.querySelector('.gallery__items');
    let galleryColumn = document.querySelectorAll('.gallery__column');

    let speed = galleryItems.dataset.speed;

    let posX = 0;
    let posPercentX = 0;

    function setMouseGalleryStyle() {
        let galleryItemsWidth = 0;

        galleryColumn.forEach(el => {
            galleryItemsWidth += el.offsetWidth;
        });

        let diff = galleryItemsWidth - galleryItems.offsetWidth;
        let distX = Math.floor(posPercentX - posX);

        posX = posX + distX * speed;

        let pos = diff / 200 * posX;

        galleryItems.style.cssText = `transform: translate3d(${-pos}px,0,0);`;

        if (Math.abs(distX) > 0) {
            requestAnimationFrame(setMouseGalleryStyle);
        } else {
            galleryItems.classList.remove('init');
        }
    }

    document.addEventListener('mousemove', function (e) {
        let width = galleryItems.offsetWidth;
        let coordX = e.pageX - width / 2;
        posPercentX = coordX / width * 200;

        if (!galleryItems.classList.contains('init')) {
            requestAnimationFrame(setMouseGalleryStyle);
            galleryItems.classList.add('init');
        }
    })
}

// lightGallery(document.querySelector('.gallery__items'), {
//     plugins: [lgZoom, lgThumbnail],
//     licenseKey: 'your_license_key',
//     speed: 500,
//     // ... other settings
// });