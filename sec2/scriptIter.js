'use strict';

//Отличия for-of от for-in [for..in versus for..of Loops] (https://bitsofco.de/for-in-vs-for-of/)

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: () => {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

//for-in при использовании на объекте, массиве или строке будет работать с каждой сущностью по порядку, которая является перечисляемой
// получает ключ
//[for...of](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of)
// for (const key in user) {
//     console.log(user[key]);
// }

// const arr = ['b', 'a', 'c'];
// for (const key in arr) {
//     console.log(arr[key]);
// }

// const str = 'string';
// for (const key in str) {
//     console.log(str[key]);
// }

//есть проблема - может быть такое, что перебор будет идти не по порядку
// не рекомендуется применять на массивах и строках

// В ES6 стандарте бл введен цикл for-of - он проходится по значениям перебираемого объекта
// получает значение

// const arr = ['b', 'a', 'c'];
// for (const key of arr) {
//     console.log(key);
// }
// for (const key of user) {
//     console.log(user[key]);
// }
//возникает ошибка - объект не перебираемый
// Перебираемый или итерируемый объект - это тот объект, который мы можем использовать в for-of
// определяется тем, если у этой сущности есть символ **.iterator**
// перебираемые сущности - массивы, строки, типизированные массивы, set, map, DOM-колликции 

// Преимущества:
// 1. Строгое соответствие порядка в переборе - как оно было записано в оригинале, так оно и будет выполнятся
// 2. Исключение всех лишних свойств, которые могут быть унаследованы.

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function() {};
// console.dir(arr);
// for (const key in arr) {
//     console.log(key);
// }
// в косоль выводится 0, 1, 2, someMethod
// for (const key of arr) {
//     console.log(key);
// }
// в косоль выводится b, a, c отбрасывается прототипный наследванный метод

//Как добавить символ **.iterator** к обычному объекту ([How to iterate over a JavaScript object?](https://stackoverflow.com/questions/14379274/how-to-iterate-over-a-javascript-object))
//Дословно: итератор - это метод, который возвращает объект с методом **next()**
// итератор приходится создавать вручную

const salaries = {
	john: 500,
	ivan: 1000,
	ann: 5000,
	sayHello: () => {
		console.log('Hello');
	}
};

salaries[Symbol.iterator] = function() {
	return {
		current: this.john,
		last: this.ann,

		next() {
			if (this.current < this.last) {
				this.current += 500;
				return {done: false, value: this.current};
			} else {
				return {done: true};
			}
		}
	};
};

// for (let res of salaries) {
//     console.log(res);
// }

// Вместо for-of можно итератор вызывать вручную:
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());