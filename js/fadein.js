"use strict";

$(document).ready(function () {
    $(window).scroll(function () {
      $(".mensheadspa-text").each(function (i) {
        const bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        const bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
          $(this).animate({ opacity: '1' }, 1000);
        }
      });
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      $(".photo-container").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).animate({ opacity: '1' }, 2000);
        }
      });
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      $(".ttlnousenjyomenu").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).animate({ opacity: '1' }, 1500);
        }
      });
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      $(".feature1").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).animate({ opacity: '1' }, 1500);
        }
      });
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      $(".feature2").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).animate({ opacity: '1' }, 1500);
        }
      });
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      $(".feature3").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).animate({ opacity: '1' }, 1000);
        }
      });
    });
  });

    $(document).ready(function () {
    $(window).scroll(function () {
      $(".question").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).animate({ opacity: '1' }, 1500);
        }
      });
    });
  });