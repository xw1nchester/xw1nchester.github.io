document.addEventListener('DOMContentLoaded', e => {
    const burgerBtn = document.querySelector('.js-burger');

    document.addEventListener('click', function (e) {
        const targetEl = e.target;

        if (targetEl.closest('.js-burger')) {
            burgerBtn.classList.toggle('c-burger--active');
            document.body.classList.toggle('mobile-menu--opened');
            document.body.classList.toggle('lock');
        }

        if (
            !targetEl.closest('.js-burger') &&
            !targetEl.closest('.inner-mobile-menu-block') &&
            document.body.classList.contains('mobile-menu--opened')
        ) {
            burgerBtn.classList.remove('c-burger--active');
            document.body.classList.remove('mobile-menu--opened');
            document.body.classList.remove('lock');
        }
    });
});
