$(document).ready(function () {
  $('.courses-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          centerMode:true
        }
      },
    ],
  });

  $('.special-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint:700,
        settings: {
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          centerMode:true,
        }
      },
    ]
  });

  $('.header-burger').click(function (event) {
    $('.header-burger, .header-burger__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// function changeTemplate(){
//   if($(window).width()<480){
//     const policy = document.querySelector('.footer__policy');

//   }
// }
// $(document).ready(changeTemplate);
// $(window).resize(changeTemplate);