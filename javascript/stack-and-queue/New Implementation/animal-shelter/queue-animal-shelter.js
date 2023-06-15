'use strict'

class Node { 
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class AnimalShelter {
    constructor(){
        this.front = null;
        this.back = null;
    }

    enqueue(animal){
        let newNode = new Node(animal)
        if(this.back===null){
            this.back = newNode;
            this.front = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
    }

    dequeue(preference){
        if(preference==="dog"|| "cat"){
            let current = this.front;
            let prev = null;
            while(current){
                if(current.value===pref){
                    this.front = current.next
                }
            }
        }
    }
}