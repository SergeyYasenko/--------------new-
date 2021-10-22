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