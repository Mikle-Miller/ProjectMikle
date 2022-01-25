// const num = 49;

// if (num < 49) {
//     console.log('Мало');
// } else if (num > 100) {
//     console.log('Слишком много');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('No') : console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Совершенно верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}