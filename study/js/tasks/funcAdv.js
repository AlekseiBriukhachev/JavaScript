function calculateVolumeAndArea(length) {

    let volume,
        area;
    
    if (typeof(length) != 'number' || length < 0 || !Number.isInteger(length)) {
        return 'При вычислении произошла ошибка';
    }
    volume = length * length * length;
    area = 6 * length * length;
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

// Место для второй задачи
function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) != 'number' || seatNumber < 0  || !Number.isInteger(seatNumber)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    if (seatNumber === 0 || seatNumber >= 36) {
        return 'Таких мест в вагоне не существует';
    } 
    return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));