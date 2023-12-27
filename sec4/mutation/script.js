'use strict';

const box = document.querySelector('.box');

// Создадим сущность которая будет следить за этим элементом
let observer = new MutationObserver(mutationRecord => {
	console.log(mutationRecord);
});

//Следит за элементом, если что-то в нем меняется, то выполняй эту функцию
observer.observe(box, {
	childList: true
});

observer.disconnect();