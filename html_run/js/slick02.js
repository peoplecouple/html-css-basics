$(function(){

  $('.main_slider').on('init afterChange', function(event, slick, currentSlide){
    console.log(event, slick, currentSlide);
    $('.slide01 .box .num').text("0" + (currentSlide ? currentSlide + 1 : 1) + " / "  + "0" + slick.slideCount);
    $('.slide01 .content>li').eq(currentSlide).addClass('on').siblings().removeClass('on');         
   /* $('.slide01 .content>li').eq(currentSlide) => '.slide01 .content>li' 의 index와 현재 슬라이드의 번호가 같다면*/
  });

  $('.main_slider').slick({
    centerMode: true,
    centerPadding: '250px',
    arrows:false,
    dots:true,
  });

  $('.slide01 .slide_arrows i:nth-child(1)').on('click', function(){
    $('.main_slider').slick('slickPrev')
  });

  $('.slide01 .slide_arrows i:nth-child(2)').on('click', function(){
    $('.main_slider').slick('slickNext')
  });

  $('.left_slider').slick({
    arrows: false,
    fade: true,
  });

  $('.right_slider').slick({
    arrows: false,
    slidesToShow: 4,
    asNavFor: '.left_slider',
  });

  $('.slide02 .right i:nth-child(1)').on('click', function(){
    $('.right_slider').slick('slickPrev')
  });
  $('.slide02 .right i:nth-child(2)').on('click', function(){
    $('.right_slider').slick('slickNext')
  });



})