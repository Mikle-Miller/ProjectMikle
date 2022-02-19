'use strict';

const box = document.querySelector('.box'), // Получаем модальное окно
    btn = document.querySelector('button');
//const width = box.clientWidth;// Получаем ширину окна
//const height = box.clientHeight;// Получаем высоту окна

//const width = box.offsetWidth;// Значения в css
//const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight; // Полная высота окна с учетом прокрутки

console.log(width, height);

btn.addEventListener('click', () => {
    //box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box); //Получаем стили у элемента, инлайновые приоритетнее, эти только для чтения

console.log(style.display);

console.log(document.documentElement.clientWidth); //Получю кол-ва пикселей которое пользователь уже отлистал на станице
