'use strict';

const { LinkedList } = require('./linked-list');
// class Entry{
//     constructor(key){
//         this.key = key;
//     }
// }

class HashTable{
    constructor(size){
        this.buckets = new Array(this.size);
        this.size = size;
    }

    print(){
        console.log(this.buckets);
    }

    hash(key) {
    let hash = 0
    for(let i = 0; key < key.length;i++){
        hash += s.charCodeAt(i);
    }
    return hash % this.size.length;
  }

    set(key,value){

//     send the key to the hash() method.
    let index = this.hash(key);
    let data = {[key]: value};

    if(this.buckets[index]){
        let bucket = this.buckets[index];
        // the [key,value] pair will be asigned to the table at that specific index
        bucket.append(data);
        // handle collision 
    }else{
        let bucket = new LinkedList;
        bucket.append(data);
        this.buckets[index];
    }
  }

  get(key){
    const index = this.hash(key);
    if(this.buckets[index]){
    let bucket = this.bucket[index];
    let value = this.bucket.value[key];
    return this.bucket[index];
    }
  }

  has(key){
    let index = thid.hash(key);
    if(this.bucket[index]){
        return true;
        } else {
            return null;
        }
    }

    keys(){
        let keys=[];

    }
    
}

let table = new HashTable(2);
console.log(table);

module.exports = HashTable;