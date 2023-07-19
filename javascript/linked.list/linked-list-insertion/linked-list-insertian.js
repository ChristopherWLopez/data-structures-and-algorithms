"use strict";

const Node = require("./node");

// adds a node to the head
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    // create an istance of the node
    let node = new Node(value);
    // this.head = node;
    // check if there is a head of linked list (First node)
    if (this.head === null) {
      // if it is not there, then we assign the "head" of the node to the new node (construcor)
      this.head = node;
    } else {
      // we assign the "leash"/"next" to the new node with a value
      let leash = new Node(value);
      //
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

  // add a node with the given value
  appendLink(value) {
    // add a node at the end of the list with the "newValue"
    // create the new valued node
    // iterate through the list (while loop) & current  = this.current;
    // find the end (where this.next = "null")

    // append node(newValue) to the end of the list
    // make sure the last node (where this.next = null) then points to the new value
    let node = new Node(value);
    let current;

    if (!current) {
      current = node;
    } else {
      current = this.node;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore(value, newValue) {
    // create new node (with value as argument)
    // iterate to check if the value of node is in the current linked list
    // if no situation
    // if so situation
    let newNode = new Node(newValue);
    let current = this.head;
    let previous;
    while (current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current) {
      newNode.next = current;
      if(previous){
        previous.next = newNode;
      } else {
        this.head = newNode;
      }
    } 
  }
  
// adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

  }

  kthFromEnd(k){
    let length = 0;
    let current = this.head;
    while(current!==null){
      current = current.next;
      length++
    }
    if(k>length){
      return;
    } 
  current = this.head;
    for(let i=0; i< length-k+1; i++){
      current = current.next;
      return current.value;
    }
  }
  }


let list = new LinkedList();
list.insert(12);
list.insert("11");
list.insert(true);
list.insert(9);
list.insertBefore(9, 3);
console.log(list);
console.log(list.toString());

module.exports = LinkedList;
