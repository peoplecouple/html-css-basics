$(function(){

  //let createNum = 0; //$('.custom_dots li a').on('click', function(e){ 이거를 쓰니 createNum이 꼬여서 주석처리함
    
  $('.main_slider').on('init afterChange', function(e,s,c){
    /*슬릭 생성 전인 위로 보내면 됨 그럼 1번째 슬라이드에도 애니메이션 먹힘*/
    $('.main_slider figure.slick-current').addClass('on').siblings().removeClass('on'); 
    /*background를 사용해서 무한대로 123 숫자 돌아가게 만들기*/
    $('.num').css({backgroundPositionY: -100*c + "px"}); /*createNum은 슬라이드가 넘어가면서 계속 숫자가 증가->y값이 계속 증가*/ 
    //createNum++;

    $('.custom_dots li').eq(c).addClass('on').siblings().removeClass('on');
  });

  // 이렇게하면하면 3에서 1로 돌아갈 때 거꾸로 감 c의 값은 0, 1, 2니까 y값이 0으로 바껴서 거꾸로 돌아감
  // $('.main_slider').on('init afterChange', function(e,s,c){
  //   $('.main_slider figure.slick-current').addClass('on').siblings().removeClass('on');
  //   $('.num').css({backgroundPositionY: -100*c + "px"}) 
  // })

  $('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    pauseOnFocus:false,
  });

  $('.custom_dots li a').on('click', function(e){
    e.preventDefault();
    var index = $(this).parent().index();
    $('.main_slider').slick('slickGoTo', index);
    $('.num').css({backgroundPositionY: -100*index  + "px"})

    
    //var y = $('.num').css({backgroundPositionY});
    // if (index == 0) {
    //   if (y % 300 == 0 | y % 300 == 300 ){
    //     $('.num').css({backgroundPositionY: y -100*index + "px"})
    //   }else if(y % 300 == 100){
    //     $('.num').css({backgroundPositionY: y -100*index -100 + "px"})
    //   }else if(y % 300 == 300){
    //     $('.num').css({backgroundPositionY: y -100*index -200 + "px"})
    //   }
    // }else if(index == 1){
    //   if (y % 300 == 0 | y % 300 == 300 ){
    //    $('.num').css({backgroundPositionY: y -100*index + "px"})
    //   }else if(y % 300 == 100){
    //     $('.num').css({backgroundPositionY: y -100*index -100 + "px"})
    //   }else if(y % 300 == 300){
    //     $('.num').css({backgroundPositionY: y -100*index -200 + "px"})
    //   }
    // }else if(index == 2){
    //   if (y % 300 == 0 | y % 300 == 300 ){
    //     $('.num').css({backgroundPositionY: y -100*index + "px"})
    //   }else if(y % 300 == 100){
    //     $('.num').css({backgroundPositionY: y -100*index -100 + "px"})
    //   }else if(y % 300 == 300){
    //     $('.num').css({backgroundPositionY: y-100*index -200 + "px"})
    //   }
    // }
    
  

 
  });

  $('.custom_arrow i:nth-child(1)').on('click', function(){
    $('.main_slider').slick('slickPrev');
  });

  $('.custom_arrow i:nth-child(2)').on('click', function(){
    $('.main_slider').slick('slickNext');
  });


  $('.custom_play i:nth-child(1)').on('click', function(){
    $('.main_slider').slick('slickPause');
  });

  $('.custom_play i:nth-child(2)').on('click', function(){
    $('.main_slider').slick('slickPlay');
  });
})