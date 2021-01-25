/*set slider*/

/*$(document).ready(function () {
  $('.second_sectoin_container').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    slidesToShow: 3,
    slidesToScroll: 3
  });
});*/

$('.second_sectoin_container').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});