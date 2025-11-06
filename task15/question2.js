/**
 * 2. Write a function, given a sorted array of distinct integers and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.

Test cases:
Input: [1,3,5,6], 5
Output: 2
 */

function targetIndex(arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  for (let i of arr) {
    if (typeof i !== "number") return "Invalid input";
  }
  let cpyarr = [...arr];
  let cpyarr2 = [...arr];
  let srt1 = cpyarr.sort((a, b) => a - b);
  let srt2 = cpyarr2.sort((a, b) => b - a);
  if (srt1.toString() === arr.toString()) {
    if (srt1.includes(target)) return srt1.indexOf(target);
    else {
      srt1.push(target);
      let sorted = srt1.sort((a, b) => a - b);
      return sorted.indexOf(target);
    }
  } else if (srt2.toString() === arr.toString()) {
    if (srt2.includes(target)) return srt2.indexOf(target);
    else {
      srt2.push(target);
      let sorted = srt2.sort((a, b) => b - a);
      return sorted.indexOf(target);
    }
  } else return "Array is not sorted";
}
let testCase = [
  {
    input: [1, 3, 5, 6],
    target: 5,
    expected: 2,
  },
  {
    input: [1, 3, 5, 6],
    target: 15,
    expected: 4,
  },
  {
    input: [1, 3, 5, 6],
    target: 2,
    expected: 1,
  },
  {
    input: [6, 3, 9, 1, 7, 2],
    target: 2,
    expected: "Array is not sorted",
  },
  {
    input: [7, 6, 5, 4, 3, 2, 1],
    target: 2,
    expected: 5,
  },
  {
    input: [],
    target: 2,
    expected: "Invalid input",
  },
  {
    input: {},
    target: 2,
    expected: "Invalid input",
  },
  {
    input: null,
    target: 2,
    expected: "Invalid input",
  },
  {
    input: undefined,
    target: 2,
    expected: "Invalid input",
  },
  {
    input: NaN,
    target: 2,
    expected: "Invalid input",
  },
  {
    input: ["hey", "there"],
    target: "hey",
    expected: "Invalid input",
  },
  {
    input: [-1, -2, -3, -4],
    target: -5,
    expected: 4,
  },
  {
    input: [7, 6, 5, 4, 3, 2, 1],
    target: 8,
    expected: 0,
  },
  {
    input: 123,
    target: "hey",
    expected: "Invalid input",
  },
  {
    input: "hello",
    target: "hey",
    expected: "Invalid input",
  },
];
testCase.forEach((num, index) => {
  let output = targetIndex(num.input, num.target);
  let pass = output.toString() === num.expected.toString();
  console.log("Test :", index + 1, pass ? "Pass" : "Fail");
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got", output);
  console.log("----------------------------------------------");
});
