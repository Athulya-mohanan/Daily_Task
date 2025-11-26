"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question3 = require("./question3");
let testCase = [
    {
        input: [{ key: "a", value: 1 }, { key: "b", value: 2 }],
        expected: { a: 1, b: 2 }
    },
    {
        input: [{ name: "a", "age": 1 }, { key: "b", value: 2 }],
        expected: { a: 1, b: 2 }
    },
    {
        input: [{ key: "a", value: 1 }, { key: "b" }],
        expected: "Invalid"
    },
    {
        input: [{ key: "a", value: 1 }, { key: "b" }],
        expected: "Invalid"
    },
    {
        input: "Hey",
        expected: "Invalid"
    },
    {
        input: 123,
        expected: "Invalid"
    },
    {
        input: [1, 23],
        expected: "Invalid"
    },
    { input: [{ key: "a", value: 1 }],
        expected: { a: 1 }
    },
    {
        input: [{}],
        expected: "Invalid"
    }
];
testCase.forEach((num, index) => {
    let output = question3.convertArrayObject(num.input);
    let pass = JSON.stringify(output) === JSON.stringify(num.expected);
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.input);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=question3testcase.js.map