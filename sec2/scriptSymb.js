'use strict';


// const obj = {
//     'name': 'Test',
//     [Symbol("id")]: 1,
//     getId: function() {
//         return this[id];
//     }
// }

// let id = Symbol("id");
// let id2 = Symbol("id");

// console.log(id == id2);
// obj[id] =1;

// console.log(obj);
// console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) console.log(value);

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol("id")]: 123
}

//Some code

myAwesomeDB.id = '3223343232';
console.log(myAwesomeDB["id"]);
console.log(myAwesomeDB);