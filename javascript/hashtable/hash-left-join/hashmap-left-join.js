'use strict';

function leftJoin(map1, map2) {
    let joined = [];
    map1.forEach((key,value)=>{
        if(map2[key]){
          joined.push([key, map1[key], map2[key]);
        } else {
          joined.push([key, map1[key], NULL]);
        }
    });
    return joined;
  }
    
  module.exports = leftJoin;