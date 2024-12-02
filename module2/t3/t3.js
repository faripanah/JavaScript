'use strict';
const dogNames = [];
for(let i = 0;i<6; i++ ){
    const dogName = prompt('Enter dog name:');
    dogNames.push(dogName);

}
dogNames.sort().reverse();

const ul = document.querySelector('ul');
for(let i = 0; i < dogNames.length; i++){
    const li = document.createElement('li');
    li.textContent = dogNames[i];
    ul.appendChild(li);
}
