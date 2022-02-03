// const btn = document.querySelector('button'),
const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('click');
// };
// btn.addEventListener('click', () => {
//     alert('Some click');
// });
//let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 2) {
    //     btn.removeEventListener('click', deleteElement);
    // }
    //e.target.remove();
};

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement); //(e) => {
// console.log(e.target);
// e.target.remove();
// console.log('Hover');
//});
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {
        once: true
    });
});

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});