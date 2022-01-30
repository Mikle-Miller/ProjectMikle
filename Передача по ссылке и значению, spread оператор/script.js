"use strict";

// let a = 5,
//     b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1,
// };

// const double = obj; // Сюда передается ссылка на объект

// double.a = 10;
// console.log(double);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 8,
    c: {
        1: 9,
        2: 12
    }
};
const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.a.c = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 15,
    e: 18
};
//console.log(Object.assign(numbers,add));
const clone = (Object.assign({}, add));
clone.d = 22;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c', ];

const newArray = oldArray.slice();
newArray[1] = 'jjj';
console.log(newArray);
console.log(oldArray);

const video = ['youTube', 'PornHub', 'Jango'],
    blogger = ['wordpress', 'liveJournal','blogger'],
    internet = [...video, ...blogger, 'VK', 'FaceBook'];

    console.log(internet);

    function log (a, b, c ){
        console.log(a);
        console.log(b);
        console.log(c);
    }
    const num = [2, 5, 7];
    log(...num);

    const array = [ 'fff', 'grfdd', 'cgsdvgfsd'];

    const newAarraay = [...array];

    const OOObj =  {
        one:1,
        two:2,
    };
    const newOObj = {...OOObj};
    console.log(newOObj);