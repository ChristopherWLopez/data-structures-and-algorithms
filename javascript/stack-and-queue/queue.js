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
        this.head= null;
    }

    enqueue(value){
        let newNode = new Node(value);
        // if there is no back then there is no front so we assign all values to the same node
        if(this.back===null){
            this.back = newNode;
            this.front = newNode;
            this.head = newNode;
        } else {
            // holding on to the new node with the back `next` then we assign the back to that new node
            this.back.next = newNode;
            this.back = newNode
        }
    }

     dequeue(){
        // check if  there is no front. if not than we do not have anything to dequeue
        if(this.front===null){
            throw new Error("no Queue here");
        }
        // assign the front a despensible variable
        let removed = this.front;
        // 
        this.front = removed.next;
        this.head = this.front;
        if(this.front === null){
            this.back = null;
        }
        return removed.value
     }

     peek(){
        if(this.front === null){
            throw new Error("empty");
        }
        return this.front.value;
     }

     isEmpty(){
        return this.front === null;
     }

}
module.exports = Queue;