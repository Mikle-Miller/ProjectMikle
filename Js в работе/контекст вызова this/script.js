'use strict';

// function showThis(a, b) {  // undefined
//     console.log(this);

//     function sum() {
//         console.log(this); // undefined
//         return this.a + this.b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {   // Тут тоже будет undefined т.к. контекст вызова
//         function sum2() { //  не установлен
//             console.log(this);
//         }
//         sum2();
//     }
// };
// obj.sum();

 function sayName(surname) {
     console.log(this); // Тут выдаст объект user
     console.log(this.name + surname); // Выдаст Johnsmidt
 }

 const user = {
     name: 'John'
 };

sayName.call(user, 'smith'); // Метод для привязывания контекста к опр. объекту
sayName.apply(user, ['smidt']); // То же, через запятую аргументы в функцию

function count(num) {
    return this * num; // bind это ручная привязка this
}
const double = count.bind(2); // Забиндили эту функцию, в this сделали 2
console.log(double(3)); // Вызываем функцию и подставляем значение num (3)
console.log(double(12));



// 1) Обычная функция this = window, но если use strict = undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this через call apply bind



let btn = document.querySelector('button');
btn.addEventListener('click', function () { // В обычных функциях контекст вызова
    console.log(this); // будет сам элемент на котором произошло событие
    this.style.backgroundColor = 'red';
});

// Классы в ES6 

// Классы это красивая обертка функций конструкторов
// классы внутри это все те же функции
// class Rectangle - название всегда с большой буквы
// extends передает все фенкции по умолчанию
// super из constrictor передаст только то что запишешь

class Rectangle {
    constructor(width, height) { // Сдесь мы задаем параметры класса
        this.width = width;
        this.hight = height;
    }
    calcArea() { // далее задаем методы различные
        return this.width * this.hight;
    }
}
const square = new Rectangle(10, 10); // Аргументы запишутся именно в этот объект
console.log(square.calcArea());

class colorRectangleWidthText extends Rectangle { // Наследование от родителя
    constructor(width, height, text, bgColor) {
        super(width, height); // Вызывает супер конструктор родителя
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() { // Метод выводит в консоль цвет и текст который зададим
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new colorRectangleWidthText(25, 10, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArea());