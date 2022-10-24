$(function() {
  
  $('nav>ul>li a').on('click', function(e){
    if($('nav').hasClass('on')) {
      e.preventDefault();
      $(this).next().slideToggle()
      $(this).parent().siblings().find('ul').slideUp();
    }
  })

  $(window).on('resize', function(){
    $('nav').removeClass('on');
    $('nav>ul ul').removeAttr('style');
  })

  $('.hamburger').on('click', function(){
    $('.container nav').toggleClass('on');
    $('nav>ul>li>a').next().slideUp();
  })
})