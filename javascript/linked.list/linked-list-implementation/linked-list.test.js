'use strict'

const LinkedList = require('./c5_linked-list');

describe('LinkedList', () => {
    let ll;
    beforeEach(() => {
        ll = new LinkedList();
    });

    test('Testing the include method to see if it returns true if a value is in the node.', () => {
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);

        expect(ll.includes(1)).toBe(true);
        expect(ll.includes(2)).toBe(true);
        expect(ll.includes(3)).toBe(true);
    });
  
    test('Testing the includes method to see if it returns false if a value is not in the node.', () => {
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);

        expect(c5.includes(4)).toBe(false);
    });
  
    test('Testing toString to see if it returns a fully created string which represents the linked list.', () => {
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);

        expect(c5.toString()).toEqual("{ 3 } -> { 2 } -> { 1 } -> NULL");
    });
  });