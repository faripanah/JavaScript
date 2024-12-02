'use strict';
const numbers2 = []
function even(numbers){
    for(let i= 0; i<numbers.length; i++){
        if (numbers[i] % 2 == 0){
            numbers2.push(numbers[i])

        }
        
    }
    return numbers2

}
const x = [2,7,5, 8];
const evenNumbers = even(x);
console.log(`original array:  ${x}`)
console.log(`New array : ${evenNumbers}` );
