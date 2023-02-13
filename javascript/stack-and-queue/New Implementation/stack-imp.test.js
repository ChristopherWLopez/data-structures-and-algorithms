
const Stack = require("./stack-imp");

describe("stack tests", ()=>{
    test("should pop out of a stack",()=>{
        let stack = new Stack();
        stack.push("1");
        stack.push("2");
        stack.push("3");

        let popped = stack.pop();
        let output = stack.toString();
        expect(popped).toEqual("3");
        expect(output).toEqual("{ 2 } => { 1 } => NULL");
    });

    test("Should return new string with the stack in {x} => {y} => {z} => null, format", ()=>{
        let newStack = new Stack();
            newStack.push("1");
            newStack.push("2");
            newStack.push("3");

            let popped = newStack.pop();
            let output = newStack.toString();

            expect(popped).toEqual("3");
            expect(output).toEqual("{ 2 } => { 1 } => NULL");
    });

    test("Should be able to empty a stack", ()=> {
        let newStack = new Stack();

        newStack.push("1");
        newStack.push("2");
        newStack.push("3");
        newStack.pop();
        newStack.pop();
        newStack.pop();
        let output = newStack.toString();
        expect(output).toEqual("NULL");
    })

    test("Should instantiate an empty stack", ()=> {
        let newStack = new Stack();
        let output = newStack.toString();
        expect(output).toEqual("NULL");
    });
    });
