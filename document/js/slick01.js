$(function () {
 
  /* init reInit를 이벤트 앞에 붙히면 처음부터 적용됨 */
  /* afterChange이벤트를 쓸 때는 매개변수로 event, slick, currentSlide를 넘겨준다 */
  $('.main_slider').on('init reInit afterChange', function (event, slick, currentSlide) {
    console.log(event, slick, currentSlide);
    $('.num').text((currentSlide ? currentSlide + 1 : 1) + "/" + slick.slideCount);

    /*글자 애니메이션을 위해 current slick에 xx 클래스를 붙힌다.*/
    let cur = $('.slick-current');
    cur.addClass('xx').siblings().removeClass('xx');
  });

  $('.main_slider').slick({
    dots: true,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnFocus:false,
    pauseOnHover:false,
  });
})