/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const reclams = document.querySelectorAll('.promo__adv img');
const nameGanre = document.querySelector('.promo__bg');
const genre = nameGanre.querySelector('.promo__genre');
const clearList = document.querySelector('.promo__interactive-list');


reclams.forEach(item => {
    item.remove();
});

genre.textContent = 'ДРАМА';
nameGanre.style.backgroundImage = 'url(img/bg.jpg)';

clearList.innerHTML = "";

let soort = movieDB.movies.sort();

soort.forEach((i, index) => { // Новый метод при помощи Callback

    clearList.innerHTML += `
    <li class="promo__interactive-item">${index +1} ${i}
                            <div class="delete"></div>
                        </li>
    `;
});