/**Write a function Partition(arr, fn) that splits an array into two arrays based on a
predicate function fn.
Example:
Input: [1,2,3,4], x => x % 2 === 0
Output: [[2,4], [1,3] */

import { utilFunction } from "../util.js";

function partitionArray(arr, fn) {
  if (!Array.isArray(arr) || arr.length == 0) return "Invalid input";
  for (let i of arr) {
    if (i === undefined || i === NaN || i === null) return "Invalid input";
  }
  let success = [];
  let balance = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      success.push(arr[i]);
    } else {
      balance.push(arr[i]);
    }
  }
  result.push(success);
  result.push(balance);
  return result;
}
// console.log(partitionArray([1,2,3,4],x=>x%2===0))

let testCase = [
  {
    input: [1, 2, 3, 4],
    func: (x) => x % 2 === 0,
    expected: [
      [2, 4],
      [1, 3],
    ],
  },
  {
    input: [1, 2, 3, 4],
    func: (x) => x > 3,
    expected: [[4], [1, 2, 3]],
  },
  {
    input: [1, 2, 3, 4],
    func: (x) => x / 2 === 2,
    expected: [[4], [1, 2, 3]],
  },
  {
    input: "Hello",
    func: (x) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: NaN,
    func: (x) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: null,
    func: (x) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: undefined,
    func: (x) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: [],
    func: (x) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: {},
    func: (x) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: [1, 2, "Hey"],
    func: (x) => x / 2 === 2,
    expected: [[], [1, 2, "Hey"]],
  },
  {
    input: [1, 2, null],
    func: (x) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: 123,
    func: (x) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: true,
    func: (x) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: [-1, -5, -9, 1, 0],
    func: (x) => x < 0,
    expected: [
      [-1, -5, -9],
      [1, 0],
    ],
  },
  {
    input: ["hello", "hey", 1, 2, 3],
    func: (x) => typeof x === "string",
    expected: [
      ["hello", "hey"],
      [1, 2, 3],
    ],
  },
];
testCase.forEach((num, index) => {
  let output = partitionArray(num.input, num.func);
  let pass = JSON.stringify(output) === JSON.stringify(num.expected);
  console.log("Test :", index + 1, pass ? "Pass" : "Fail");
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got :", output);
  console.log("-----------------------------------------------");
});
