'use strict'

const inputBucar = document.querySelector('#input-buscar');
const camposBtns = document.querySelector('#btn-container');

camposBtns.addEventListener('click', (event) => {
    const element = event.target;

    if(element.classList.contains('btn-search')) {
        if(!inputBucar.value) return;
        window.location.assign(`https://www.google.com/search?q=${inputBucar.value}`);
    }

    if(element.classList.contains('btn-sorte')) {
        window.location.assign(`https://www.google.com/doodles`);
    }
});