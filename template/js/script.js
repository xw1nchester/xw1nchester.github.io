const burgerBtn = document.querySelector('.burger-btn');
const body = document.body;
const wrapper = document.querySelector('.wrapper');

document.addEventListener('click', function (e) {
    const targetEl = e.target;

    // if (targetEl.closest('.burger-btn')) {
    //     burgerBtn.classList.toggle('active');
    //     body.classList.toggle('lock');
    // }
});

// window.addEventListener('resize', function (e) {
//     if (window.innerWidth > 768) {
//         burgerBtn.classList.remove('active');
//         body.classList.remove('lock');
//     }
// });

// для попапов
// перед body.lock вставить:
// const scrollWidth = window.innerWidth - wrapper.offsetWidth;
// setPadding(scrollWidth);

// const setPadding = (padding) => {
//     wrapper.style.paddingRight = padding + 'px';
// }