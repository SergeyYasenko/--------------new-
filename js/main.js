var element = document.getElementById('phone');
var maskOptions = {
   mask: '+7 (000) 000-00-00',
   lazy: true,
};

var mask = new IMask(element, maskOptions);

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



document.addEventListener('DOMContentLoaded', () => {
   const newYear = new Date('Oct 18 2021 00:00:00');

   const daysVal = document.querySelector('.time-count__days .time-count__val');
   const hoursVal = document.querySelector('.time-count__hours .time-count__val');
   const minutesVal = document.querySelector('.time-count__minutes .time-count__val');

   const daysText = document.querySelector('.time-count__days .time-count__text');
   const hoursText = document.querySelector('.time-count__hours .time-count__text');
   const minutesText = document.querySelector('.time-count__minutes .time-count__text');

   function declOfNum(number, titles) {
      let cases = [2, 0, 1, 1, 1, 2];
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
   }

   const timeCount = () => {
      let now = new Date();
      let leftUntil = newYear - now;

      let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
      let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(leftUntil / 1000 / 60) % 60;


      daysVal.textContent = days;
      hoursVal.textContent = hours;
      minutesVal.textContent = minutes;


      daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
      hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
      minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
   };

   timeCount();
   setInterval(timeCount, 1000);
});

$(document).ready(function(){
   $('.main__slider').slick({
      dots:true,
      adaptiveHeight:true,
      speed:400,
      autoplay:false,
      autoplaySpeed:5000,
      waitForAnimate:false,
   });
});