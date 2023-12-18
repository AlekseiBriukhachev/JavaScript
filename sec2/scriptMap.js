'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: () => {
        console.log(`${this.name} ${this.surname}`);
    }
}
//Перевод объекта в map
const userMap = new Map(Object.entries(user));
console.log(userMap);

//перевод map в объект
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);


const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
]
//Картами или map называются специфические структуры данных, которые очень похожи на объект
// только у них вместо свойств может использоваться и объект, и массив, и функция
// у них есть свои методы

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.get(shops[0]); //получение
// map.has(shops[0]); //если есть такой объект
// map.delete(key); //удаление
// map.clear(); // очистка целиком мапы
// map.size; //размер
// map.keys(); // получение объекта по ключам
// console.log(map.keys());

//Способы перебора map:
//1. Получение объекта по ключам
// const goods = [];
// for (let shop of map.keys()) {
//     // console.log(shop);
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

//2. Получение объекта по значениям
// for (let price of map.values()) {
//     console.log(price);
// }

//3. Entries
// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

//4. forEach
// map.forEach((value, key, map) => {
//     console.log(key, value);
// });