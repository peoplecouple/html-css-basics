//$(funcion(){
//  이속에 쓰면 DOM을 다 로드한 후 안의 코드를 실행시킨다. 그러므로 head에 쓸 수 있다.
//})

$(function () {             //$ = document.querySelectorAll

  //바뀌고난 후(슬라이드가 넘어가고나서) 어떤일을 하라~ 이건 slick의 옵션
  $('.main_slider').on('init reInit afterChange', function(){
    var here = $('.slick-current');
    here.addClass('on').siblings().removeClass('on')
    /*current슬라이드에만 on클래스가 붙고 형재자매에는 안붙음*/
  })

  $('.main_slider').slick({
    arrows: false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    fade:true,
  });

  
})