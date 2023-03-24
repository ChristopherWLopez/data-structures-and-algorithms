"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

  includes(value) {
    let current = this.head;
    while (current != null) {
      if (value === current.value) return true;
      current = current.next;
    }
    return false;
  }

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

  append(value) {
    let newNode = new Node(value);
    // if no head exists, we assign the new node as head and we are done
    if (!this.head) {
      this.head = newNode;
    } else {
      // traverse the linked list and add the new node to the end
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.count++;
  }

}

module.exports = { LinkedList};