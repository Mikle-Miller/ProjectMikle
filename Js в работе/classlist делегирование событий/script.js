"use strict";

const bttn = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

//console.log(bttn[0].classList.length); Кол-во классов у элемента
//console.log(bttn[0].classList.item(0)); Получаем нужный класс по счету
//console.log(bttn[1].classList.add('red')); //Добавить новый класс
//console.log(bttn[0].classList.remove('blue')); //Удалить класс
//console.log(bttn[0].classList.toggle('blue')); // Если есть такой класс удалит если нет добавит

// if (bttn[1].classList.contains('red')) {
//     console.log('red');
// }

bttn[0].addEventListener('click', () => {
    if (!bttn[1].classList.contains('red')) {
        bttn[1].classList.add('red');
    } else {
        bttn[1].classList.remove('red');
    }
    //bttn[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event) => {
    //if (event.target && event.target.matches("button.red")) {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});
// bttn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });

// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);