'use strict';

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev; // Return the new head of the reversed linked list
};
