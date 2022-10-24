$(function () {
  $('.sinbal .num ul li').on('click', function () {
    var idx = $(this).index();

    $('.sinbal .case ul').css({ top: -450 * idx });
  })
})