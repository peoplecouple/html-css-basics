$(function(){
  $('.main_slide').on('init afterChange', function(e, s, c){
    $('.main_slide figure.slick-current').addClass('on').siblings().removeClass('on');
    $('.main_visual .num').css({backgroundPositionY: -100*c + "px"});
    $('.custom_dots li').eq(c).addClass('on').siblings().removeClass('on');
  });

  $('.main_slide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    pauseOnFocus:false,
  });

  $('.custom_dots a').on('click', function(e){
    e.preventDefault();
    var index = $(this).parent().index();
    $('.main_slide').slick('slickGoTo', index);
    $('.main_visual .num').css({backgroundPositionY: -100*index + "px"});
  });


  $('.custom_arrows i:nth-child(1)').on('click', function(){
    $('.main_slide').slick('slickPrev')
  });
  $('.custom_arrows i:nth-child(2)').on('click', function(){
    $('.main_slide').slick('slickNext')
  });

  $('.custom_play i:nth-child(1)').on('click', function(){
    $('.main_slide').slick('slickPause')
  });
  $('.custom_play i:nth-child(2)').on('click', function(){
    $('.main_slide').slick('slickPlay')
  });

})