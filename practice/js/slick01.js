$(function () {
  $('.main_slider').on('init reInit afterChange', function (event, slick, currentSlide) {
    let cur = $('.slick-current');
    cur.addClass('moveup').siblings().removeClass('moveup');
  })

  $('.main_slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,

  })
});