'use strict';

function first() {
    // Do something
    setTimeout(function () {
        console.log(1)
    }, 500);
}

function second() {
    console.log(1);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('DjavaSkript', done);
// learnJS('JavaScript', function(){
//     console.log('Я прошел этот урок');
// });