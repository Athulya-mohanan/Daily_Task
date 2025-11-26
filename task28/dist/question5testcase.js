"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question5 = require("./question5");
let testCase = [
    {
        input: [1, 2, 3, 2],
        expected: 4
    },
    {
        input: [1, 1, 1, 1, 1],
        expected: 0
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
        input: [1, 2, "k", "6"],
        expected: "Invalid"
    },
    {
        input: [],
        expected: "Invalid"
    },
    {
        input: {},
        expected: "Invalid"
    },
    {
        input: null,
        expected: "Invalid"
    },
    {
        input: NaN,
        expected: "Invalid"
    },
    {
        input: undefined,
        expected: "Invalid"
    },
];
testCase.forEach((num, index) => {
    let output = question5.sumOfUnique(num.input);
    let pass = output.toString() === num.expected.toString();
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.input);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=question5testcase.js.map