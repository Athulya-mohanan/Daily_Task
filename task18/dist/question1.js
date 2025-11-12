"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function series(n) {
    if (typeof (n) !== "number" || n <= 0 || Math.round(n) !== n || Array.isArray(n))
        return "Invalid input";
    let sum = 0n;
    for (let i = 1n; i <= BigInt(n); i++) {
        sum += (i ** i);
    }
    let result = sum.toString().slice(-10).padStart(10, "0");
    return result;
}
// console.log(series(100))
let testCase = [
    {
        input: 1000,
        expected: 9110846700
    },
    {
        input: "hello",
        expected: "Invalid input"
    },
    {
        input: true,
        expected: "Invalid input"
    },
    {
        input: 3,
        expected: "0000000032"
    },
    {
        input: [3],
        expected: "Invalid input"
    },
    {
        input: {},
        expected: "Invalid input"
    },
    {
        input: 0,
        expected: "Invalid input"
    },
    {
        input: -14,
        expected: "Invalid input"
    },
    {
        input: 16.8,
        expected: "Invalid input"
    },
    {
        input: NaN,
        expected: "Invalid input"
    },
    {
        input: undefined,
        expected: "Invalid input"
    },
    {
        input: null,
        expected: "Invalid input"
    },
    {
        input: [],
        expected: "Invalid input"
    },
    {
        input: 5 * 100,
        expected: 1688579600
    },
];
testCase.forEach((num, index) => {
    let output = series(num.input);
    let pass = output.toString() === num.expected.toString();
    console.log("Test :", index + 1, pass ? "Pass" : "Fail");
    console.log("Input :", num.input);
    console.log("Expected :", num.expected);
    console.log("Got :", output);
    console.log("---------------------------------");
});
//# sourceMappingURL=question1.js.map