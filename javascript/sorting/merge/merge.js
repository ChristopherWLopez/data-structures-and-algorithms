function mergesort(arr){
    let n = arr.length;
    if(n>1){
        let mid = n/2;
        let left = arr[0...mid];
        let right = arr[mid];
    }
    mergesort(left);
    mergesort(right);
       mergesort(left,right,arr);
}