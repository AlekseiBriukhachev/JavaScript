let num = 20;
function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello World!');
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

console.log(calc(4, 3));

const logger = function() {
    console.log('Hello');
};
logger();

const calc = (a, b) => a + b;
console.log(calc);