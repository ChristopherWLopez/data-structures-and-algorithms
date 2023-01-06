'use strict';

const Node = require('../linked-list-implementation/node');
const LinkedList = require('../linked-list-implementation/linked-lists');
const { describe } = require('node:test');
// const { it } = require('node:test');
// const { default: expect } = require('expect');


describe('Linked list tests', ()=>{

    it('create a new head',()=>{
        const newList = new LinkedList()
        newList.insert(11)
        console.log(newList)
        expect(newList.head.value).toEqual(11);
    })

    it('check if includes a value in node', ()=>{
        const ll = new LinkedList
        ll.includes(11);
        console.log(ll);
        expect(ll).toEqual(true);
    })

});

// describe('linked list insertion test', ()=>{

//     it('tests inserBefore: add a node with a given new value before the first node with the given value',()=>{

//         let insertBeforeLinkedList = new LinkedList();
//         insertBeforeLinkedList.head({value: 1, next: { value:3, next: {value: 4, next: null } } })
//         let newList = insert
//         expect(newList).toEqual({value: 1, next: { value: 2, next: { value: 3, next: {value: 4, next:null},},},},
//     });
// });

 describe("kth", ()=> {
    test("It returns the value of the node kth from the end of the list",()=>{

        // created instance of the linked list class
        let llkth = new LinkedList();
        // assigning the head and everything that follows in the linked list
        llkth.head = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: {
                        value: 4,
                        next: null,
                    },
                },
            },

        };
        expect(llkth.kthFromTheEnd(1)).toBe(3);
    });

 });

