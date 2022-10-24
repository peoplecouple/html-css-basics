$(function () {
  $('.num li').on('click', function () {
    /*num 의 li를 클릭했을 때 function 기능이 실행된다.*/
    var idx = $(this).index(); /*클릭한 것의 인덱스번호를 '번호'에 담다*/
    console.log(idx);

    $('.sinbal .case ul').css({ top: -450 * idx }) /*.css로 바로 css속성을 바꿔준다*/
  })
})