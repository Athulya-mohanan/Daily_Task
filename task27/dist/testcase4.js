"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question4 = require("./question4");
let testCase = [
    {
        input: "hello_world_from_js",
        expected: "helloWorldFromJs"
    },
    {
        input: "hello__world_from_js",
        expected: "Invalid"
    },
    {
        input: "_hello_world_from_js",
        expected: "Invalid"
    },
    {
        input: "hello_world_from_js_",
        expected: "Invalid"
    },
    {
        input: "hellO_world_from_js_",
        expected: "Invalid"
    },
    {
        input: 123,
        expected: "Invalid"
    },
    {
        input: [123],
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
        input: "",
        expected: "Invalid"
    }
];
testCase.forEach((num, index) => {
    let output = question4.toCamelCase(num.input);
    let pass = output.toString() === num.expected.toString();
    console.log("Test :", index + 1, pass ? "Pass" : "Fail");
    console.log("Input :", num.input);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("----------------------------------------------");
});
//# sourceMappingURL=testcase4.js.map