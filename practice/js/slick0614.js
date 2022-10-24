$(function(){

  $('.main_slider').on('init afterChange', function(event, slick, currentSlide){
    console.log(event, slick, currentSlide);
    $('.num').text((currentSlide ? currentSlide+1 : 1) + " / " +slick.slideCount);
    $('.slide01 .box .content>li').eq(currentSlide).addClass('on').siblings().removeClass('on');
  })

  $('.main_slider').slick({
    arrows:false,
    dots:true,
    centerMode:true,
    centerPadding: '250px'
  })

  $('.slide01 .arrows i:nth-child(1)').on('click', function(){
    $('.main_slider').slick('slickPrev')
  })

  $('.slide01 .arrows i:nth-child(2)').on('click', function(){
    $('.main_slider').slick('slickNext')
  })

  $('.slide02 .left_slide').slick({    
    arrows: false,
    fade:true,
  })

  $('.slide02 .right_slide').slick({    
    arrows: false,
    slidesToShow: 4,
    asNavFor: '.slide02 .left_slide',
  })

  $('.slide02 .container .arrows i:nth-child(1)').on('click', function(){
    $('.right_slide').slick('slickPrev')})
  
  $('.slide02 .container .arrows i:nth-child(2)').on('click', function(){
    $('.right_slide').slick('slickNext')})

})