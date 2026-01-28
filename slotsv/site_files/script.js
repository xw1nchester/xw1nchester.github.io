document.addEventListener('DOMContentLoaded', () => {
    const upBtn = document.querySelector('.up-btn');
    const appRoot = document.querySelector('.appRoot');
    const mobileMenu = document.querySelector('.mobile-menu');

    appRoot.addEventListener('scroll', function (event) {
        console.log('scroll');
        console.log({ scrollTop: appRoot.scrollTop });
        if (appRoot.scrollTop > 300) {
            upBtn.classList.add('show');
        } else {
            upBtn.classList.remove('show');
        }
    });

    upBtn.addEventListener('click', () => {
        appRoot.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.addEventListener('click', function (e) {
        const targetEl = e.target;

        if (targetEl.closest('.show-more')) {
            const btn = targetEl.closest('.show-more');
            btn.classList.toggle('active');

            const partners = document.querySelectorAll('.partner');

            partners.forEach(p => {
                if (btn.classList.contains('active')) {
                    p.classList.remove('hide');
                } else {
                    p.classList.add('hide');
                }
            });
        }

        if (
            (mobileMenu.classList.contains('active') &&
                !targetEl.closest('.mobile-menu')) ||
            targetEl.closest('.mobile-menu__close')
        ) {
            mobileMenu.classList.remove('active');
            appRoot.classList.remove('lock');
        }

        if (targetEl.closest('.burger-btn')) {
            mobileMenu.classList.add('active');
            appRoot.classList.add('lock');
        }
    });

    new Swiper('.best-players-slider', {
        freeMode: true,
        loop: true,
        slidesPerView: 2,
        breakpoints: {
            768: {
                slidesPerView: 3.75,
            }
        }
    });
});
