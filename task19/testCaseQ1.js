import { detectSymmetry } from "./src/question1.ts"

let testCase = [
  {
    input: [
      [1, 2, 1],
      [3, 0, 3],
      [1, 2, 1],
    ],
    expected: { Vertical: true, Horizondal: true, Diagonal: true },
  },
  {
    input: [
      [1, 2, 1],
      [1, 0, 3],
      [1, 2, 1],
    ],
    expected: { Vertical: false, Horizondal: true, Diagonal: true },
  },
  {
    input: [
      [1, 9, 1],
      [3, 0, 3],
      [1, 2, 1],
    ],
    expected: { Vertical: true, Horizondal: false, Diagonal: true },
  },
  {
    input: [
      [8, 9, 8],
      [3, 0, 3],
      [1, 9, 1],
    ],
    expected: { Vertical: true, Horizondal: false, Diagonal: false },
  },
  {
    input:[[1,2,3],[1,6,4]],
    expected:"Invalid input"
  },
  {
    input:[[1,2],[1,2]],
    expected:{Vertical:false,Horizondal:true,Diagonal:false}
  },
  {
    input:[[1,2],[]],
    expected:"Invalid input"
  },
  {
    input:[[1,2],123],
    expected:"Invalid input"
  },
  {
    input:[[],[]],
    expected:"Invalid input"
  },
  {
    input:"hello",
    expected:"Invalid input"
  },
  {
    input:[[1]],
    expected:{ Vertical: true, Horizondal: true, Diagonal: true }
  },
  {
    input:[123],
    expected:"Invalid input"
  }
];
testCase.forEach((num, index) => {
  let output = detectSymmetry(num.input);
  let pass = JSON.stringify(output) === JSON.stringify(num.expected);
  console.log("Test :", index + 1, pass ? "Pass" : "Fail");
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got :", output);
  console.log("-------------------------------------");
});

