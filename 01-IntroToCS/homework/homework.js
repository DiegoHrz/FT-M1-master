'use strict';

function BinarioADecimal(num) {
   let numArray = num.split('');
   let largo = numArray.length
   let finalNum = 0;
   numArray.map((numerito, index)=>{
      if(numerito == '1'){
      finalNum += Math.pow(2, largo - 1);
      console.log(finalNum)
      largo--;
      }
   })
   return finalNum;
}

console.log(BinarioADecimal('111'))

function DecimalABinario(num) {

   let newNumInArray= [];
   let newNum = num 

   if (num == 0) return num;
   
   for(let i = 0; i < num; i++){
      if(newNum == 0) break;

      if(newNum % 2 == 0){
         newNumInArray.unshift(0)
         newNum = newNum /2
      }

      else{
         newNumInArray.unshift(1)
         newNum = Math.floor(newNum /2)
      }
   }
    let newNumber = newNumInArray.join('')
    return newNumber
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};