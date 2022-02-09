'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const reclams = document.querySelectorAll('.promo__adv img'),
          nameGanre = document.querySelector('.promo__bg'),
          genre = nameGanre.querySelector('.promo__genre'),
          clearList = document.querySelector('.promo__interactive-list'),
          escForm = document.querySelector('form.add'),
          addInp = escForm.querySelector('.adding__input'),
          checkBox = escForm.querySelector('[type="checkbox"]');

    escForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInp.value;
        const cbStatus = checkBox.checked;
        if (newFilm) {
            if (newFilm.length >= 22) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (cbStatus) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            SortArr(movieDB.movies);

            createFilmList(movieDB.movies, clearList);

            escForm.reset();
        }
    });

    const deleteRecl = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const SortArr = (arr) => {
        arr.sort();
    };

    const swapCont = (nameGanre, genre) => {
        genre.textContent = 'ДРАМА';
        nameGanre.style.backgroundImage = 'url(img/bg.jpg)';
    };

    function createFilmList(films, parent) {
        SortArr(films);
        parent.innerHTML = "";
        films.forEach((i, index) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${index +1} ${i}
                                    <div class="delete"></div>
                                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((bttn, i) => {
            bttn.addEventListener('click', () => {
                bttn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createFilmList(films, parent);
            });
        });
    }

    deleteRecl(reclams);
    swapCont(nameGanre, genre);
    createFilmList(movieDB.movies, clearList);
});