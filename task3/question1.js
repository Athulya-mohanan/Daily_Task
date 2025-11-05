/**1. Write a program that should interpret each array item as a number, and return the sum.

Test cases:
Input: [[1,2,3], [0, 7]]
Expected output: 130 // 123 + 7 = 130 */
import { utilFunction } from "../util.js";
function sumofArray(arr) {
  if (!Array.isArray(arr)) return "Invalid input";
  let flaten = arr.flat();
  for (let i of flaten) {
    if (typeof i !== "number" || i < 0) return "Invalid input";
  }
  let array = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].toString().split(",").join("");
    if (str.replaceAll(/\s/g, "") === "") return "Invalid input";
    array.push(Number(str));

    if (arr.length < 2) return "Enter more than one array";
  }
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
// console.log(sumofArray([[-1,2,-3,4],[0,6,8]]))

// console.log(sumofArray([[1, 2, 3],[0, 7],[1,2,3]]))

let testCase = [
  {
    input: [
      [1, 2, 3],
      [0, 7],
    ],
    expect: 13,
  },
  {
    input: [[1, 2, 3, 4]],
    expect: "Enter more than one array",
  },
  {
    input: [[], []],
    expect: "Invalid input",
  },
  {
    input: [[1, 2, 3], []],
    expect: "Invalid input",
  },
  {
    input: ["hello"],
    expect: "Invalid input",
  },
  {
    input: [["there"], ["hey"]],
    expect: "Invalid input",
  },
  {
    input: [["hey"], [1, 2, 4]],
    expect: "Invalid input",
  },
  {
    input: [
      [1, 2, 3, "hey"],
      [1, 2, 3],
    ],
    expect: "Invalid input",
  },
  {
    input: [[{}, {}]],
    expect: "Invalid input",
  },
  {
    input: {},
    expect: "Invalid input",
  },
  {
    input: null,
    expect: "Invalid input",
  },
  {
    input: NaN,
    expect: "Invalid input",
  },
  {
    input: undefined,
    expect: "Invalid input",
  },
  {
    input: [
      [-4, -7, -8],
      [9, 8, 7],
    ],
    expect: "Invalid input",
  },
  {
    input: [[null], [undefined]],
    expect: "Invalid input",
  },
  {
    input: [1],
    expect: "Enter more than one array",
  },
];
testCase.forEach((obj, num) => {
  let output = sumofArray(obj.input);
  let pass = utilFunction(output, obj.expect);
  console.log(`Test :${num + 1}`, pass);
  console.log(`Input`, obj.input);
  console.log(`Expected: `, obj.expect);
  console.log(`Got:`, output);
  console.log("---------------------------------");
});
