'use strict';
const ul = document.querySelector('#target');
const firstItem = document.createElement('li');
firstItem.textContent =  'first item';
ul.appendChild(firstItem);

const secondItem = document.createElement('li'); 
secondItem.textContent = 'second item';          
ul.appendChild(secondItem); 
secondItem.classList.add('my-item');

const thirdItem = document.createElement('li');
thirdItem.textContent = ' Third item';
ul.appendChild(thirdItem);

