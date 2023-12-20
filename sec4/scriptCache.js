'use strict';

//Кэшировние пользователей

let cache = new WeakMap();

//функция кэширования пользователей
function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

//добавились Лена, Алекс
let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

//кэширование пользователей
cacheUser(lena);
cacheUser(alex);

//Лена вышла в офлайн
lena = null;

//Проверка активных пользователей
console.log(cache.has(lena));
console.log(cache.has(alex));