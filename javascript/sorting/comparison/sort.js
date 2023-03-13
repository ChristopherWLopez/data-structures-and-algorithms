'use strict';
const { movies }  = require("./movies");

// const yearComp = (a,b) => {
//     return b.year - a.year
// }

function year(movies){
    
    return movies.sort((a,b)=> b.year-a.year); 
    }



function title(movies){
    return movies.sort((a,b)=> {

    })
}
module.exports = { year,  }