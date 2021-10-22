// ACCORDION

$(document).ready(function () {
   $('.accordion-right__block-title').click(function (_event) {
      if ($('.questions__accordion-right').hasClass('one')) {
         $('.accordion-right__block-title').not($(this)).removeClass('active');
         $('.accordion-right__block-text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

$(document).ready(function () {
   $('.accordion-left__block-title').click(function (_event) {
      if ($('.questions__accordion-left').hasClass('one')) {
         $('.accordion-left__block-title').not($(this)).removeClass('active');
         $('.accordion-left__block-text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

// ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРНЫМ ССЫЛКАМ

const menuLinks = document.querySelectorAll('.nav[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.full-screen__navigation').offsetHeight;

         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            fullScreenInfoRow.classList.remove('_active');
            fullScreenInfo.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}