'use strict';

function fib(n){
    if(n ===0) return 0;
    if(n===1) return 1;
    let last = 0;
    let current = 1 ;
    while(n>1){
      let temp = current + last;
      last = current;
      current = temp;
      n-=1;
    }
   return current;
  }
  