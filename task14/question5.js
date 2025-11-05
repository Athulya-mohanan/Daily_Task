/**
 *  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

    Test cases:
    Input: s = "roses are red"
    Output: 1

    Input: s = "aabb"
    Output: -1
 */

function firstNonRepeating(str) {
  if (typeof str !== "string" ||str.length==0) return "Invalid input";
  let result;
  for (let i of str) {
    if (str.indexOf(i) === str.lastIndexOf(i)) {
      if (i === " ") {
        result = str.indexOf(i) + ":space";
      } else {
        result = str.indexOf(i);
      }
      break;
    } else result = -1;
  }
  return result;
}

let testCase = [
  {
    input: "roses are red",
    expected: 1,
  },
  {
    input: "aabb",
    expected: -1,
  },
  {
    input: "a a",
    expected: "1:space",
  },
  {
    input: " aa",
    expected: "0:space",
  },
  {
    input:123,
    expected: "Invalid input",
  },
  {
    input: [1,2,3,4],
    expected:"Invalid input",
  },
  {
    input:"",
    expected: "Invalid input",
  },
  {
    input:" ",
    expected:"0:space"
  },
  {
    input:null,
    expected:"Invalid input"
  },
   {
    input:NaN,
    expected:"Invalid input"
  },
   {
    input:undefined,
    expected:"Invalid input"
  },
   {
    input:[],
    expected:"Invalid input"
  },
   {
    input:"#$#$)",
    expected:"4"
  },
   {
    input:"12345678900",
    expected:"0"
  },
  {
    input:"*********************************************09",
    expected:"45"
  }
];

testCase.forEach((num, index) => {
  let output = firstNonRepeating(num.input);
  let pass = output.toString() === num.expected.toString();
  console.log("Test :", index + 1, pass);
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got", output);
  console.log("-------------------------------------------");
});
