"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question2 = require("./question2");
let testCase = [
    {
        inp1: [1, 2, 3, 4, 5],
        inp2: 2,
        expected: [4, 5, 1, 2, 3]
    },
    {
        inp1: [1, 2, 3, 4, 5],
        inp2: 0,
        expected: [1, 2, 3, 4, 5]
    },
    {
        inp1: [1, 2, 3, 4, 5],
        inp2: 5,
        expected: [1, 2, 3, 4, 5]
    },
    {
        inp1: [1, 2, 3, 4, 5],
        inp2: 6,
        expected: "Invalid"
    },
    {
        inp1: "hello",
        inp2: 6,
        expected: "Invalid"
    },
    {
        inp1: 123,
        inp2: 6,
        expected: "Invalid"
    },
    {
        inp1: [1, 2, 3],
        inp2: -8,
        expected: "Invalid"
    },
    {
        inp1: [1, 2, 3],
        inp2: 2.5,
        expected: "Invalid"
    },
    {
        inp1: [1],
        inp2: 1,
        expected: [1]
    },
];
testCase.forEach((num, index) => {
    let output = question2.rotatesArrayBySteps(num.inp1, num.inp2);
    let pass = JSON.stringify(output) === JSON.stringify(num.expected);
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.inp1, num.inp2);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=question2testcase.js.map