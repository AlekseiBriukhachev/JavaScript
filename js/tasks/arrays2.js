const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) != 'string') {
        return 'Ошибка!';
    }
    // Самый оптимальный вариант решения
    // return str.split('').reverse().join('');
    let resultStr = '';
    for (let i = 0; i < str.length; i++) {
        resultStr += str.charAt(str.length - 1 - i);
    }
    return resultStr;
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    let str = 'Доступные валюты:\n';
    arr.forEach(currency => {
        if (currency !== missingCurr) {
            str += `${currency}\n`;
        }
    });
    return str;
}

console.log(availableCurr(additionalCurrencies, 'CNY'));
console.log(availableCurr(additionalCurrencies, 'UAH'));
console.log(availableCurr(baseCurrencies, 'EUR'));