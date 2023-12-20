'use strict';

// Для запуска функции через определнное время есть функция `setTimeout()`

// Анонимная функция (без аргумента)
// const timerId = setTimeout(function() {
//     console.log('Hello');
// }, 2000);

// Функция с аргументом
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');

// Передача функции без обявления (только название функции)
// const timerId = setTimeout(logger, 2000);

// function logger() {
//     console.log('text');
// }

//Когда записываем `const timer = setTimeout(logger, 2000);` в таком виде, мы записываем числовой идентификатор этого таймера


// Сброс определенного таймера
// clearInterval(timerId);

//Функция для повторения через определенный интервал,а не один раз, есть функция `setInterval()`

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;
// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);

// });
// clearInterval(timerId);
// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

//Анимация
const btn = document.querySelector('.btn');
let timerId;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);