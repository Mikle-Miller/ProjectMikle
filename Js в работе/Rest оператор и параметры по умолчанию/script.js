const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};
log('operator', 'usage', 'gegdfsdgvdf', 'fsgrggh');

// rest оператор собирает аргументы функции которые не были указаны в массив

function calcOfDouble(number, basis = 2) { //  В аргументах новый вариант присвоен. зна. по умолч
    //basis = basis || 2; // Старый вариант присвоения знач. по умолчанию
    console.log(number * basis);
}
calcOfDouble(5, 5);