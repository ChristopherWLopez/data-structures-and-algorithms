'use strict';

const node = require('../../linked.list/linked-list-implementation/node');


class Stack{
    constructor(){
      this.top = null
    }
  
    push(element){
      // create new node with value of element being brought in via the function
      let node = new Node(element)
      // console.log(node)
      if(this.top) node.next = this.top
      // new Node.next is arrigned to top
      
      this.top = node
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
  }