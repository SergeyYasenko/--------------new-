// ГАМБУРГЕР

const fullScreenInfoRow = document.querySelector('.full-screen__info-row');
const fullScreenInfo = document.querySelector('.full-screen__info');
const iconMenu = document.querySelector('.burger');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      fullScreenInfoRow.classList.toggle('_active');
      fullScreenInfo.classList.toggle('_active');
   });
}