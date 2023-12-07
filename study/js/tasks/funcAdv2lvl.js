// Место для первой задачи
function getTimeFromMinutes(minutes) {
    
    if (typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
        return 'Ошибка, проверьте данные';
    } 
    let hours = Math.floor(minutes / 60);
    if (hours < 10) {
        switch (hours) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return `Это ${hours} часов и ${minutes - hours * 60} минут`;
            case 1:
                return`Это ${hours} час и ${minutes - hours * 60} минут`;
            case 2:
            case 3:
            case 4:
                return`Это ${hours} часа и ${minutes - hours * 60} минут`;
        }
    } else {
        switch (hours % 10) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return `Это ${hours} часов и ${minutes - hours * 60} минут`;
            case 1:
                return `Это ${hours} час и ${minutes - hours * 60} минут`;
            case 2:
            case 3:
            case 4:
                return `Это ${hours} часа и ${minutes - hours * 60} минут`;
        }
    }
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(600));
console.log(getTimeFromMinutes(1980));
console.log(getTimeFromMinutes(2040));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));


// Место для второй задачи
function findMaxNumber(num1, num2, num3, num4) {
    if (num1 == null || 
        num2 == null ||
        num3 == null ||
        num4 == null) {
        return 0;
    }
    if (typeof(num1) !== 'number' || 
    typeof(num2) !== 'number' ||
    typeof(num3) !== 'number' ||
    typeof(num4) !== 'number') {
        return 0;
    }
    return Math.max(num1, num2, num3, num4);
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));