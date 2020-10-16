$(function () {

   $('.gallery__slider').slick({
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/prevarrow.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/nextarrow.svg" alt="">'
   });

   const burger = document.querySelector('.burger');

   $('.header__burger').click(function (event) {
      $('.header__burger, .wrapper__menu').toggleClass('active');
      $('.header').toggleClass('active');
      $('body').toggleClass('lock');
   });

   // ! scroll class
   window.onscroll = () => {
      const header__burger = document.querySelector('.header__burger');
      const Y = window.scrollY;

      if (Y > 605) {
         header__burger.classList.add('blackBurger');
      } else if (Y < 605) {
         header__burger.classList.remove('blackBurger');
      }
   };

});