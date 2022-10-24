$(function() {
  $('.visual_slider').slick({
    autoplay : true,
    autoplaySpeed : 2000,
    dots:true,
    pauseOnHover: false,
  })

  $('.slider01').slick({
    autoplay : true,
    autoplaySpeed : 2000,
    arrows : false,
    dots : true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $('.slider02').slick({
    slidesToShow : 3,
    autoplay : true,
    autoplaySpeed : 2000,
    arrows : false,
    dots : true,
    pauseOnFocus : false,
    pauseOnHover : false,
  })

})