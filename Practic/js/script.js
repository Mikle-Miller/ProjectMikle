const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой фильм вы смотрели в последний раз ?', ''),
    b = prompt(' Как вы его оцените ?', ''),
    c = prompt('Какой фильм вы смотрели в последний раз ?', ''),
    d = prompt(' Как вы его оцените ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);