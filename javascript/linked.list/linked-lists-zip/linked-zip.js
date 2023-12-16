'use strict';

let Node = require('./node');

class LL{
    constructor(value, next=null){
        this.value = value,
        this.next;
    }
}

function llMerge(ll1, ll2){
    let ll3 = new LL();
    let current1 = ll1.head;
    let current2 = ll2.head;

    while(current1||current2){
        if(current1){
            ll3.add(current1.value);
            current1=current.next;
        }
        if(current2){
            ll3.add(current2.value);
            current2=current.next;
        }
    }
    return ll3;
}