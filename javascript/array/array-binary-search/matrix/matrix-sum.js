'use strict';


const sumOfMatric =(matrix)=>{
    let total =[];

    for(let i =0;i<matrix.length;i++){
        let row=matrix[i];
        let sum =0;

        for(let j=0;i<row.length;j++){
            sum+=row[j]
        }
        total.push(sum);
    }
    return total;
}