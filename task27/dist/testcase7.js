"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question7 = require("./question7");
let testCase = [
    {
        input: "helloThere IS One",
        expected: 7
    },
    {
        input: 123,
        expected: "Invalid"
    },
    {
        input: [1, 23],
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
        input: undefined,
        expected: "Invalid"
    },
    {
        input: NaN,
        expected: "Invalid"
    },
    {
        input: " ",
        expected: "Invalid"
    },
    {
        input: "Q",
        expected: 0
    },
    {
        input: "1234",
        expected: 0
    }
];
testCase.forEach((num, index) => {
    let output = question7.countVovels(num.input);
    let pass = output.toString() === num.expected.toString();
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.input);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=testcase7.js.map