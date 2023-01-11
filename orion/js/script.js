$(document).ready(function() {
    
});

$(window).resize(function () {
});

$('.burger-btn').click(function(e) {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    document.body.classList.toggle('lock');
    e.preventDefault();
});