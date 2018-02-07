$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    cssEase: "ease-in-out"
  })
});

$(document).ready(function(){
  $('.slider2').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  })
});
