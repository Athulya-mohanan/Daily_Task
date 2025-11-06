/**4. Write a program which takes an array of numbers as input and interprets it as a number, adds one to it, returns back as an array of numbers.

Test cases:
Input: [1,2,3]
Output: [1,2,4]

Input: [9]
Output: [1,0] */

import { utilFunction } from "../util.js";

function toNum(arr) {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return "Invalid input";
  for (let i of arr) {
    if (typeof i !== "number" || i < 0) return "Invalid input";
  }
  let num = arr.toString().split(",").join("");
  let added = Number(num) + 1;
  let result = [];
  for (let i of added.toString()) {
    result.push(Number(i));
  }
  return result;
}

let testCase = [
  {
    input: [1, 2, 3],
    expected: [1, 2, 4],
  },
  {
    input: [9],
    expected: [1, 0],
  },
  {
    input: [],
    expected: "Invalid input",
  },
  {
    input: {},
    expected: "Invalid input",
  },
  {
    input: 123,
    expected: "Invalid input",
  },
  {
    input: null,
    expected: "Invalid input",
  },
  {
    input: NaN,
    expected: "Invalid input",
  },
  {
    input: undefined,
    expected: "Invalid input",
  },
  {
    input: "hello",
    expected: "Invalid input",
  },
  {
    input: ["hello"],
    expected: "Invalid input",
  },
  {
    input: ["hello", 123],
    expected: "Invalid input",
  },
  {
    input: [-1, 2, 3],
    expected: "Invalid input",
  },
  {
    input: [123],
    expected: [1, 2, 4],
  },
  {
    input: [0, 0, 0],
    expected: [1],
  },
  {
    input: [0, 0, 1],
    expected: [2],
  },
];
testCase.forEach((num, index) => {
  let output = toNum(num.input);
  let pass = utilFunction(num.expected, output);
  console.log("Test :", index + 1, pass);
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got :", output);
  console.log("-----------------------------------------");
});


