"use strict";

const arr = [1, 12, 5, 2, 11];
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}
//arr.pop();
//arr.push(10);

//console.log(arr);
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} Внутри массива ${arr}`);
});

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

for (let walue of arr) {
    console.log(walue);
}

// const str = prompt('', '');
// const products = str.split(',');
// products.sort();
// console.log(products.join(': '));