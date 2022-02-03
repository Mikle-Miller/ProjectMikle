//console.log(document.head);
//console.log(document.documentElement); // Получение HTML со всем его содержимым

//console.log(document.body.childNodes); // Получение всех узлов у элемента

//console.log(document.body.firstChild); // Получение первого узла
//console.log(document.body.firstElementChild); // Получение первого элемента

//console.log(document.body.lastChild); // Получение последнего узла

//console.log(document.querySelector('#current').parentNode.parentNode); // Получение элемента родителя

//console.log(document.querySelector('#current').parentElement); // Аналог

//console.log(document.querySelector('[data-current="3"]').nextSibling); // Получение следующего значения

//console.log(document.querySelector('[data-current="3"]').previousSibling); // Получение предю элемента

//console.log(document.querySelector('[data-current="3"]').nextElementSibling); // Получение элемента а не ноды

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}