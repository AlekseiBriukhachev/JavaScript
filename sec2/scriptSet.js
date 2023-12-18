'use strict';
//Особый вид коллекций по типу массива, где каждое значение может повторятся только один раз

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];
const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set = new Set(arr);

set.add('Ivan')
    .add('Oleg'); //добавить элемент


console.log(set);

//Базовые функции
// set.delete(value); //удаление
// set.has(value); // проверки если существует
// set.clear(); //полная очистка
// set.size; //размер

//Перебор
// for (let value of set) {
//     console.log(value);
// }
// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// });

//Встроенные методы
// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

//Функция помощник, которая фильтрует любой массив
function unique(arr) {
    return Array.from(new Set(arr));
}
console.log(unique(arr));