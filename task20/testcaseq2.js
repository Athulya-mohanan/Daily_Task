import { analyzeHeatmap } from "./src/question2.ts";
let testCase = [
  {
    input: [
      [30, 32, 35],
      [28, 40, 33],
      [31, 36, 38],
    ],
    expected: {
      maxTemp: 40,
      minTemp: 28,
      averageTemp: 33.7,
      hottestPoint: [1, 1],
      coldestPoint: [1, 0],
    },
  },
  {
    input: [
      [30, 32, 35, 40],
      [28, 40, 33],
      [31, 36, 38],
    ],
    expected: {
      maxTemp: 40,
      minTemp: 28,
      averageTemp: 34.3,
      hottestPoint: [0, 3],
      coldestPoint: [1, 0],
    },
  },
  {
    input: [
      [40, 30, 32, 28, 35, 40],
      [28, 40, 33],
      [31, 36, 28, 38],
    ],
    expected: {
      maxTemp: 40,
      minTemp: 28,
      averageTemp: 33.8,
      hottestPoint: [0, 0],
      coldestPoint: [0, 3],
    },
  },
  {
    input: [[12], [12], [12]],
    expected: {
      maxTemp: 12,
      minTemp: 12,
      averageTemp: 12,
      hottestPoint: [0, 0],
      coldestPoint: [0, 0],
    },
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
    input: [["hello"], [12], [12]],
    expected: "Invalid input",
  },
  {
    input: [
      [40, -30, 32, 28, 35, -40],
      [28, 40, -33],
      [31, 36, -28, 38],
    ],
    expected: {
      maxTemp: 40,
      minTemp: -40,
      averageTemp: 13.6,
      hottestPoint: [0, 0],
      coldestPoint: [0, 5],
    },
  },
  {
    input: [
      [40, -30.8, 32, 28, 35.45, -40],
      [28, 40.16, -33.7],
      [31, 36, -28.12, 38],
    ],
    expected: {
      maxTemp: 40.16,
      minTemp: -40,
      averageTemp: 13.5,
      hottestPoint: [1, 1],
      coldestPoint: [0, 5],
    },
  },
  {
    input: [[], [], [1, 2, 3]],
    expected: {
      maxTemp: 3,
      minTemp: 1,
      averageTemp: 2,
      hottestPoint: [2, 2],
      coldestPoint: [2, 0],
    },
  },
  {
    input: [[], [], []],
    expected: "Invalid input",
  },
  {
    input: [],
    expected: "Invalid input",
  },
  {
    input: [[], [1], []],
    expected: {
      maxTemp: 1,
      minTemp: 1,
      averageTemp: 1,
      hottestPoint: [1, 0],
      coldestPoint: [1, 0],
    },
  },
];
testCase.forEach((num, index) => {
  let output = analyzeHeatmap(num.input);
  let pass = JSON.stringify(output) === JSON.stringify(num.expected);
  console.log("Test :", index + 1, pass ? "Pass" : "Fail");
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got :", output);
  console.log("-------------------------------------");
});
