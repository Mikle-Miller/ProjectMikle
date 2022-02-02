"use strict";

let box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); //[1];
console.log(btns[0]); // Либо тут указать либо при получении элемента

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(hearts);
});

const oneHeart = document.querySelector('heart');
console.log(oneHeart);