'use strict';

function majorityElement (nums){

    // create a new instance of a hash map
    let map = new Map();

    // iterate through the nums array beginning to the end
    for(let i=0; i<nums.length;i++){

        //if the map does not have the nums at "i"
        if(!map.has(nums[i])){
            //we are going to set the value at nums at "i"
            map.set(nums[i], 1);
            //if the map does have the value than we are going to set 
            //the value of nums plus the gotten nums + 1
        } else {
            map.set(nums[1], map.get(nums[i]+1));
        }

    }

    // determine what the majority element is
    let majorityCount = Math.floor(nums.length/2);
    //need to iterate through the object, checking the num and the count
    for(let [num, count] of map){
        //if we find the count that is greater than the 
        //"majorityCount"
        if(count > majorityCount){
            // we return that num
            return num;
        }
    }
    //otherwise we just return -1 if there ius no majority element
    return - 1
}