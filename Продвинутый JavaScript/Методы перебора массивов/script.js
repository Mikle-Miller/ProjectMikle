'use strict';

//filter

// const names = ['Ivan', 'Anna', 'Ksenia', 'Veniamin'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map  Перебирает массив и возвращает новый массив

// const ansvers = ['iVan', 'annA', 'VeniaMin']; // Не трогаем исходный массив

// const result = ansvers.map(item => item.toLowerCase());

// console.log(result);

// let ansvers = ['iVan', 'annA', 'VeniaMin']; //Перезаписываем исходный массив

// ansvers = ansvers.map(item => item.toLowerCase());

// console.log(ansvers);

//every/some // Перебирает массив и если он подходит под условия возвращает булиновое значение
//every вернет true если все элементы подходят под условия
//some если хотя бы 1 элемент подходит под условия

// const mySome = [23, 'ghhgj', 'hjgvhvggv'];

// console.log(mySome.some(item => typeof item === 'number'));
// console.log(mySome.every(item => typeof item === 'number'));

//reduce

// const arr = [2, 1, 9, 4, 5, 3];

// const result = arr.reduce((sum, current) => sum + current)
// console.log(result);

// const arr = ['apple', 'orange', 'lemon', 'feyhoa']; // Выведет все значения через запятую
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

//

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animale',
//     cat: 'animale'
// };

// // Получаем из объекта массив с именами людей
// const newArr = Object.entries(obj) // Делаем из объекта массив с подмассивами от объекта
//     .filter(item => item[1] === 'persone')
//     .map(item => item[0]);


// console.log(newArr);

// const films = [{
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {

//     return arr.filter(film => film.rating >= 8)

// }
// console.log(showGoodFilms(films));



// function showListOfFilms(arr) {
//     let result = [];
//     arr.forEach((item, i) => {
//         result[i] = item.name;
//     });

//     return result.reduce((res, allRes) => `${res}, ${allRes}`);
// }
// console.log(showListOfFilms(films));

// function setFilmsIds(arr) {

// }

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {

// }

// const log100 = () => console.log(100);

// const createDebounceFunction = (fn, ms) => {

//     let timeout;
//     return function () {
//         const fnCall = () => {
//             fn.apply(this, arguments);
//         };

//         clearTimeout(timeout);

//         timeout = setTimeout(fnCall, ms);
//     };
// };



// let log100 = () => console.log(100);

// const createDebounceFunction = (fn, ms) => {

//     let timeout;
//     return function () {
//         const fnCall = () => {
//             console.log(fn);
//         };

//         clearTimeout(timeout);

//         timeout = setTimeout(fnCall, ms);
//     };
// };

// createDebounceFunction(log100, 1000);



const createDebounceFunction =(callbackFunc, ms)=> {
	let timeout;
	return function() {
		
		let fnTime = function() {
            callbackFunc.apply(this);
        };
	clearTimeout(timeout);
    timeout = setTimeout(fnTime, ms);
	};
};
const log100 = () => console.log(100);

const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();



