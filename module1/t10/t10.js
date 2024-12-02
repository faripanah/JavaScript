'use strict';

function calculateProbability() {
   const numDice = parseInt(document.querySelector('#dice').value);
   const sumTarget = parseInt(document.querySelector('#sumNum').value);
   const timesPro = 10000;
   let count = 0;

   for (let i=0; i<timesPro; i++){

    let sum = 0;
    for(let j=0; j< numDice; j++){
        sum += Math.floor(Math.random()*6) +1;

      }
    if(sum === sumTarget){
       count++;


    }



    }
    const probability = (count/timesPro) * 100;
    document.getElementById("result").innerText =
        `Probability to get sum ${sumTarget} with ${numDice} dice is ${probability.toFixed(2)}%`;
}











 