"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question4 = require("./question4");
let testCase = [
    {
        input: 9000,
        expected: "2 hours 30 minutes 0 seconds"
    },
    {
        input: 74097,
        expected: "20 hours 34 minutes 57 seconds"
    },
    {
        input: 1,
        expected: "0 hours 0 minutes 1 seconds"
    },
    {
        input: 0,
        expected: "0 hours 0 minutes 0 seconds"
    },
    {
        input: "hello",
        expected: "Invalid"
    },
    {
        input: true,
        expected: "Invalid"
    },
    {
        input: [123],
        expected: "Invalid"
    },
    {
        input: 6 / 0,
        expected: "Invalid"
    },
    {
        input: NaN,
        expected: "Invalid"
    },
    {
        input: null,
        expected: "Invalid"
    },
    {
        input: 3000.89,
        expected: "Invalid"
    }
];
testCase.forEach((num, index) => {
    let output = question4.secondsToTime(num.input);
    let pass = output.toString() === num.expected.toString();
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.input);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=question4testcase.js.map