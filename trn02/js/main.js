$(function(){
  
  // 2022.06.20 bae topBanner 
  $('.topBanner i').on('click', function(){
    $('.topBanner').slideUp(); 
    /*class붙히는거말고 그냥 슬라이드업, class를 붙혀서 하려면 높이를 정해줘야한다.*/
  });

  //2022.06.20 slider

  $('.mainSlider').on('init afterChange', function(e,s,c){
    var current = $('.slick-current')
    current.addClass('on').siblings().removeClass('on')
    // if(c){
    //   c += 1
    // }else{
    //   c = 1
    // }
    // $('.slideNum').text(c)
    $('.slideNum').text((c? c+1 : 1 ) + " / " + s.slideCount);
    $('.mainArrow i').removeClass('on');
    if(c === 1){
      $('.mainArrow i').addClass('on');
    }

  });
  
  $(".mainArrow i:nth-child(1)").on('click', function(){
    $('.mainSlider').slick('slickPrev')
  });

  $(".mainArrow i:nth-child(2)").on('click', function(){
    $('.mainSlider').slick('slickNext')
  });

  $('.mainSlider').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    pauseOnFocus:false,
  });

  $('#ytb').YTPlayer({
   videoURL:'https://youtu.be/dS9x5Ws67wI',
   containment:'.ytb',
   autoPlay:true, 
   mute:true, 
   startAt:0, 
   opacity:1,
   showControls:false,
   playOnlyIfVisible:true,
   useNoCookie:false,
  });

  /*이벤트 캡쳐링, 버블링 아이콘을 클릭했는데 a도 클릭했다고 알아들어서.*/ 
  $('.ytb .zoom').on('click', function(e){
    e.preventDefault(); //a가 가진 고유의 이벤트를 지운다.
    //이방법말고 a href에 #!값을 주면 fullscreen되지만 preventDefault를 쓰자
    $('#ytb').YTPFullscreen();
  });

  $('.productSlider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
    centerMode: true,
  });

  $('.product .productArrows i:nth-child(1)').on('click', function(){
    $('.productSlider').slick('slickPrev');
  });
  $('.product .productArrows i:nth-child(2)').on('click', function(){
    $('.productSlider').slick('slickNext');
  });

  $('.tab_menu li').on('click', function() {
    $('.tab_menu li').removeClass('on')
    $(this).addClass('on')
  })

  $('.tab_menu li').on('click', function(e) {
    e.preventDefault();
    // console.log($(this), $(this).index(), e.target, event.currentTarget);
    var idx = $(this).index();
    $('.tab_content div').eq(idx).addClass('on').siblings().removeClass('on')

  });

  $('.tab_content .notice li').on('click', function(e) {
    e.preventDefault();
    var idx = $(this).index();
    $('.right_content li').eq(idx).addClass('on').siblings().removeClass('on')
  });

  $('.toTop').on('click', function(){
    $('html, body').animate({scrollTop:0}, 200) //200 = 속도
  });

  $(window).on('scroll', function(){
    var sct = $(window).scrollTop();
    console.log(sct)
    // if (sct > 500) {
    //   $('.toTop').addClass('on')
    // }else{
    //   $('.toTop').removeClass('on')
    // }

    if(sct>500){
      $('.toTop').fadeIn(300); //show() hide()하면 너무 빨리 나와성
    }else{
      $('.toTop').fadeOut(1000); // 300, 1000은 fade속도
    }
  })

  $('#fl').on('change', function(){
    // console.log($(this), $(this).val())
    var val = $(this).val();
    // document.location.href=val; 이거해도 되고 아래꺼 해도 되고
    if (val){
      window.open(val);
    }
    //link && window.open(val) 이렇게도 되는데 이건 리액트로 가서 배울 예정
  })
})