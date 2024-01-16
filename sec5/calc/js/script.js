'use strict';

const inputRub = document.querySelector('#rub'),
	inputUsd = document.querySelector('#usd');

//событие 'change' подсвечивает input пока он выбран
// inputRub.addEventListener('change', () => {
//событие 'input' отслеживает пока активный 'input'
inputRub.addEventListener('input', () => {
	//создается request
	const request = new XMLHttpRequest();

	// методы XMLHttpRequest
	//request.open(HttpMethod, url, asyncб login, password); - собирает настройки, которые потом помогут сделать запрос
	//AJAX запросы ао умолчанию являются асинхронными

	request.open('GET', 'js/current.json');
	// установка headers
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	// отпарвка запроса
	request.send();

	//свойства запроса
	// status - статус код
	// statusText - сообщение
	// response - ответ от сервера
	// readyState - текущее состояние зарпоса

	//'readystatechange' - остлеживает готовность запроса в данный текущий момент
	// request.addEventListener('readystatechange', () => { данный слушатель используется редко
	request.addEventListener('load', () => {
		// if (request.readyState === 4 && request.status === 200) {
		if (request.status === 200) {
			console.log(request.response);
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = 'что-то не то';
		}
	});

});