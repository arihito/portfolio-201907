(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // birthday calcurator
  var yourBirthDay = {
      year: 1971,
      month: 11,
      date: 10
    };
    // Dateインスタンスに変換
  var birthDate = new Date(yourBirthDay.year, yourBirthDay.month - 1, yourBirthDay.date);
    // 文字列に分解
  var y2 = birthDate.getFullYear().toString().padStart(4, '0');
  var m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0');
  var d2 = birthDate.getDate().toString().padStart(2, '0');
    // 今日の日付
  var today = new Date();
  var y1 = today.getFullYear().toString().padStart(4, '0');
  var m1 = (today.getMonth() + 1).toString().padStart(2, '0');
  var d1 = today.getDate().toString().padStart(2, '0');
    // 引き算
  var age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000);
  $("#age").text(age);
})(jQuery); // End of use strict
