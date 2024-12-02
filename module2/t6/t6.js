'use strict';

const dice = ()=>  Math.floor(Math.random()*6)+1;

const ul = document.querySelector('ul');
let roll;
do {
        roll = dice();
        const li = document.createElement('li');
        li.textContent = `Rolled: ${roll}`;
        ul.appendChild(li);



} while (roll !== 6);


