'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class Stack{
    constructor(){
      this.top = null
    }
  
    push(value){
      // create new node with value of element being brought in via the function
      let newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  
    pop(){
      let current = this.top;
      this.top = this.top.next
      current = null;
    }
  
    peek(){
      current = this.top
      while(current!=null){
        console.log(current.value)
        current = current.next
      }
  
    }

    is_empty(){
      return this.top === null;
    }
    
  }
  
  module.exports = Stack;