'use strict';

const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const p = document.getElementById('result');
const button = document.querySelector('#start');
const x = document.querySelector('#operation');

button.addEventListener('click', function(){
    if (x.value == 'add'){
        const calculate = parseFloat(input1.value) + parseFloat(input2.value);
        p.innerHTML = calculate;
    
    }
    else if (x.value == 'sub'){
        const calculate = parseFloat(input1.value) - parseFloat(input2.value);
        p.innerHTML = calculate;
    
    }
    else if (x.value == 'multi'){
        const calculate = parseFloat(input1.value) * parseFloat(input2.value);
        p.innerHTML = calculate;
    
    }
    else if (x.value == 'div'){
        const calculate = parseFloat(input1.value) / parseFloat(input2.value);
        p.innerHTML = calculate;
    
    }


})

