"use strict";



// function start() {

//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
//     }
// }
// start();

const personalMovieDB = {

    numberFilms: function () {

        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        }
    },
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    toggleVisibleMyDB() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
            console.log(personalMovieDB.privat);
        } else {
            personalMovieDB.privat = false;
            console.log(personalMovieDB.privat);
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Какой фильм вы смотрели в последний раз ?', '');
            const b = prompt(' Как вы его оцените ?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre != null && genre != '') {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                console.log('err');
                i--;
            }
        }
    },
    liveJanre: function () {
        this.genres.forEach(function (item, i) {
            console.log(`Любимый жанр${i + 1}:  Это ${item} `);
        });
    }
};
// personalMovieDB.numberFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.liveJanre();
// personalMovieDB.showMyDB();

//console.log(personalMovieDB);