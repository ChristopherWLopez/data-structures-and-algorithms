'use strict';

function insertShiftedArray(inputArray, nums){

    const length = inputArray.length;
    const returnArray = new Array(length+1);
    const halfWay = Math.floor(inputArray/2);

    for(let i=0; i< halfWay;i++){
        returnArray[i] = inputArray[i];
    }

    returnArray[halfWay] = nums;

    for(let j=halfWay;j < length; j++){
        returnArray[j+1] = inputArray[i];
    }

    return returnArray;
}