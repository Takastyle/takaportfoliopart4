$(function () {
  $(window).scroll(function () {
    $('.effect-fade').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass('effect-scroll');
      }
    });
  });
});

$(function () {
  $("#Menu dt").on("click", function () {
    $(this).next().slideToggle();
  });
});

$(document).ready(function () {

  var pagetop = $('.pagetop');

  $(window).scroll(function () {

    if ($(this).scrollTop() > 100) {

      pagetop.fadeIn();

    } else {

      pagetop.fadeOut();

    }

  });

  pagetop.click(function () {

    $('body, html').animate({ scrollTop: 0 }, 500);

    return false;

  });

});


$(function () {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });

  ScrollReveal().reveal('.fadein', {
    duration: 1800,
    reset: true
  });
});

ScrollReveal().reveal('.image1', {
  duration: 1800,
  reset: true
});