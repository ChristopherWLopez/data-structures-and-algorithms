'use strict';

const leftJoin = require('./hashmap-left-join');

// describe('left joins',()=> {
//     test('returns array with key and like values or Null.',()=>{

//         let hash1 = new Map();
//         hash1.set('cat', 'maru');
//         hash1.set('dog','paloma');

//         let hash2 = new Map();
//         hash2.set('bark', 'woof');
//         hash2.set('dog', 'meow');

//         expecct(leftJoin(hash1, hash2)).toEqual([
//             ['cat', 'maru', nu]
//         ])
//     })
// })