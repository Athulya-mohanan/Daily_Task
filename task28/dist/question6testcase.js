"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question6 = require("./question6");
let testCase = [
    {
        inp1: { name: "Brad", age: "25" },
        inp2: { name: "Titan", place: "mars" },
        expected: ["name"]
    },
    {
        inp1: { name: "Brad", age: "25" },
        inp2: { name: "Titan", place: "mars", age: "30" },
        expected: ["name", "age"]
    },
    {
        inp1: { name: "Brad", age: "25" },
        inp2: { names: "Titan", place: "mars" },
        expected: "No Common Keys"
    },
    {
        inp1: {},
        inp2: { names: "Titan", place: "mars" },
        expected: "Invalid"
    },
    {
        inp1: {},
        inp2: { names: "Titan", place: "mars" },
        expected: "Invalid"
    },
    {
        inp1: "hey",
        inp2: { names: "Titan", place: "mars" },
        expected: "Invalid"
    },
    {
        inp1: 23,
        inp2: { names: "Titan", place: "mars" },
        expected: "Invalid"
    },
    {
        inp1: null,
        inp2: { names: "Titan", place: "mars" },
        expected: "Invalid"
    },
    {
        inp1: undefined,
        inp2: { names: "Titan", place: "mars" },
        expected: "Invalid"
    },
    {
        inp1: ["name"],
        inp2: { names: "Titan", place: "mars" },
        expected: "Invalid"
    }
];
testCase.forEach((num, index) => {
    let output = question6.findCommonKey(num.inp1, num.inp2);
    let pass = JSON.stringify(output) === JSON.stringify(num.expected);
    console.log(`Test ${index + 1} :`, pass ? "Pass" : "Fail");
    console.log("Input :", num.inp1, num.inp2);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("--------------------------------------------------------------------");
});
//# sourceMappingURL=question6testcase.js.map