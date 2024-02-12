const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const cross=document.querySelector('#cross');

burger.addEventListener('click', (e) => {
//   if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    cross.classList.remove('hidden');
    burger.classList.add('hidden');
//   } 
//   else {
//     menu.classList.add('hidden');
//   }
});
cross.addEventListener('click', (e) => {
//   if (cross.classList.contains('hidden')) {
//     menu.classList.remove('hidden');
//     cross.classList.remove('hidden');
//     burger.classList.add('hidden');
//   } 
//   else {
    menu.classList.add('hidden');
    cross.classList.add('hidden');
    burger.classList.remove('hidden');
//   }
});