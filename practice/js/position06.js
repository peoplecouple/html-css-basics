$(function(){
  $('.top_banner button').on('click', function(){
    $('.top_banner').toggleClass('active');
  })

  $('.side_banner').on('click', function(){
    $('.side_banner').toggleClass('active');
  })
})