/**1. Write a function which takes an array of integers and an target. Return indices of the two numbers such that they add up to target, -1 if not found.

Test cases:
Input: [2,7,11,15], 9
Output: [0,1] */

function indicesOf(arr, target) {
  if (typeof target !== "number" || target <= 0 || Array.isArray(target))
    return "Invalid input";
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  for (let nums of arr) {
    if (typeof nums !== "number") return "Invalid input";
  }
  let index = [];
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        let indexs = [];
        indexs.push(i, j);
        index.push(indexs);
      }
    }
  }
  // console.log(index)
  for (let i of index) {
    i.sort((a, b) => a - b);
  }
  let unique = [];
  for (let subArr of index) {
    if (!unique.some((u) => JSON.stringify(u) === JSON.stringify(subArr))) {
      unique.push(subArr);
    }
  }
  if (unique.length === 0) return -1;
  else return unique;
}
// console.log(indicesOf([2, 7, 11, 15, 5, 4, 8, 1], 9));
let testCase = [
  {
    input: [2, 7, 11, 15, 5, 4, 8, 1],
    target: 9,
    expected: [
      [0, 1],
      [4, 5],
      [6, 7],
    ],
  },
  {
    input: [1, 2, 3, 4, 1, 1, 1],
    target: 9,
    expected: -1,
  },
  {
    input: [],
    target: 9,
    expected: "Invalid input",
  },
  {
    input: ["Hello", "hey"],
    target: 9,
    expected: "Invalid input",
  },
  {
    input: 123,
    target: 9,
    expected: "Invalid input",
  },
  {
    input: null,
    target: 9,
    expected: "Invalid input",
  },
  {
    input: NaN,
    target: 9,
    expected: "Invalid input",
  },
  {
    input: [1, 2, 3, 4, 5, 6],
    target: [1],
    expected: "Invalid input",
  },
  {
    input: "hello",
    target: 9,
    expected: "Invalid input",
  },
  {
    input: [2, 7, 11, 15],
    target: 9,
    expected: [[0, 1]],
  },
  {
    input: true,
    target: 3,
    expected: "Invalid input",
  },
  {
    input: {},
    target: 3,
    expected: "Invalid input",
  },
  {
    input: [1, 2, 3, 4, 5, 6],
    target: 0,
    expected: "Invalid input",
  },
  {
    input: [1, 2, 3, 4, 5, 6],
    target: -1,
    expected: "Invalid input",
  },
  {
    input: [1, 2, 3, 4, 5, 6],
    target: "hey",
    expected: "Invalid input",
  },
];
testCase.forEach((num, index) => {
  let output = indicesOf(num.input, num.target);
  let pass = JSON.stringify(output) === JSON.stringify(num.expected);
  console.log("Test :", index + 1, pass ? "Pass" : "Fail");
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got :", output);
  console.log("----------------------------------------");
});
