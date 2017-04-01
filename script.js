$(function(){

var w = window.innerWidth;

  $('.home').click(function (event) {
    event.preventDefault();
    $(".homebox").scrollView();
  });


  $('.life').click(function (event) {
    event.preventDefault();
    $(".lifebox").scrollView();
  });

  $('.contact').click(function (event) {
    event.preventDefault();
    $(".contactbox").scrollView();
  });

  $('p').click(function (event) {
    event.preventDefault();
    $(".footer").scrollView();
  });

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top-80
    }, 1000);
  });
}

});
