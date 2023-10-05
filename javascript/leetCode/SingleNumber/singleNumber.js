'use strict';

function singleNumber ( arr ) {
    let myNumbers = new Map();
    
    for(let i = 0 ; i < arr.length; i++){
      if(!myNumbers.has(arr[i]){
          myNumbers.set(arr[i], 1);
          }else{
            myNumbers.set(arr[i], myNumbers.entries() + 1);
       }
     }
     for(const [key, value] of myNumbers.entries()){
       if(value === 1) return key;
       }
     };