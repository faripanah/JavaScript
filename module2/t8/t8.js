'use strict';
const concat = (strArray) => {
    let temp = '';
    for(let i= 0; i<strArray.length; i++){
         temp += strArray[i];
    }
    return temp
}


const names = ["Johnny", "DeeDee", "Joey", "Marky"];
const concatenatedString = concat(names);
const p = document.querySelector('p');
p.textContent = `Concatented String:  ${concatenatedString}`;


