$(function() {

  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.height();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function() {

    scrollPos = $(this).scrollTop();

    if (scrollPos > introH){
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }

  });



  header.addClass("fixed");

});

// vegan

$(function() {

  let filter = $("[data-filter]");

  filter.on("click", function(event) {
    event.preventDefault();

    $("[data-cat]").toggleClass("hide");
    $('.checkbox__arrow').toggleClass("show");

  });

});

// vegan close

// slick https://kenwheeler.github.io/slick/

$('[data-slider="slick"]').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
});

$('.slickPrev').on('click', function (event) {
  event.preventDefault();

  let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
  currentSlider.slick('slickPrev');
});

$('.slickNext').on('click', function (event) {
  event.preventDefault();

  let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
  currentSlider.slick('slickNext');
});

// slick close

