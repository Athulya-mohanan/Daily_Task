"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linearsearch = require("./linearsearch");
let testCase = [
    {
        input: [12, 0, 6, 14, 10, 8, 7],
        item: 6,
        expected: "Item 6 is found at index 2"
    },
    {
        input: [12, 0, 6, 14, 10, 8, 7],
        item: 20,
        expected: "Item not found"
    },
    {
        input: [],
        item: 20,
        expected: "Invalid"
    },
    {
        input: 123,
        item: 20,
        expected: "Invalid"
    },
    {
        input: "hello",
        item: 20,
        expected: "Invalid"
    },
    {
        input: true,
        item: 20,
        expected: "Invalid"
    },
    {
        input: ["hello"],
        item: 20,
        expected: "Invalid"
    },
    {
        input: [1, 2, 3, 4, 5],
        item: "3",
        expected: "Invalid"
    }
];
testCase.forEach((num, index) => {
    let output = linearsearch.linerarsearch(num.input, num.item);
    let pass = JSON.stringify(output) === JSON.stringify(num.expected);
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.input, num.item);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=linearsearchtestcase.js.map