// Slider

$(document).ready(function() {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

// Navigation

var fixed = true;
var body = document.body;
var nav = document.getElementById('navigation');
var menu = document.getElementById('nav');
var slides = document.getElementsByClassName('slide');

if (menu) var links = menu.getElementsByTagName('li');
if (nav) {
  var position = nav.offsetTop;
  window.onscroll = navigate;
}

function navigate(){
  var trigered = false;
  for (i = 0; i < slides.length; i++) {
    var slide = slides[i];
    links[i].classList.remove('active');
    if (slide.offsetTop + slide.offsetHeight > window.scrollY + window.outerHeight * 0.3) {
      if (!trigered) {
        links[i].className = 'active';
        history.replaceState({}, '', '#' + slide.id);
      }
      trigered = true;
    }
  }
}

function popup(event, e) {
  event.preventDefault();
  l = screen.width/2-300;
  t = screen.height/2-165;
  window.open(e.href, 'sharer','toolbar=0, status=0, left='+l+', top='+t+', width=600, height=330')
  return false
}

// smoot scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

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

// Gallery

$(document).ready(function() {
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image'
  });

  $('.gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled:true
        }
    });
  });
});

// collapse

$(document).ready(function() {
  $(".work").click(function () {
    $work = $(this);
    $content = $work.next();
    $text = $work.find('.expand');
    $content.slideToggle(500, function () {
      $text.text(function () {
        return $content.is(":visible") ? "-" : "+";
      });
    });
  });
});
