'use strict';

const Queue = require ("./queue-imp");

 describe("queue tests", ()=> {

    test("should be able to dequeue and return value",()=>{
        let queue = new Queue();
        queue.enqueue("1");
        queue.enqueue("3");

        let removed = queue.dequeue();

        expect(removed).toEqual("1");
    });


    test("Should be able to peek into queue ", ()=>{
        let queue = new Queue();

        queue.enqueue("3");
        queue.enqueue("2");
        queue.enqueue("1");
        let value = queue.peek()
        expect(value).toEqual("3");

    });

    test("successfully empty a queue after full dequeue", ()=> {
        let newQueue = new Queue();

        newQueue.enqueue("3");
        newQueue.enqueue("2");
        newQueue.enqueue("1");
        newQueue.dequeue();
        newQueue.dequeue();
        newQueue.dequeue();
        let output = newQueue.toString()
        expect(output).toEqual("NULL");
    });

    test("can instatiate an empty queue", ()=> {
        let newQueue = new Queue();
        let output = newQueue.toString();
        expect(output).toEqual("NULL");
    });

    test("Calling dequeue or peek on an empty queue raises exception", ()=> {
        let newQueue = new Queue();
        expect(()=>{
            newQueue.dequeue();
        }).toThrow("queue is empty");
    });
 });
