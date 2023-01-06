'use strict';

const LinkedList = require("../linked-list-implementation/linked-lists");


test("make sure nodes zip", ()=> {
    let ll1 = new LinkedList();
    let newList = new LinkedList();
     ll1.head={
        value:1,
        next: {
            value: 3,
            next: {
                value: 2,
                next:null
            },
        },
    };
    let ll2 = new LinkedList();
    ll2.head = {
        value: 5,
        next: {
            value: 8,
            next: null
        },

        };

         expect(LinkedList.zipList(newList.append(ll1,ll2)));
        });


