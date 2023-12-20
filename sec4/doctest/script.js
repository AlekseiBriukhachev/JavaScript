'use strict';

const box = document.querySelector('.box');

// const width = box.clientWidth;
// const heigth = box.clientHeight;
// const width = box.offsetWidth;
// const heigth = box.offsetHeight;
const width = box.scrollWidth;
const heigth = box.scrollHeight;

console.log(width, heigth);

//Раскрытие содержимого окна прокрутки по нажатию на кнопку
const btn = document.querySelector('button'),
	scrollHeight = box.scrollHeight,
	boxHeigth = box.offsetHeight,
	listed = document.querySelector('.progress');


btn.addEventListener('click', () => {

	//при нажатии на кнопку переключает видимое окно на полную высоту содержимого или обратно сворачивает
	if (box.offsetHeight >= scrollHeight) {
		box.style.height = boxHeigth + 'px';
	} else {
		box.style.height = scrollHeight + 'px';
	}
	const boxCoordinates = box.getBoundingClientRect();
	console.log(boxCoordinates);
});
// Прогресс прочитанного в окне прокрутки
box.addEventListener('scroll', () => {
	let scrolled = box.scrollTop;
	listed.innerHTML = Math.floor((scrolled / (scrollHeight - box.clientHeight)) * 100);
});
// Получение координат объекта
const boxCoordinates = box.getBoundingClientRect();
console.log(boxCoordinates);