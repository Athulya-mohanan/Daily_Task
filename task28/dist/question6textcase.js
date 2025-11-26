"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question6 = require("./question6");
let testCase = [
    {
        inp1: { name: "Brad", age: "25" },
        inp2: { name: "Titan", place: "mars" },
        expected: ["name"]
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
//# sourceMappingURL=question6textcase.js.map