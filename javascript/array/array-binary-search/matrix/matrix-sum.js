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

// refactoring this code because of errors

function sumMatrix(matr){

    const sumArray = [];

    for(let i = 0;i<matr.length;i++){
        
        let sum = 0;

        for(let j=0;j<matr[i];j++){

             sum += matr[i][j];

        }

        sumArray.push(sum);
    }
    
    return sumArray;
}