$(function () {

  $(".menu,.header__inner").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.blog__items').slick({
    dots: true,
    arrows: false,
  });

  $('.menu__btn,.menu__link').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });

   let isAdded = false;
   $(window).scroll(function () {
     if ($(this).scrollTop() > 40 && !isAdded) {
       $('.header').addClass('header--scroll');
       isAdded = true;
     } else if ($(this).scrollTop() < 40 && isAdded) {
       $('.header').removeClass('header--scroll');
       isAdded = false;
     }
   });

  var mixer = mixitup('.gallery__content');


});