'use strict';

function fibSequence(num){
    const fibStart = [0,1];

    if(num==0){
        return 0
    } else if(num==1) {
        return 1;
    } else{
        for(let i = 0; i<num;i++){

            const prev = fibStart[i-1];
            const current = fibStart[i-2];
            const next = prev + current;

            fibStart.push(next);
        }
        return fibStart[num];
    }
}