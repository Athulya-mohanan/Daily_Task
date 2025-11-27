"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question1bubble = require("./question1bubble");
const selectionsort = require("./selectionsort");
let testCase = [
    {
        input: [12, 0, 6, 14, 10, 8, 7],
        expected: [0, 6, 7, 8, 10, 12, 14],
    },
    {
        input: [12.8, 0, 6.8, 14.9, 10.5, 10.4, 12.5],
        expected: [0, 6.8, 10.4, 10.5, 12.5, 12.8, 14.9],
    },
    {
        input: [-1, -2, -3, -4, 5, 7, 8],
        expected: [-4, -3, -2, -1, 5, 7, 8]
    },
    {
        input: 123,
        expected: "Invalid"
    },
    {
        input: "hey",
        expected: "Invalid"
    },
    {
        input: [1, 3, "5"],
        expected: "Invalid"
    }, {
        input: true,
        expected: "Invalid"
    },
    {
        input: undefined,
        expected: "Invalid"
    },
    {
        input: null,
        expected: "Invalid"
    },
    {
        input: [1, 3, [4, 6]],
        expected: "Invalid"
    },
];
testCase.forEach((num, index) => {
    let output = selectionsort.selectionsort(num.input);
    let pass = JSON.stringify(output) === JSON.stringify(num.expected);
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.input);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=selectionsorttestcase.js.map