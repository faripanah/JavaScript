'use strict';
const x1 = parseInt(prompt('Enter the first integer number:'));
const x2 = parseInt(prompt('Enter the second integer number:'));
const x3 = parseInt(prompt('Enter the third integer number:'));

const sum = x1+x2+x3;
const pro = x1*x2*x3;
const avg = sum /3;

document.querySelector('#sum').innerHTML = 'sum is: ' + sum ;
document.querySelector('#product').innerHTML = 'product is: ' +pro;
document.querySelector('#average').innerHTML = 'average is:' +avg;





