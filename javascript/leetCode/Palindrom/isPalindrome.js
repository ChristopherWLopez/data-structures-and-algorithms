'use strict';

function isPalindrome(x){

    if(x<0) return false;

    let reverse = 0;

    for(let i = 0; i >= 1; i = Math.floor(i/10)){
        reverse = reverse*10+i%10;
    } return reverse === x;
    
};