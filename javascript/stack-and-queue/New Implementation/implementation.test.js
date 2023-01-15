'use strict';
const stack = require('../../stack-and-queue/New Implementation')


describe('Stack  test', ()=> {
    test('')
    // arrange
    
    
    
    // act
    stack.push(3)
    stack.push(2);
    stack.push(1);
    
    // Assert
    stack.toEqual(3,1,2)
})