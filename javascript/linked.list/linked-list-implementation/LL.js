'use strict';

const LLNode = require('./node');


class LinkedList {
    constructor(){
        this.head = null;
    }

    insert(value){
        let node = new LLNode(value);

        if(this.head === null){
            this.head = node;
        } else{
            let leash = new Node(value);
            leash.next = this.head;
            this.head = leash;
        }
    }

    includes(value){

        let current = this.head;

        while(current !== null){

            if(current.value===value){
                return true;
            }
            current = current.next;
        }

        return false;
    }

}