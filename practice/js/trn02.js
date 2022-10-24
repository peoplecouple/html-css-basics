$(function() {
  $('.topBanner .inner i').on('click', function(){
    $('.topBanner').slideUp();
  })

  $('.mainSlider').on('init afterChange',function(e, s, c){
    $('.slick-current').addClass('on').siblings().removeClass('on');
    $('.mainVisual .arrows i').removeClass('on');
    if(c == 1){
      $('.mainVisual .arrows i').addClass('on');
    }
    console.log(s)

    $('.num').text((c? c+1 : 1) + " / " + s.slideCount);
  })

  $('.mainSlider').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    pauseOnFocus:false,
  })

  $('.mainVisual .arrows i:nth-child(1)').on('click',function(){
    $('.mainSlider').slick('slickPrev');
  })

  $('.mainVisual .arrows i:nth-child(2)').on('click',function(){
    $('.mainSlider').slick('slickNext');
  })

  $('#ytb').YTPlayer({
    videoURL:'https://youtu.be/dS9x5Ws67wI',
    containment:'.ytb',
    autoPlay:true,
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,
    playOnlyIfVisible:false,
    useNoCookie:false, //useNoCookie를 쓰더라도 client쪽에서 쿠키설정을 다르게 한다면 소용 없다고 하심.
  });

  $('.zoom').on('click', function(e){
    e.preventDefault();
    $('#ytb').YTPFullscreen();
  })
})