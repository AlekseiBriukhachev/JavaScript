// Место для первой задачи
function sayHello(someName) {
    return 'Привет, ' + someName;
}

console.log(sayHello('Антон'));

// Место для второй задачи
function returnNeighboringNumbers(argNumber) {
    return [argNumber - 1, argNumber, argNumber + 1];
}

console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(baseNumber, countNumber) {
    let result = baseNumber;
    if (typeof(countNumber) == 'number' && countNumber > 0){
        for (let i = 0; i < countNumber - 1; i++) {
            result += '---' + baseNumber * (2 + i);
        }
    }
    return result;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));
console.log(getMathResult(10, 5));
console.log(getMathResult(10, '5'));
console.log(getMathResult(10, 0));
console.log(getMathResult(20, -5));