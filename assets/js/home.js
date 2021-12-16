$(document).ready(function () {
  $('.header nav').on('click', 'a', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  $('.header').on('click', '.link', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  $('.menu_mobile nav').on('click', 'a', function (event) {
    $('.menu_mobile').removeClass('active')
    $('.cloze-menu').removeClass('active')
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  $('.link_js').on('click', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  $('.cloze-menu').on('click', function (event) {
    $('.menu_mobile').toggleClass('active')
    $('.cloze-menu').toggleClass('active')
  })

  jcf.replaceAll()

  var numbersSlider = $('.numbers_slider')

  numbersSlider.on('init', function (event, slick) {
    $('.numbers_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  numbersSlider.on('afterChange', function (event, slick, currentSlide) {
    $('.numbers_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  numbersSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  if ($(window).width() < 1024) {
    var infrastructureSlider = $('.infrastructure_slider')

    infrastructureSlider.on('init', function (event, slick) {
      $('.infrastructure_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
    })

    infrastructureSlider.on('afterChange', function (event, slick, currentSlide) {
      $('.infrastructure_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
    })

    infrastructureSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })

    var howToGetItem = $('.how_to_get_slider')

    howToGetItem.on('init', function (event, slick) {
      $('.how_to_get_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
    })

    howToGetItem.on('afterChange', function (event, slick, currentSlide) {
      $('.how_to_get_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
    })

    howToGetItem.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
    })

    var registrationSlider = $('.registration_slider')

    registrationSlider.on('init', function (event, slick) {
      $('.registration_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
    })

    registrationSlider.on('afterChange', function (event, slick, currentSlide) {
      $('.registration_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
    })

    registrationSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })

    var housesLayoutsSlider = $('.houses_layouts_slider')

    housesLayoutsSlider.on('init', function (event, slick) {
      $('.houses_layouts_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
    })

    housesLayoutsSlider.on('afterChange', function (event, slick, currentSlide) {
      $('.houses_layouts_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
    })

    housesLayoutsSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })

    var popupLayoutsSlider = $('.popup_layouts_slider')

    popupLayoutsSlider.on('init', function (event, slick) {
      $('.popup_layouts_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
    })

    popupLayoutsSlider.on('afterChange', function (event, slick, currentSlide) {
      $('.popup_layouts_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
    })

    popupLayoutsSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  }

  $('.discounted_slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  })

  $('.numbers_item p').matchHeight({
    byRow: true,
  })

  $('.infrastructure_item span').matchHeight({
    byRow: true,
  })

  $('.infrastructure_slider li').matchHeight({
    byRow: false,
  })

  var housesSlider = $('.houses_slider')

  housesSlider.on('init', function (event, slick) {
    $('.houses_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  housesSlider.on('afterChange', function (event, slick, currentSlide) {
    $('.houses_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  housesSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  var layoutsSlider = $('.layouts_slider')

  layoutsSlider.on('init', function (event, slick) {
    $('.layouts_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  layoutsSlider.on('afterChange', function (event, slick, currentSlide) {
    $('.layouts_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  layoutsSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
  })

  $('.how_to_get_item').matchHeight({
    byRow: false,
  })

  var portfolioSlider = $('.portfolio_slider')

  portfolioSlider.on('init', function (event, slick) {
    $('.portfolio_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  portfolioSlider.on('afterChange', function (event, slick, currentSlide) {
    $('.portfolio_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  portfolioSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  $('.portfolio_slider_item').matchHeight({
    byRow: false,
  })

  $('.portfolio_slider_item .text h3').matchHeight({
    byRow: false,
  })

  var ourPartnersSlider = $('.our_partners_slider')

  ourPartnersSlider.on('init', function (event, slick) {
    $('.our_partners_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  ourPartnersSlider.on('afterChange', function (event, slick, currentSlide) {
    $('.our_partners_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  ourPartnersSlider.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  })

  var ourMortgageSlider = $('.our_mortgage_slider')

  ourMortgageSlider.on('init', function (event, slick) {
    $('.our_mortgage_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  ourMortgageSlider.on('afterChange', function (event, slick, currentSlide) {
    $('.our_mortgage_count').html(parseInt(slick.currentSlide + 1) + '<span>/' + slick.slideCount + '</span>')
  })

  ourMortgageSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  })

  $('.our_partners_logo').matchHeight({
    byRow: false,
  })

  $(function () {
    $('*[placeholder="Введите телефон"]*').mask('+7 (000) 000 - 00 - 00')
  })

  $('.to-up a').on('click', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 900)
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $('.to-up').addClass('show')
    } else {
      $('.to-up').removeClass('show')
    }
  })

  // $('.close').on('click', function (event) {
  //   $('.popup').removeClass('active')
  //   $('video-wrapper iframe').attr('scr', '')
  // })

  // $('.close_popup').on('click', function (event) {
  //   $('.popup').removeClass('active')
  //   $('video-wrapper iframe').attr('scr', '')
  // })

  $('.house_layouts_js').on('click', function (event) {
    $('.house_layouts').addClass('active')
  })

  $('.calculation_js').on('click', function (event) {
    $('.calculation').addClass('active')
  })

  $('.installment_js').on('click', function (event) {
    $('.installment').addClass('active')
  })

  $('.mortgage_js').on('click', function (event) {
    $('.mortgage').addClass('active')
  })

  $('.video_js').on('click', function (event) {
    var dataVideo = $(this).data('video')
    $('video-wrapper iframe').attr('scr', dataVideo)
    $('.video').addClass('active')
  })

  $('.close').on('click', function (event) {
    $('.popup').removeClass('active')
    $('video-wrapper iframe').attr('scr', '')
  })

  $('.close_popup').on('click', function (event) {
    $('.popup').removeClass('active')
    $('video-wrapper iframe').attr('scr', '')
  })
})
