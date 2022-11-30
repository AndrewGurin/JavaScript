// Задание 1
console.log('Задание 1');
for (let i = 0; i <= 11; i++) {
    if (!i) console.log(`${i} - это ноль`);
    else if (i % 2) console.log(`${i} - нечётное число`);
    else console.log(`${i} - чётное число`);
}
console.log('\n');

// Задание 2
console.log('Задание 2');
const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2);
arr2.splice(3, 2)
console.log(arr2);
console.log('\n');

// Задание 3
console.log('Задание 3');
const randomizer = () => {
    return Math.floor(Math.random() * 10);
}
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) result += arr[i];
    return result;
}
function min(arr) {
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) minIndex = i;
    }
    return arr[minIndex];
}
function numSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            return true;
        }
    }
    return false;
}
const arr3 = [];
for (let i = 0; i < 5; i++) arr3.push(randomizer());
console.log(arr3);
console.log(sum(arr3));
console.log(min(arr3));
console.log(numSearch(arr3, 3) ? 'Число 3 есть.' : 'Числа 3 нет.');
console.log('\n');

// Задание 4
console.log('Задание 4');
const arr4 = [];
for (let i = 0; i < 10; i++) {
    arr4.push(randomizer());
    console.log(arr4);
    if (arr4[i]) {
        // Если число кратно и 2, и 3, то возводится оно и в квадрат, и в куб.
        if (!(arr4[i] % 2) && !(arr4[i] % 3)) console.log(arr4[i] ** 6);
        else if (!(arr4[i] % 2)) console.log(arr4[i] ** 2);
        else if (!(arr4[i] % 3)) console.log(arr4[i] ** 3);
    }
}
console.log('\n');

// Задание 5
console.log('Задание 5');
const arr5 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0;
for (let i = 0; i < arr5.length; i++)
    if (arr5[i] === 3) count++;
console.log(count);

// Задание 6
console.log('Задание 6');
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(1, 2);
console.log(arr6);

// Необязательное задание
console.log('Необязательное задание');
let str = '';
for (let i = 0; i < 20; i++) {
    str = str + 'X';
    console.log(str);
}