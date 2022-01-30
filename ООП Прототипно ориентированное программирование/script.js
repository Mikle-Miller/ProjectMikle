"use strict";

let str = 'some';
let newObj = new String(str);

//console.log(typeof(str));
//console.log(typeof(newObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

const John = Object.create(soldier);
// const John = {
//     health: 100
// };

//John.__proto__ = soldier; Старый вариант прототипа
//Object.setPrototypeOf(John,soldier); Более новый вариант
//console.log(John.armor);
John.sayHello();