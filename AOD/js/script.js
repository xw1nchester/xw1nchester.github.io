let burgerButton = document.querySelector('.menu__icon');
if (burgerButton) {
  burgerButton.addEventListener('click', function (e) {
    burgerButton.classList.toggle('active');
    document.querySelector('.menu__body').classList.toggle('active');
    document.body.classList.toggle('lock');
  });
}

$(document).ready(changeTemplate);
$(window).resize(changeTemplate);

function changeTemplate() {
  if ($(window).width() > 767) {
    burgerButton.classList.remove('active');
    document.querySelector('.menu__body').classList.remove('active');
    document.body.classList.remove('lock');
  }
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop:true,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
})