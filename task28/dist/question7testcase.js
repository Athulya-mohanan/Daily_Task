"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question7 = require("./question7");
let testCase = [
    {
        input: "?name=John&age=20&active=true",
        expected: { name: "John", age: "20", active: "true" }
    },
    {
        input: "name=John&age=20&active=true",
        expected: "Invalid"
    },
    {
        input: "?name=",
        expected: { name: "" }
    },
    {
        input: { name: "hello" },
        expected: "Invalid"
    },
    {
        input: 123,
        expected: "Invalid"
    },
    {
        input: true,
        expected: "Invalid"
    },
    {
        input: [1, 2, 3],
        expected: "Invalid"
    },
    {
        input: "",
        expected: "Invalid"
    },
    {
        input: "",
        expected: "Invalid"
    },
    {
        input: undefined,
        expected: "Invalid"
    }
];
testCase.forEach((num, index) => {
    let output = question7.convertUrlQuery(num.input);
    let pass = JSON.stringify(output) === JSON.stringify(num.expected);
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.input);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=question7testcase.js.map