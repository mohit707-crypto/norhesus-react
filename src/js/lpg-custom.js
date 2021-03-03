$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function () {

  $(window).on('scroll', function () {
    if ($('.custom-btn').eq(0).isInViewport() ||
      $('.custom-btn').eq(1).isInViewport() ||
      $('.custom-btn').eq(2).isInViewport() ||
      $('.custom-btn').eq(3).isInViewport() ||
      $('.custom-btn').eq(4).isInViewport() ||
      $('.custom-btn').eq(5).isInViewport() ||
      $('.custom-btn').eq(6).isInViewport() ||
      $('.custom-btn').eq(7).isInViewport()) {
      $('.stickybtn').addClass('hidebtn');
    }
    else {
      $('.stickybtn').removeClass('hidebtn');;
    }
  });

  $('#slider_1').slick({
    lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    centerMode: true,
    asNavFor: '#slider_nav_1'
  });
  $('#slider_nav_1').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '#slider_1',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow: "<i class='fal fa-arrow-left left slick-arrow'></i>",
    nextArrow: "<i class='fal fa-arrow-right right slick-arrow'></i>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      }],
  }).on('setPosition', function (event, slick) {
    heightfun();
  });

  $('.stylebtn,.inch,.weightbtn').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(this).siblings().css('background-color', '#ffffff');
    if($(this).hasClass('active')){
      $(this).css('background-color', '#fcf5cb');
    }

  });

  /* scroll to target */
  jQuery('.scrollTo').click(function (e) {
    var jump = jQuery(this).attr('href');
    var new_position = jQuery(jump).offset();
    jQuery('html, body').stop().animate({ scrollTop: new_position.top }, 800);
    e.preventDefault();
  });

  /* initialize fancybox */
  $(".fancybox").fancybox();




  /*faq*/
  $('.first-acoord').addClass('openaccord');
  $('.first-acoord .accord-title').addClass('close-slide');
  $(".accord-title").click(function () {
    $(this).toggleClass("close-slide");
    $(this).next(".accord-body").slideToggle();
    $(".accord-body").not($(this).next(".accord-body")).slideUp();
    $(".accord-title").not($(this)).removeClass("close-slide");
    $(this).parent().toggleClass('openaccord');
    $(this).parent().siblings().removeClass('openaccord');
  });


  /*reviewslider*/
  $('.reviewsllides').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: 'ondemand',
    prevArrow: "<i class='fal fa-chevron-left left slick-arrow'></i>",
    nextArrow: "<i class='fal fa-chevron-right right slick-arrow'></i>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


  $('.clientslider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: 'ondemand',
    prevArrow: "<i class='fas fa-chevron-left left slick-arrow'></i>",
    nextArrow: "<i class='fas fa-chevron-right right slick-arrow'></i>",
  });


  $('.galleryslider').slick({
    centerMode: true,
    centerPadding: '260px',
    slidesToShow: 3,
    dots:false,
    arrows:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '110px',
        }
      },
      {
        breakpoint: 575,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }).on('setPosition', function (event, slick) {
    galleryHeight();
  });



  $(".afterload").fancybox({
    afterLoad: function(){
      $('#upsellslide').slick('setPosition');
    }
  });




  String.prototype.getDecimals || (String.prototype.getDecimals = function () {
    var a = this,
      b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
  });
  jQuery(document).on("click", ".plus, .minus", function () {
    var a = jQuery(this).closest(".quantity").find(".qty"),
      b = parseFloat(a.val()),
      c = parseFloat(a.attr("max")),
      d = parseFloat(a.attr("min")),
      e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
    a.attr('value', a.val());
  });

  var galleryHeight = function () {
    $('.galleryslider .slick-slide').each(function () {
      var widthslide = $(this).width();
      $(this).css('height', widthslide)
    })
  }


  var heightfun = function () {
    $('.pronigimg .slick-slide').each(function () {
      var widthslide = $(this).width();
      $(this).css('height', widthslide)
    })
  }

  document.addEventListener('lazybeforeunveil', function (e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
      e.target.style.backgroundImage = 'url(' + bg + ')';
    }
  });

  $('.gocheck').on('click', function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      // window.location.hash = target;
    });
  });

  $(".featurelist li").click(function () {
    if ($(this).find('input[type="radio"]').prop("checked") == false) {
      //alert("Checkbox is unchecked.");
      $(this).find('input[type="radio"]').prop("checked", true);
      $(this).addClass('activecolor');
      $(this).siblings().removeClass('activecolor');
    }
  });


  $('.benefitdesc,.procesttl ').matchHeight({ byRow: true });

  $(".swatch-element").click(function () {
    if ($(this).find('input[type="radio"]').prop("checked") == false) {
      //alert("Checkbox is unchecked.");
      $(this).find('input[type="radio"]').prop("checked", true);
      $(this).addClass('activecolor');
      $(this).siblings().removeClass('activecolor');
    }
  });
});