// 'use strict';

// const Node = require('../linked-list-implementation/node');
// const LinkedList = require('../linked-list-implementation/linked-lists');

// // const { it } = require('node:test');
// // const { default: expect } = require('expect');




//     it.skip('create a new head',()=>{
//         const newList = new LinkedList()
//         newList.insert(11)
//         console.log(newList)
//         expect(newList.head.value).toEqual(11);
//     })

//     it.skip('check if includes a value in node', ()=>{
//         const ll = new LinkedList
//         ll.includes(11);
//         console.log(ll);
//         expect(ll).toEqual(true);
//     })



//     test.skip("tests insertBefore: adds a node with a given new value immediately before the first node with the given value", () => {


//         // create new instance of a linked list
//         let insertBeforeLinkedList = new LinkedList();

//         // create the linked list (head)
//         insertBeforeLinkedList.head = {
//           value: 1,
//           next: { value: 3, next: { value: 4, next: null } },
//         };


//         // take  the new linked list and apply the method to it with the args
//         let newList = insertBeforeLinkedList.insertBefore(3, 2);
//         expect(newList).toEqual({
//           value: 1,
//           next: {
//             value: 2,
//             next: {
//               value: 3,
//               next: {
//                 value: 4,
//                 next: null,
//               },
//             },
//           },
//         });
//       });


//       test.skip("tests insertAfter: adds a node with a given new value immediately after the first node with the given value", () => {
        
//         let insertAfterLinkedList = new LinkedList();
//         insertAfterLinkedList.head = {
//           value: 1,
//           next: { value: 2, next: { value: 4, next: null } },
//         };
//         let newList = insertAfterLinkedList.insertAfter(2, 3);
//         expect(newList).toEqual({
//           value: 1,
//           next: {
//             value: 2,
//             next: {
//               value: 3,
//               next: {
//                 value: 4,
//                 next: null,
//               },
//             },
//           },
//         });
//       });

//       test.skip("It returns the value of the node kth from the end of the list", () => {
//         let llKth = new LinkedList();
//         llKth.head = {
//           value: 1,
//           next: {
//             value: 2,
//             next: {
//               value: 3,
//               next: {
//                 value: 4,
//                 next: null,
//               },
//             },
//           },
//         };
//         expect(llKth.kthFromEnd(1)).toBe(3);
//       });

//       test.skip("If given a k longer than the length of the list returns undefined", () => {
//         let llKthBad = new LinkedList();
//         llKthBad.head = {
//           value: 1,
//           next: {
//             value: 2,
//             next: {
//               value: 3,
//               next: {
//                 value: 4,
//                 next: null,
//               },
//             },
//           },
//         };
//         expect(llKthBad.kthFromEnd(10)).toBe(undefined);
//       });
    
// });

// // describe('linked list insertion test', ()=>{

// //     it('tests inserBefore: add a node with a given new value before the first node with the given value',()=>{

// //         let insertBeforeLinkedList = new LinkedList();
// //         insertBeforeLinkedList.head({value: 1, next: { value:3, next: {value: 4, next: null } } })
// //         let newList = insert
// //         expect(newList).toEqual({value: 1, next: { value: 2, next: { value: 3, next: {value: 4, next:null},},},},
// //     });
// // });

//  describe("kth", ()=> {
//     test("It returns the value of the node kth from the end of the list",()=>{

//         // created instance of the linked list class
//         let llkth = new LinkedList();
//         // assigning the head and everything that follows in the linked list
//         llkth.head = {
//             value: 1,
//             next: {
//                 value: 2,
//                 next: {
//                     value: 3,
//                     next: {
//                         value: 4,
//                         next: null,
//                     },
//                 },
//             },

//         };
//         expect(llkth.kthFromTheEnd(1)).toBe(3);
//     });

//  });

