'use strict';

function user(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

user.prototype.exit = function () {
    console.log('Пользователь Иван ушел');
};

const ivan = new user('ivan', 20);
const alex = new user('alex', 25);

ivan.hello();
alex.hello();
ivan.exit();

console.log(ivan);
console.log(alex);