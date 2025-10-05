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

const setPadding = padding => {
    wrapper.style.paddingRight = padding + 'px';
};

const closeActivePopup = () => {
    activePopup = document.querySelector('.popup.active');

    if (activePopup) {
        activePopup.classList.remove('active');
        setPadding(0);
        body.classList.remove('disable');
    }
};

const closeCitySelect = () => {
    const citySelectBody = document.querySelector('.city-select__body');

    if (citySelectBody) {
        citySelectBody.classList.remove('active');
    }
};

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 768) {
        if (burgerBtn && menu && header && main && body) {
            burgerBtn.classList.remove('active');
            menu.classList.remove('active');
            header.classList.remove('fixed');
            main.classList.remove('padding');
            body.classList.remove('lock');
        }
    }
});

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        burgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
        header.classList.toggle('fixed');
        main.classList.toggle('padding');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        body.classList.toggle('lock');
    }

    if (targetEl.closest('.up-btn')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (targetEl.closest('.menu__btn')) {
        const menuItem = targetEl.closest('.menu__item');

        const activeMenuItem = document.querySelector('.menu__item.active');

        if (activeMenuItem && activeMenuItem != menuItem) {
            activeMenuItem.classList.remove('active');
        }

        menuItem.classList.toggle('active');

        const smallSubmenu = menuItem.querySelector('.submenu.small');

        if (!window.innerWidth > 768 || !smallSubmenu) {
            return;
        }

        if (menuItem.classList.contains('active')) {
            const smallSubmenuRect = smallSubmenu.getBoundingClientRect();

            if (
                smallSubmenuRect.left + smallSubmenuRect.width / 2 >
                window.innerWidth / 2
            ) {
                smallSubmenu.style.left = 'unset';
                smallSubmenu.style.right = '0';
            }
        } else {
            smallSubmenu.style.left = '0';
            smallSubmenu.style.right = 'unset';
        }
    }

    if (!targetEl.closest('.menu__item')) {
        const activeMenuItem = document.querySelector('.menu__item.active');

        if (activeMenuItem) {
            activeMenuItem.classList.remove('active');
        }
    }

    if (targetEl.closest('.profile__open')) {
        const clickedEl = targetEl.closest('.profile__open');
        const openableEl = targetEl
            .closest('.profile__block')
            .querySelector('.profile__openable');

        clickedEl.classList.toggle('active');
        openableEl.classList.toggle('active');
    }

    if (cityPopup && targetEl.closest('.open-city-popup')) {
        cityPopup.classList.add('active');
        let scrollWidth = window.innerWidth - wrapper.offsetWidth;
        setPadding(scrollWidth);
        body.classList.add('disable');
    }

    if (targetEl.closest('.auth__title')) {
        const activeAuthTitle = document.querySelector('.auth__title.active');
        activeAuthTitle.classList.remove('active');

        const activeForm = document.querySelector('.auth__form.active');
        activeForm.classList.remove('active');

        const targetAuthTitle = targetEl.closest('.auth__title');
        targetAuthTitle.classList.add('active');

        const attributeValue = targetAuthTitle.getAttribute('data-auth');

        const targetForm = document.querySelector(
            `[data-form="${attributeValue}"]`
        );
        targetForm.classList.add('active');
    }

    if (targetEl.closest('.abuse-btn')) {
        abusePopup.classList.add('active');
        let scrollWidth = window.innerWidth - wrapper.offsetWidth;
        setPadding(scrollWidth);
        body.classList.add('disable');
    }

    if (
        (targetEl.closest('.popup') && !targetEl.closest('.popup__inner')) ||
        targetEl.closest('.close-popup')
    ) {
        closeActivePopup();
    }

    if (targetEl.closest('.abuse-popup__delete-file')) {
        e.preventDefault();
        abuseFileInput.value = '';
        abuseFileLabel.classList.remove('uploaded');
        abuseFileLabel.style.backgroundImage = ``;
        abuseFileDeleteBtn.classList.remove('active');
    }

    if (targetEl.closest('.city-select__value')) {
        e.preventDefault();
        const citySelect = targetEl.closest('.city-select');
        const citySelectBody = citySelect.querySelector('.city-select__body');
        citySelectBody.classList.toggle('active');
    }

    if (!targetEl.closest('.city-select')) {
        closeCitySelect();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeActivePopup();
        closeCitySelect();
    }
});

