// Slider
$(document).ready(function() {
  $('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Navigation

var fixed = false;

$(window).scroll(function() {
  var trigered = false;
  for (i = 0; i < $('.slide').length; i++) {
    $('#nav li')[i].classList.remove('active');
    if ($('.slide')[i].offsetTop + $('.slide')[i].offsetHeight > window.scrollY + window.outerHeight * 0.3) {
      if (!trigered) {
        $('#nav li')[i].className = 'active';
        history.replaceState({}, '', '#' + $('.slide')[i].id);
      }
      trigered = true;
    }
  }

  if (window.scrollY || window.pageYOffset > $('#navigation').offsetTop && !fixed) {
    fixed = true;
    $('#navigation').className = $('#navigation').className + ' fixed';
  } else if (window.scrollY || window.pageYOffset <= $('#navigation').offsetTop && fixed) {
    fixed = false;
    $('#navigation').classList.remove('fixed');
  }
});

smoothScroll.init();

// Fonts
WebFontConfig = {
  google: { families: [ 'Roboto+Condensed:400italic,700italic,400,700:latin' ] }
};
$(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
});
