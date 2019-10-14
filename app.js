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
