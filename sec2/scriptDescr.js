'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    // birthday: '20/04/1993',
    showMyPublicData: () => {
        console.log(`${this.name} ${this.surname}`);
    }
}

// writable     ->  если флаг true, то сваойства в объекте можно изменить,
//                  если нет, то свойства только для чтения
// enumerable   ->  если флаг true, свойство будет перечисляться в циклах,
//                  если нет, то циклы будут его игнорировать
// configurable ->  если флаг true, то свойство можно удалить, а аттрибуты можно изменить
//                  если нет, то делать этого нельзя

//ПРИМЕР 1 - С ПРИМЕНЕНИЕМ ФЛАГА WRITABLE

// Object.defineProperty(user, 'birthday', {
//     value: prompt('Date?'), 
//     enumerable: true,
//     configurable: true
// });

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// Object.defineProperty(user, 'name', {writable: false});
//ОШИБКА!
// user.name = 'kjhscsac';
// Object.defineProperty(user, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
//у этого созданного свойства все флаги установлены дефолт в false

//ПРИМЕР 2 - С ПРИМЕНЕНИЕМ ФЛАГА ENUMERABLE

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) console.log(key);

//ПРИМЕР 3 - С ПРИМЕНЕНИЕМ ФЛАГА CONFIGURABLE
//дорога в один конец - после установки этого флага, объект переставет реагировать
// на Object.defineProperty()


// Изменение сразу несколько свойств

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});
//КОНЕЦ С ФЛАГАМИ

// ПОЛЕЗНЫЕ МЕТОДЫ

// Object.preventExtensions() - предотвращает любое расширение объектов
// блокирует добавление данных в объект

// Object.seal() - "запечатывает" объект
// предотвращает добавление новых свойств к объекту и делает все существующие свойства ненастраиваемые

// Object.freeze() - замораживает объект, запрещает какие-либо изменения объекта

// Object.is() - сравнивает два объектапо значению

// Object.keys() - возвращает массив (ключей) из собственных перечисляемых свойств переданного объекта
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// Object.values() - возвращает массив значений перечисляемых свойств объекта
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values

// Object.entries() - возращает массив собственных перечисляемых свойств объекта
// в формате (ключ, значение)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries



