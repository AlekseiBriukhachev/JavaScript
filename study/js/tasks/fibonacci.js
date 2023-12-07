function fib(count) {
    if (typeof(count) !== 'number' || count <= 0 || !Number.isInteger(count)) {
        return '';
    }
    let result = '';
    let num1 = 0;
    let num2 = 1;
    for (let i = 0; i < count; i++) {
        if (i + 1 === count) {
            result += `${num1}`;
        } else {
            result += `${num1} `;
        }
        let num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return result;
}

console.log(fib(4));
console.log(fib(7)); 
console.log(fib('7'));
console.log(fib(1));
console.log(fib(0));