const burger = document.querySelector('.burger');


$('.header__burger').click(function (event) {
   $('.header__burger, .menu__nav').toggleClass('active');
   $('.header').toggleClass('active');
   $('body').toggleClass('lock');
});
