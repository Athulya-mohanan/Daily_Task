function findFactorial(num) {
  if (typeof num !== "number" || num < 0 || Math.round(num) !== num)
    return "Invalid input";
  if (num === 0 || num === 1) return 1;
  return num * findFactorial(num - 1);
}
// console.log(findFactorial(0))

let testCase = [
  {
    input: 0,
    expected: 1,
  },
  {
    input: 5,
    expected: 120,
  },
  {
    input: "123",
    expected: "Invalid input",
  },
  {
    input: -20,
    expected: "Invalid input",
  },
  {
    input: 8.97,
    expected: "Invalid input",
  },
  {
    input: [1, 2, 3],
    expected: "Invalid input",
  },
  {
    input: true,
    expected: "Invalid input",
  },
  {
    input: {},
    expected: "Invalid input",
  },
  {
    input: 1 / 3,
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
    input: [],
    expected: "Invalid input",
  },
  {
    input: "",
    expected: "Invalid input",
  },
  {
    input: 4 / 2,
    expected: 2,
  },
  {
    input: -5 / 4,
    expected: "Invalid input",
  },
];

testCase.forEach((num, index) => {
  let output = findFactorial(num.input);
  let pass = output.toString() === num.expected.toString();
  console.log("Tes1 :", index + 1, pass ? "Pass" : "Fail");
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got :", output);
  console.log("-----------------------------");
});
