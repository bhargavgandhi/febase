/* ===========================
   Author: Bhargav Gandhi (BG)
   Description: script.js
   =========================== */

$(function() {
  var itsIE = detectIE();
  var windowWidth = setWidth();
  
  if (itsIE === false) {
    $(window).load(function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove();
        $("body").removeClass("Hide");
      });
    });
  } else {
    $(window).load(function() {
      $("#preloader").fadeOut("fast", function() {
        $(this).remove();
        $("body").removeClass("Hide");
        if (!$('body').hasClass('home')) {
          $("body").addClass("fadeIn");
        }
      });
    });
  }

  $("body").addClass("Hide");
  $("#preloader").removeClass("Hide");

  $("#nav-icon3").click(function() {
    $("#nav-icon3").toggleClass("open");
  });

  if ($('body').hasClass('home')) {
    $('.homeSlides').bxSlider({adaptiveHeight: true, mode: 'fade', captions: true, pager: true, pagerType: 'long'});
  }

  if ($('body').hasClass('about')) {
    if(windowWidth > 1000){
      var maxHeight = 0;

      $(".aboutContainer > div").each(function() {
        if ($(this).height() > maxHeight) {
          maxHeight = $(this).height();
        }
      });

      $(".aboutContainer > div").height(maxHeight);
    }
  }

});
