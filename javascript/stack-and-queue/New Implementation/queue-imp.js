class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.head = null;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.back === null){
            this.back = newNode;
            this.front = newNode;
            this.head = newNode;
        }
        else {
            this.back.next = newNode;
            this.back = newNode;
        }
    }

    dequeue(){
        if(this.back === null) {

            throw new Error("empty Queue");
        }
        let removed = this.front;
        this.front = removed.next;
        this.head = this.front;
        if(this.front === null){
            this.back = null;
        }
        return removed.value;
    } 


    peek(){
        if(this.front === null){
            throw new Error ("This Queue is empty");
        } else {
            return this.front.value;

        }
    }

}

module.exports = Queue;