$(document).ready(function() {
    
});

$(window).resize(function () {
    if ($(window).width() < 768) {

    }
});

$('.burger-btn').click(function(e) {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    document.body.classList.toggle('lock');
    e.preventDefault();
});