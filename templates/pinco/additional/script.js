document.addEventListener('DOMContentLoaded', () => {
    const swiperEqualHeight = new Swiper('.pu-swiper-equal-height', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        pagination: {
            el: '.pu-swiper-equal-height .swiper-pagination',
            clickable: true
        }
    });

    const swiperCategoryTabs = new Swiper('.pu-home-games-widget-category-tabs', {
        slidesPerView: 'auto',
        freeMode: true
    });

    const tournamentSlider = new Swiper('.ui-promo-tournaments-slider', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {
        nextEl: '.ui-promo-tournaments-slider__control-next',
        prevEl: '.ui-promo-tournaments-slider__control-prev',
    }
    });
})