"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question2 = require("./question2");
let testCase = [
    {
        input: [1, 2, 2, 3, 3, 3, 4],
        expected: ["3"]
    },
    {
        input: [1, 2, 2, 2, 3, 3, 3, 4],
        expected: ["2", "3"]
    },
    {
        input: [1, 2, 2, 2, 3, 3, 3, 4, "hello", "hello", "hello"],
        expected: ["2", "3", "hello"]
    },
    {
        input: [],
        expected: "Invalid"
    },
    {
        input: "hello",
        expected: "Invalid"
    },
    {
        input: {},
        expected: "Invalid"
    },
    {
        input: [1, 2, 3, 4, 5, 6, 7, 8],
        expected: ["1", "2", "3", "4", "5", "6", "7", "8"]
    },
    {
        input: [""],
        expected: [""]
    },
    {
        input: [1, 2, 1, 1, 2],
        expected: ["1"]
    },
    {
        input: null,
        expected: "Invalid"
    }
];
testCase.forEach((num, index) => {
    let output = question2.mostFrequent(num.input);
    let pass = JSON.stringify(output) === JSON.stringify(num.expected);
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.input);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=testcase2.js.map