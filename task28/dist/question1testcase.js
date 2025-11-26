"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question1 = require("./question1");
let testCase = [
    {
        input: 25,
        expected: "77°F"
    },
    {
        input: 0,
        expected: "32°F"
    },
    {
        input: -30,
        expected: "-22°F"
    },
    {
        input: 2.75,
        expected: "36.95°F"
    },
    {
        input: "2.75",
        expected: "Invalid"
    },
    {
        input: [1, 2, 3],
        expected: "Invalid"
    },
    {
        input: {},
        expected: "Invalid"
    },
    {
        input: 5 / 0,
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
    let output = question1.toFahrenheit(num.input);
    let pass = output.toString() === num.expected.toString();
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.input);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=question1testcase.js.map