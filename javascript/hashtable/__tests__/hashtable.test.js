'use strict';

const HashTable = require('./hashtable');

describe("hash table", ()=> {
    let table = new HashTable;
    test('can set key/value to table',()=> {
        table.add("chris", "is cool");
        let index = table.hash("chris");
        let result = table.map[index];

        expect(result.head.value).toStrictEqual({"chris": "is cool"})
    });
});