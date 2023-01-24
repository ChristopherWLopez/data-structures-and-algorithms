
const Stack = require("./stack-imp");

describe("stack tests", ()=>{
    test("should pop out of a stack",()=>{
        let stack = new Stack();
        stack.push("1");
        stack.push("2");
        stack.push("3");

        let popped = stack.pop();

        expect(popped).toEqual("3");
    })
    });
