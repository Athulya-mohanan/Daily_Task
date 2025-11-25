"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question5 = require("./question5");
let testCase = [
    {
        input1: [1, 2, 3],
        input2: [2, 3, 4],
        expected: [2, 3]
    },
    {
        input1: [1, 2, 3],
        input2: [5, 4],
        expected: []
    },
    {
        input1: [1, 2, 3],
        input2: "hey",
        expected: "Invalid"
    },
    {
        input1: "hello",
        input2: "hey",
        expected: "Invalid"
    },
    {
        input1: [1, 2, "3"],
        input2: [2, "3", 4],
        expected: "Invalid"
    },
    {
        input1: [1, 2, [3, 5]],
        input2: [2, [3, 4], 4],
        expected: "Invalid"
    },
    {
        input1: [1, 1, 1, 1],
        input2: [1, 1, 1],
        expected: [1]
    },
    {
        input1: [1, 1, 2, 2, 2, 9, 0],
        input2: [0, 2],
        expected: [2, 0]
    },
    {
        input1: [],
        input2: [0, 2],
        expected: []
    },
    {
        input1: [],
        input2: [],
        expected: []
    },
];
testCase.forEach((num, index) => {
    let output = question5.intersection(num.input1, num.input2);
    let pass = JSON.stringify(output) === JSON.stringify(num.expected);
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.input1, num.input2);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=testcase5.js.map