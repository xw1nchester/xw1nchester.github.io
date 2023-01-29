$(document).ready(function () {

});

$(window).resize(function () {
});

$('.burger-btn').click(function (e) {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    document.body.classList.toggle('lock');
    e.preventDefault();
});

function setPadding(padding) {
    document.querySelectorAll('.lock-padding')
    .forEach(e => e.style.paddingRight = padding);
}

let body = document.body;
let videoPopups = document.querySelectorAll('.video-popup');

videoPopups.forEach(p => p.addEventListener('click', function (e) {
    e.preventDefault();

    if (!e.target.closest('.video-popup__inner')) {
        p.classList.remove('active');
        setPadding('0px');
        body.classList.remove('lock');
        let video = p.querySelector('iframe');
        if (video != null)
            video.setAttribute("src", video.getAttribute("src"));
    }
}));

let videoPopup1 = document.querySelector('.video-popup_1');
let fasterVideoBtn = document.querySelector('.image-block__video-block');

fasterVideoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    videoPopup1.classList.add('active');
    let scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    setPadding(scrollWidth);
    body.classList.add('lock');
});

let videoPopup2 = document.querySelector('.video-popup_2');
let storyVideoBtn = document.querySelector('.story__video');

storyVideoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    videoPopup2.classList.add('active');
    let scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    setPadding(scrollWidth);
    body.classList.add('lock');
});