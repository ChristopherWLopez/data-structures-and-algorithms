'use strict';

function reversedArray(nums){
    const reversedArray = [];
    if(nums.length<1) return nums;
    else{
        for(let i = length-1; i >= 0; i--){
            reversedArray.push(nums[i]);
        }
        return reversedArray;
    }
}