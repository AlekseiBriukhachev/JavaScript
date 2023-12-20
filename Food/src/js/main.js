'use strict';

window.addEventListener('DOMContentLoaded', () => {
	//Tabs
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	//Timer

	const deadline = '2023-12-21T09:00:00';
	// getDateFromString('<span class="deadline">20 мая в 00:00</span>');

	function getDateFromString(dateString) {
		let match = /(\d{1,2}\s[а-я]+\s\d{1,2}:\d{2})/.exec(dateString);
		let dateStringConv = match ? match[1] : null;
		let dateObject = dateStringConv ? new Date(dateStringConv) : null;
		if (dateObject) {
			let formattedDate = dateObject.toISOString().slice(0, 19).replace('T', ' ');
			console.log(formattedDate);
		} else {
			console.log('Не удалось извлечь дату из строки.');
		}
	}

	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;
		const t = Date.parse(endtime) - Date.parse(new Date());

		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
				hours = Math.floor((t / (1000 * 60 * 60) % 24)),
				minutes = Math.floor((t / (1000 * 60) % 60)),
				seconds = Math.floor((t / 1000) % 60);
		}

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadline);


	// Modal
	// Классы **hide** и **show** добавляем сами в css **_Animation** например
	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-close]');

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', () => {
			// modal.classList.add('show');
			// modal.classList.remove('hide');
			// document.body.style.overflow = 'hidden';

			// DRY
			openModal();

		});
	});

	modalCloseBtn.addEventListener('click', () => {
		// modal.classList.add('hide');
		// modal.classList.remove('show');
		// document.body.style.overflow = '';

		//DRY
		closeModal();
	});

	//Вариант с toggle()
	// modalTrigger.addEventListener('click', () => {
	// 	modal.classList.toggle('show');
	// 	document.body.style.overflow = 'hidden';
	// });
	// modalCloseBtn.addEventListener('click', () => {
	// 	modal.classList.toggle('show');
	// 	document.body.style.overflow = '';

	//DRY
	// closeModal();
	// });

	//А можно ли сделать, чтобы модальное окно закрывалось по клику на **background** или по клику на клавишу **ESC**
	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			// modal.classList.add('hide');
			// modal.classList.remove('show');
			// document.body.style.overflow = '';

			//DRY
			closeModal();
		}
	});
	//DRY - **D**ont **R**epeat **Y**ourself - не повторять код, который есть в скриптах

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
	}
	//[JavaScript Key Code](https://www.toptal.com/developers/keycode)
	//Реакция на клавиаши клавиатуры
	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});
});
