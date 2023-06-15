'use strict';

function BinarySearch (arr, number){
    let left = 0;
    let right = arr.length -1;
  
    while(left <=right){
      const middle = Math.floor((left +right)/2);
  
      if(arr[middle]===number){
        return middle;
      }
  
      if(arr[middle]< number){
        left = middle + 1;
      } else {
        right = middle -1;
      }
    }
  
    return -1;
  }
