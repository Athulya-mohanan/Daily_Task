import { SortByScoreRank } from "./src/question3.ts"

let testCase = [
  {
    input: [100, 100, 90, 80],
    expected: [
      { score: 100, rank: 1 },
      { score: 100, rank: 1 },
      { score: 90, rank: 2 },
      { score: 80, rank: 3 },
    ],
  },
  {
    input: "hello",
    expected: "Invalid input",
  },
  {
    input: 123,
    expected: "Invalid input",
  },
  {
    input: { score: 12 },
    expected: "Invalid input",
  },
  {
    input: [1, 2, 3, "Hey"],
    expected: "Invalid input",
  },
  {
    input: [],
    expected: "Invalid input",
  },
  {
    input: true,
    expected: "Invalid input",
  },
  {
    input: [100, 100, 100, 100],
    expected: [
      { score: 100, rank: 1 },
      { score: 100, rank: 1 },
      { score: 100, rank: 1 },
      { score: 100, rank: 1 },
    ],
  },
  {
    input:[-1,-2],
    expected:[ { score: -1, rank: 1 }, { score: -2, rank: 2 } ]
  },
  {
    input:[0,100,200],
    expected:[
  { score: 200, rank: 1 },
  { score: 100, rank: 2 },
  { score: 0, rank: 3 }
]
  }
];

testCase.forEach((num, index) => {
  let output = SortByScoreRank(num.input);
  let pass = JSON.stringify(output) === JSON.stringify(num.expected);
  console.log("Test :", index + 1, pass ? "Pass" : "Fail");
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got :", output);
  console.log("-------------------------------------");
});