// 5. Write a program to sort a given array of numbers in ascending order. Don't use in-built functions.

import { utilFunction } from "../util.js";

// Test cases:
//  arr = [5, 4, 1, 2, 3]
// Output: [1, 2, 3, 4, 5]

function sortArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  for (let i of arr) {
    if (typeof i !== "number") return "Invalid input";
  }
  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      while (arr[i] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[i];
        arr[i] = temp;
        //  console.log(arr)
      }
    }
  }
  let removedupe = new Set([...arr]);
  let result = [...removedupe];
  return result;
}
let testCase = [
  {
    input: [5, 4, 1, 2, 3],
    expected: [1, 2, 3, 4, 5],
  },
  {
    input: [5, 1, 4, 1, 2, 2, 5, 3],
    expected: [1, 2, 3, 4, 5],
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7],
    expected: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    input: [-1, 2, -3, 4, 5, 6, -7],
    expected: [-7, -3, -1, 2, 4, 5, 6],
  },
  {
    input: "123",
    expected: "Invalid input",
  },
  {
    input: null,
    expected: "Invalid input",
  },
  {
    input: undefined,
    expected: "Invalid input",
  },
  {
    input: NaN,
    expected: "Invalid input",
  },
  {
    input: {},
    expected: "Invalid input",
  },
  {
    input: [1, 4, 5, 2, [8, 9, 0, [3, 4, 6]]],
    expected: "Invalid input",
  },
  {
    input: [1, 8, 3, 0, 6, 2, 6],
    expected: [0, 1, 2, 3, 6, 8],
  },
  {
    input: [1, 1, 1, 1, 1, 1, 1],
    expected: [1],
  },
  {
    input: 12,
    expected: "Invalid input",
  },
  {
    input: ["hello"],
    expected: "Invalid input",
  },
  {
    input: [],
    expected: "Invalid input",
  },
];

testCase.forEach((num, index) => {
  let output = sortArray(num.input);
  let pass = utilFunction(output, num.expected);
  console.log("Test :", index + 1, pass);
  console.log("Input :", num.input);
  console.log("Expect", num.expected);
  console.log("Got :", output);
  console.log("--------------------------------------------");
});
