const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circless'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor ='blue';
// box.style.width = '500px';

//box.style.cssText = `background-color: blue; width: 500px`;

//btns[1].style.borderRadius = '100%';
//circles[0].style.backgroundColor = 'red';

// for (let i = 0; i <h1 hearts.length; i++) {  // Старый метод назначения
//     hearts[i].backgroundColor = 'blue';    // параметра для всех элементов
// }
hearts.forEach(item => { // Новый метод при помощи Callback
    item.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode = ('Тут был я'); // Создает нужный контент

div.classList.add('black');

document.body.append(div);
document.querySelector('.wrapper').append(div); // Вставляет в конец род.эл.

wrapper.append(div); // Вставляет в конец род. эл.
wrapper.appendChild(div); // То же только устаревший синтаксис


wrapper.peppend(div); // Вставляет в начало род. эл.

hearts[0].before(div); // Вставляет перед этим элементом
hearts[0].after(div); // Вставляет после этого элемента
wrapper.insertBefore(div, hearts[0]); // Устаревший синтаксис 1арг что вставляем 2 арг. перед чем вставляем

circles[0].remove(); // Удаляет конкретный элемент
wrapper.removeChild(hearts[1]); // Устаревший вариант удаления конкретного элемента

hearts[0].replaceWith(circles[0]); // Заменяет один элемент другим
wrapper.replaceChild(circles[0], hearts[0]); // То же ток устаревшее 2 арг 1 на который меняем 2 тот который меняется

div.innerHTML = '<h1></h1>Hellou Worldse</h1>'; // Вставлять в элемент HTML структуру

div.textContent = 'Hello'; // Вставить текст

div.insertAdjacentHTML('', '<h2>Hello</h2>'); // Вставляет нужный код в нужное место