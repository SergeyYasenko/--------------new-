// маска для телефона
var element = document.querySelector('.feedback__tel');
var maskOptions = {
   mask: '+7 (000) 000-00-00',
   lazy: true,
};

var mask = new IMask(element, maskOptions);

// ТАБЫ

document.querySelectorAll('.transportation__title').forEach((item) =>
   item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.transportation__title').forEach((child) => child.classList.remove('transportation__title--active'));

      document.querySelectorAll('.main__card-block').forEach((child) => child.classList.remove('main__card-block--active'));

      item.classList.add('transportation__title--active');
      document.getElementById(id).classList.add('main__card-block--active');

   })
);

document.querySelector('.transportation__title').click();

// СЧЕТЧИК

document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('Jan 1 2022 00:00:00');
	
	const daysVal = document.querySelector('.time-count__days .time-count__val');
	const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
	const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

	const daysText = document.querySelector('.time-count__days .time-count__text');
	const hoursText = document.querySelector('.time-count__hours .time-count__text');
	const minutesText = document.querySelector('.time-count__minutes .time-count__text');
	const secondsText = document.querySelector('.time-count__seconds .time-count__text');

	function declOfNum(number, titles) {  
		let cases = [2, 0, 1, 1, 1, 2];  
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newYear - now;
		
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		daysVal.textContent = days;
		hoursVal.textContent =	hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
	};

	timeCount();
	setInterval(timeCount, 1000);
});

// SLICK CLIDER

$(document).ready(function () {
   $('.main__slider').slick({
      dots: true,
      adaptiveHeight: true,
      speed: 400,
      autoplay: false,
      autoplaySpeed: 5000,
      waitForAnimate: false,
      touchThreshold: 12,
   });
});


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

// ПОДКЛЮЧЕНИЕ ОБРАТНОЙ СВЯЗИ

let validateForms = function(selector, rules, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
                  alert('Заявка отправлена! Спасибо что выбрали нас!!!')
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();
      }
   });
}

validateForms('.feedback__form', { name: {required: true}, tel: {required: true} }, 'thanks-popup', 'send goal');