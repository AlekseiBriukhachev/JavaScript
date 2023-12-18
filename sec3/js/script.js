const btns = document.querySelectorAll('button');
        

// console.log(btns[0].classList.length)
// console.log(btns[0].classList.item(0))
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red')
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

// Делегирование событий
// Мы берем элемент, который является родителем, и работаем с ним - назначаем обработчик событий на родителя
//а внутри мы будем проверять на что мы кликнули
const wrapper = document.querySelector('.btn-block');
wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});

// ОШИБКА ДЕЛЕГИРОВАНИЯ, ПОТОМУ ЧТО ЭТОТ ПЕРЕБОР НИЧЕГО НЕ ЗНАЕТ О НОВО СОЗДАННОЙ КНОПКЕ И РАБОТАЕТ ТОЛЬКО ПРО СУЩЕСТВУЮЩИЕ КНОПКИ
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

//Еще один способ, который любят сотрудники Google - использование метода `matches()`
//по-простому это какой-то элемент совпадает с чем-то
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }
});