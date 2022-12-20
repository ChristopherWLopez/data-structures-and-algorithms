'use strict';

const Node = require('../node');
const LinkedList = require('../linked-lists');


describe('Linked list tests', ()=>{

    it('create a new head',()=>{
        const newList = new LinkedList()
        newList.insert(11)
        console.log(newList)
        expect(newList.head.value).toEqual(11);
    })


})