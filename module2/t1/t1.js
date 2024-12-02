'use strict';
const numbers = [];

for(let i=0; i< 5; i++){
  
  const  number = parseInt(prompt('Enter number:'));
  numbers.push(number);
}
console.log(numbers);
for(let i=numbers.length-1; i>= 0; i--){
    console.log(numbers[i]);
    

}
