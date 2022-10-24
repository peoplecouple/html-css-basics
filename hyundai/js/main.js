$(function(){

  $('.main_bg_slider').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
  })

  $('.biz_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
  })

  $('.biz .arrows i:nth-child(1)').on('click', function() {
    $('.biz_slider').slick('slickPrev')
  })
  $('.biz .arrows i:nth-child(2)').on('click', function() {
    $('.biz_slider').slick('slickNext')
  })

  $('#fl').on('change', function(){
    var val = $(this).val();

    if(val){
      window.open(val)
    }
  });

  $('nav .icon i').on('click', function(e){
    e.preventDefault(); /*아이콘을 a가 감싸고 있으므로 preventDefault 필요!*/ 
    $('.cover').addClass('on');
  });

  $('.cover.on .icon').on('click',function(e){
    e.preventDefault(); 
    $('.cover').removeClass('on');
  })

  $('.cover .container>dl>dt>a').on('click', function(e){
    e.preventDefault();
    $('.cover').removeClass('on');
    $('html,body').animate({scrollTop:$(this.hash).offset().top})
  })

})