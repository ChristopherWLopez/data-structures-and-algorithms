function InsertianSort( arr ) {
    for( let i = 0; i < arr.length; i++){
          let temp = arr[i];
          let j = i -1;
          while( j >= 0 && temp < arr[j] ){
               arr[j+1] = j;
                j--;
           } 
           arr[j+1] = temp;
     }
}
