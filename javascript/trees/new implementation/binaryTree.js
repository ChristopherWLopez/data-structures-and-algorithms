"use strict";

const Node = require("./node");

class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }

  preOrder() {
    let orderedArray = [];

    function traverse(node) {
      orderedArray.push(node.value);

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
      return;
    }

    traverse(this.root);
    return orderedArray;
  }

  postOrder() {
    let orderedArray = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);

      orderedArray.push(node.value);

      return;
    }

    traverse(this.root);
    return orderedArray;
  }

  inOrder() {
    let orderedArray = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      orderedArray.push(node.value);

      if (node.rigth) traverse(node.right);

      return;
    }

    traverse(this.root);
    return orderedArray;
  }
}

class BST extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(number) {
    let newNode = new Node(number);
    if (!this.root) {
      this.root = newNode;
    } else {
      traverse(this.root, newNode);
    }

    function traverse(current, newNode) {
      if (newNode.value < current.value) {
        if (current.left) traverse(current.left, newNode);
        else current.left = newNode;
      }
      if (newNode.value > current.right) {
        if (current.right) traverse(current.right, newNode);
        else current.right = newNode;
      }
      return;
    }
  }

  constains(number) {
    if (!this.root) return false;
    return traverse(this.root, number);

    function traverse(current, number) {
      if (number === current.value) return true;
      else if (number > current.value) {
        if (current.right) {
          return traverse(current.right, number);
        } else {
          return false;
        }
      } else if (number < current.value) {
        if (current.left) {
          return traverse(current.left, number);
        }
        return false;
      }
    }
  }
}

module.exports = { BinaryTree, Node, BST };