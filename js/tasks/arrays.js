const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const newFam = [];

function showFamily(arr) {
    let str = 'Семья состоит из: ';
    if (arr.length == 0) {
        return 'Семья пуста';
    }
    arr.forEach(name => {
        str += `${name} `});
    return str;
}

console.log(showFamily(family));
console.log(showFamily(newFam));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}
console.log(standardizeStrings(favoriteCities));

