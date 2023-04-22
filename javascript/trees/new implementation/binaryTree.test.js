'use strict';

const { BinaryTree, Node, BST } = require('./binaryTree');


describe("test for Tree's", ()=> {
    test("Can successfully instantiate an empty tree",()=>{
        const myTree = new BinaryTree();
        expect(myTree).toEqual({root:null});
    })

    test("Can successfully instantiate a tree with a single root node",()=>{
        const myTree = new BinaryTree(new Node(4));
        expect(myTree).toEqual({root:{value:4, left: null, right: null}});

    })

    test("For a Binary Search Tree, can successfully add a left child and right child properly to a node", ()=>{
        const binarySearchTree = new BST(new Node(10));
        // expect(binarySearchTree).toEqual({root:{value:10, left: null, right: null}});
        binarySearchTree.add(7);
        expect(binarySearchTree.root).toEqual({"left": {"left": null, "right": null, "value": 7}, "right": {"left": null, "right": null, "value": 7}, "value": 10});
    })
})

// {value:10, left:{value:7, left:null, right:null}, right: null})