"use strict";
// To string

// 1)
console.log(typeof (String(null)));

// 2)
console.log(typeof (5 + ''));

const num = 5;

console.log('https://vk.com/gallery/' + num);

const fontSize = 26 + 'px';

// To number
// 1)
console.log(typeof (Number('4')));
// 2)
console.log(typeof (+'4'));
console.log(typeof (parseInt('15px', 10)));

// To boolean
// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}
// 2)
console.log(typeof (Boolean('4')));
// 3)
console.log(typeof (!!'444'));
