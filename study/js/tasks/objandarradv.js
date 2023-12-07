const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let sortedArray = arr.sort();
    let firstGroup = [];
    let secondGroup = [];
    let thirdGroup = [];
    let studentsWithoutGroup = [];
    for (let i = 0; i < sortedArray.length; i++) {
        if (i < 3) {
            firstGroup.push(sortedArray[i]);
        } else if (i < 6) {
            secondGroup.push(sortedArray[i]);
        } else if (i < 9) {
            thirdGroup.push(sortedArray[i]);
        } else {
            studentsWithoutGroup.push(sortedArray[i]);
        }
    }
    return [firstGroup, secondGroup, thirdGroup, `Оставшиеся студенты: ${studentsWithoutGroup.length === 0 ? '-' : studentsWithoutGroup.join(', ')}`];
}
console.log(sortStudentsByGroups(students));