// бургер меню
const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const body = document.body;
const wrapper = document.querySelector('.wrapper');
const cityPopup = document.querySelector('.city-popup');
const abusePopup = document.querySelector('.abuse-popup');
const abuseFileInput = document.querySelector('.abuse-popup__file-input');
const abuseFileLabel = document.querySelector('.abuse-popup__file-label');
const abuseFileDeleteBtn = document.querySelector('.abuse-popup__delete-file');
// const wrapper = document.querySelector('.wrapper');

const upBtn = document.querySelector('.up-btn');

window.addEventListener('scroll', function (e) {
    const shouldShow = document.documentElement.scrollTop > 100;

    if (upBtn) {
        upBtn.classList.toggle('active', shouldShow);
    }
});

new Swiper('.reviews__slider', {
    pagination: {
        el: '.reviews__pagination',
        clickable: true
    },

    spaceBetween: 20,
    loop: true
});

// большой слайдер
$('.big-slider').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.small-slider'
});

// маленький слайдер
$('.small-slider').slick({
    slidesToShow: 5,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.big-slider',
    dots: true
});

// показ файла в форме жалобы
abuseFileInput?.addEventListener('change', function () {
    const reader = new FileReader();
    reader.readAsDataURL(abuseFileInput.files[0]);

    reader.onload = function (e) {
        abuseFileLabel.classList.add('uploaded');
        abuseFileLabel.style.backgroundImage = `url("${e.target.result}")`;
        abuseFileDeleteBtn.classList.add('active');
    };
});

// chat
const chatBtn = document.querySelector('.chat-btn');
const chat = document.querySelector('.chat');
const messageCounter = document.querySelector('.chat-btn__counter');
const chatInput = document.querySelector('.chat__input');
const sendMessageBtn = document.querySelector('.chat__send-message');
const messages = document.querySelector('.chat__messages');
const userStatus = document.querySelector('.chat__status');
const emojiPicker = document.querySelector('.chat__emoji-picker');

const addMessage = (text, isOwn) => {
    const msg = document.createElement('div');
    msg.classList.add('chat__message');
    if (isOwn) {
        msg.classList.add('chat__message_own');
    }
    msg.textContent = text;
    const timeBlock = document.createElement('div');
    timeBlock.classList.add('chat__time');
    const now = new Date();
    timeBlock.textContent = `${now.getHours()}:${now
        .getMinutes()
        .toString()
        .padStart(2, 0)}`;
    msg.appendChild(timeBlock);
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
};

const startTyping = () => {
    userStatus.textContent = 'Печатает...';
    userStatus.classList.add('typing');
};

const stopTyping = () => {
    userStatus.textContent = 'В сети';
    userStatus.classList.remove('typing');
};

const sendMessageHandler = () => {
    const text = chatInput.value.trim();

    if (!text) return;

    chatInput.value = '';

    addMessage(text, true);

    setTimeout(() => {
        startTyping();
    }, 1000);

    setTimeout(() => {
        stopTyping();
        addMessage(text, false);
    }, 2500);
};

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.chat-btn')) {
        chatBtn.classList.toggle('active');
        messageCounter.classList.add('disable');
        chat.classList.toggle('active');

        if (window.innerWidth < 576) {
            body.classList.add('lock');
        }
    }

    if (targetEl.closest('.chat__close')) {
        chatBtn.classList.remove('active');
        chat.classList.remove('active');
        body.classList.remove('lock');
    }

    if (targetEl.closest('.chat__send-message')) {
        sendMessageHandler();
    }

    if (targetEl.closest('.chat__open-emoji-picker')) {
        emojiPicker.classList.toggle('active');
    }

    if (
        emojiPicker &&
        emojiPicker.classList.contains('active') &&
        !targetEl.closest('.chat__open-emoji-picker') &&
        !targetEl.closest('.chat__emoji-picker')
    ) {
        emojiPicker.classList.remove('active');
    }

    if (targetEl.closest('.chat__emoji-btn')) {
        chatInput.value += targetEl.textContent;
    }
});

