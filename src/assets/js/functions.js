/* ===========================
   Author: Bhargav Gandhi (BG)
   Description: functions.js
   =========================== */


 var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

 function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}


function checkBrowsers(){

    var version = detectIE();

    if (version === true) {
      $("body").addClass("itsIE");
    }else if (version === false){
      if(isSafari){
        $("body").addClass("itsSafari");
      }
    }
}

function setHeight() {
  return $(window).innerHeight();
};

function setWidth() {
  return $(window).innerWidth();
};

$(function() {
  checkBrowsers();
});
