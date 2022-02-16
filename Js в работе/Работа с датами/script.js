"use strist";

//const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay()); // День недели 0 воскресение 6 суббота

// console.log(now.getHours());  // Час местный
// console.log(now.getUTCHours());  // Час по гринвичу

//console.log(now.getTimezoneOffset()); // Разница местного времени и времени по гринвичу в минутах
//console.log(now.getTime()); // Прошедшее время на данный момент с 1970г в милисекундах

//console.log(now.setHours(18));
//console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);