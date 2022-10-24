$(function(){

  $('.top_banner button').on('click', function () {
    $('.top_banner').toggleClass('active');
  })

  $('.right_banner').on('click', function () {
    $(this).toggleClass('active');
  })
})



  /*
  $('.top_banner').slideToggle();
  slideToggle() 열고 닫기
  slideToggle로 열고닫으면 css손보지 않아 편하지만
  overflow:hidden이 먹히지 않아서 지금처럼 효과를 주기가 어렵다함
  */