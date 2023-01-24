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


    test("Should be able to enqueue", ()=>{
        let queue = new Queue();

        queue.enqueue("3");

    })

 })
