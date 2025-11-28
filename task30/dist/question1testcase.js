"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question1 = require("./question1");
let testCase = [
    {
        inp1: 18,
        inp2: 48,
        expected: 6
    },
    {
        inp1: 0,
        inp2: 48,
        expected: 48
    },
    {
        inp1: -9,
        inp2: 48,
        expected: "Invalid"
    },
    {
        inp1: 9.87,
        inp2: 48,
        expected: "Invalid"
    },
    {
        inp1: 9.87,
        inp2: 48,
        expected: "Invalid"
    },
    {
        inp1: "hey",
        inp2: 48,
        expected: "Invalid"
    },
    {
        inp1: [1, 2, 3],
        inp2: 48,
        expected: "Invalid"
    },
    {
        inp1: NaN,
        inp2: 48,
        expected: "Invalid"
    },
    {
        inp1: 12,
        inp2: 12,
        expected: 12
    },
    {
        inp1: 0,
        inp2: 0,
        expected: 0
    }
];
testCase.forEach((num, index) => {
    let output = question1.euclidean(num.inp1, num.inp2);
    let pass = output.toString() === num.expected.toString();
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.inp1, num.inp2);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=question1testcase.js.map