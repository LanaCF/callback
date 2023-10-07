// Повертає ВСІ елементи, які відповідают певній умові, 
// наприклад, знайти користувачів меньше 30 років
// Видалити перший елемент, який знайдеться
// Видаляє всі елементи, що відповідають певній умові
// Повернути елементи, які залишилися, а не видалені

const students = [
    { name: 'Ivan', age: 20 },
    { name: 'Petro', age: 30 },
    { name: 'Yulia', age: 25 },
    { name: 'Tanya', age: 27 },
    { name: 'Tanya', age: 30 },
    { name: 'Vasya', age: 20 },
    { name: 'Tanya', age: 57 },
    { name: 'Ivan', age: 20 },
];

console.log(students);

console.log('*******************************');
console.log('FILTER');

// console.log(mainFilter(students, callback));

const filter1 = functCall(
    students, 
    function(students) {
        return students.name === 'Tanya' && students.age <= 30;
    }
)

console.log(filter1);

const filter2 = functCall(
    students, 
    function(students) {
        return students.age <= 25;
    }
)

console.log(filter2);

const filter3 = functCall(
    students, 
    function(students) {
        return students.name === 'Ivan';
    }
)

console.log(filter3);

const filter4 = functCall(
    students, 
    function(students) {
        return students.age === 20;
    }
)

console.log(filter4);


const students2 = [
    { name: 'Ivan', age: 20 },
    { name: 'Petro', age: 30 },
    { name: 'Yulia', age: 25 },
    { name: 'Tanya', age: 27 },
    { name: 'Tanya', age: 30 },
    { name: 'Vasya', age: 20 },
    { name: 'Tanya', age: 57 },
    { name: 'Ivan', age: 20 },
];

const students3 = [
    { name: 'Ivan', age: 20 },
    { name: 'Petro', age: 30 },
    { name: 'Yulia', age: 25 },
    { name: 'Tanya', age: 27 },
    { name: 'Tanya', age: 30 },
    { name: 'Vasya', age: 20 },
    { name: 'Tanya', age: 57 },
    { name: 'Ivan', age: 20 },
];

const students4 = [
    { name: 'Ivan', age: 20 },
    { name: 'Petro', age: 30 },
    { name: 'Yulia', age: 25 },
    { name: 'Tanya', age: 27 },
    { name: 'Tanya', age: 30 },
    { name: 'Vasya', age: 20 },
    { name: 'Tanya', age: 57 },
    { name: 'Ivan', age: 20 },
];


console.log('*******************************');
console.log('DELETE ITEM');

const delItem1 = functCall2(
    students2,
    function(students2) {
        return students2.name === 'Tanya' && students2.age > 30;
    }
);

console.log(delItem1);

const delItem2 = functCall2(
    students3,
    function(students3) {
        return students3.name === 'Ivan' && students3.age === 20;
    }
);

console.log(delItem2);

const delItem3 = functCall2(
    students4,
    function(students4) {
        return students4.name === 'Tanya';
    }
);

console.log(delItem3);



const students5 = [
    { name: 'Ivan', age: 20 },
    { name: 'Petro', age: 30 },
    { name: 'Yulia', age: 25 },
    { name: 'Tanya', age: 27 },
    { name: 'Tanya', age: 30 },
    { name: 'Vasya', age: 20 },
    { name: 'Tanya', age: 57 },
    { name: 'Ivan', age: 20 },
];


console.log('*******************************');
console.log('DELETE ITEMS');

const delItems1 = functCall3(
    students5,
    function(students5) {
        return students5.name === 'Tanya' || students5.name === 'Ivan';
    }
);

console.log(delItems1);


// ----------------------------------------
// Ще варіант callback

// function functCall(arr, callback) {
//     let array = arr;

//     for (let i = 0; i < arr.length; i++) {
//         let array = arr[i];

//         if (callback(array, i)) {
//             return (`${i}. ${arr[i].name} - ${arr[i].age} years old`);
//         }
//     }
// }

// ----------------------------------------

function functCall(arr, callback) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (callback(arr[i])) {
            array.push(arr[i]);
        }
    }

    return array;
}

function functCall2(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        
        if (callback(arr[i])) {
            arr.splice(i, 1);
            i--;
            break;
        }
    }

    return arr;
}

function functCall3(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        
        if (callback(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
}