"use strict";

const Node = require("./node");

// adds a node to the head
class LinkedList {
  constructor() {
    this.head = null;  
  }

  insert(value) {
    let node = new Node(value);
    // this.head = node;
    if (this.head === null) {
      this.head = node;
    } else {
      let leash = new Node(value);
      leash.next = this.head;
      this.head = leash;
    }
  }

  // takes a value and iterates through a linked list and returns true if it finds a node with a maching value
  includes(value) {
    let current = this.head;
    while (current != null) {
      if (value === current.value) return true;
      current = current.next;
    }
    return false;
  }

// "{ a } -> { b } -> { c } -> NULL"


  toString() {
    let string = "";
    let current = this.head;
    while (current != null) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += "NULL";
    return string;
  }
}

let list = new LinkedList();
list.insert(12);
list.insert("11");
list.insert(true);
console.log(list);
console.log(list.toString());

module.exports = LinkedList;