if (chatInput) {
    chatInput.addEventListener('input', e => {
        e.target.value != ''
            ? sendMessageBtn.classList.add('active')
            : sendMessageBtn.classList.remove('active');
    });

    chatInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessageHandler();
        }
    });
}

// Слайдер клипов
let globalMuted = true;

const videos = document.querySelectorAll('.clips-slider__slide video');
const slides = document.querySelectorAll('.clips-slider__slide');
const muteBtns = document.querySelectorAll('.clips-slider__mute-btn');

const playVideo = index => {
    videos.forEach((video, i) => {
        if (i === index) {
            video.muted = globalMuted;
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });
};

const pauseVideo = slide => {
    const video = slide.querySelector('video');
    const tapIcon = slide.querySelector('.clips-slider__tap-icon');

    if (video.paused) {
        tapIcon.classList.add('play');
        video.play();
    } else {
        tapIcon.classList.remove('play');
        video.pause();
    }

    tapIcon.classList.add('active');

    setTimeout(() => {
        tapIcon.classList.remove('active');
    }, 300);
};

const clipsSlider = new Swiper('.clips-slider', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    simulateTouch: true,
    loop: true,
    noSwipingClass: 'clips-slider__progress-bar',
    navigation: {
        prevEl: '.clips-slider__btn_prev',
        nextEl: '.clips-slider__btn_next'
    },
    breakpoints: {
        992: {
            slidesPerView: 1.05,
            spaceBetween: 20
        }
    },
    on: {
        init() {
            playVideo(0);
        },
        slideChange() {
            playVideo(this.realIndex);

            // смена урлов при пролистывании
            // const activeSlide = clipsSlider.slides[this.realIndex];
            // const videoId = activeSlide.dataset.id;
        }
    }
});

document.addEventListener('keydown', e => {
    if (clipsSlider) {
        if (e.key === 'ArrowUp') {
            clipsSlider.slidePrev();
        } else if (e.key === 'ArrowDown') {
            clipsSlider.slideNext();
        } else if (e.key == ' ') {
            e.preventDefault();
            const activeSlide = clipsSlider.slides[clipsSlider.activeIndex];
            pauseVideo(activeSlide);
        }
    }
});

slides.forEach(slide => {
    const video = slide.querySelector('video');
    const muteBtn = slide.querySelector('.clips-slider__mute-btn');
    const progressBar = slide.querySelector('.clips-slider__progress-bar');
    const progressFill = progressBar.querySelector(
        '.clips-slider__progress-fill'
    );
    let isDragging = false;

    video.addEventListener('click', () => {
        pauseVideo(slide);
    });

    video.addEventListener('timeupdate', () => {
        if (!isDragging) {
            const percent = (video.currentTime / video.duration) * 100;
            progressFill.style.width = percent + '%';
        }
    });

    muteBtn.addEventListener('click', () => {
        muteBtns.forEach(b => b.classList.toggle('on'));
        const muted = !muteBtn.classList.contains('on');
        video.muted = muted;
        globalMuted = muted;
    });

    progressBar.addEventListener('mousedown', startDrag);
    progressBar.addEventListener('touchstart', startDrag, { passive: false });

    function startDrag(e) {
        isDragging = true;
        moveThumb(e);

        document.addEventListener('mousemove', moveThumb);
        document.addEventListener('mouseup', stopDrag);

        document.addEventListener('touchmove', moveThumb, { passive: false });
        document.addEventListener('touchend', stopDrag);
    }

    function moveThumb(e) {
        const rect = progressBar.getBoundingClientRect();
        let clientX;

        if (e.touches && e.touches.length) {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }

        let percent = (clientX - rect.left) / rect.width;
        percent = Math.max(0, Math.min(1, percent)); // ограничиваем 0–1
        progressFill.style.width = `${percent * 100}%`;
        video.currentTime = percent * video.duration;
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', moveThumb);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', moveThumb);
        document.removeEventListener('touchend', stopDrag);
    }
});
