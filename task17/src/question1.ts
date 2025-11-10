function partitionArray(arr: number[], fn: Function) {
  if (!Array.isArray(arr)) return "Invalid input";
  if (!fn) return "Invalid input";
  let success: number[] = [];
  let balance: number[] = [];
  for (let i of arr) {
    if (fn(i)) {
      success.push(i);
    } else {
      balance.push(i);
    }
  }
  let result = [success, balance];
  return result;
}
// console.log(partitionArray([1,2,3,4],(x:number)=>x%2===0))

let testCase = [
  {
    input: [1, 2, 3, 4],
    func: (x: number) => x % 2 === 0,
    expected: [
      [2, 4],
      [1, 3],
    ],
  },
  {
    input: [1, 2, 3, 4],
    func: (x: number) => x > 3,
    expected: [[4], [1, 2, 3]],
  },
  {
    input: [1, 2, 3, 4],
    func: (x: number) => x / 2 === 2,
    expected: [[4], [1, 2, 3]],
  },
  {
    input: "Hello",
    func: (x: number) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: [1, 2, 3, 4],
    // func:(x:number)=>x>3,
    expected: "Invalid input",
  },
  {
    input: null,
    func: (x: number) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: undefined,
    func: (x: number) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: {},
    func: (x: number) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: [1, 2, "Hey"],
    func: (x: number) => x / 2 === 2,
    expected: [[], [1, 2, "Hey"]],
  },
  {
    input: 123,
    func: (x: number) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: true,
    func: (x: number) => x / 2 === 2,
    expected: "Invalid input",
  },
  {
    input: [-1, -5, -9, 1, 0],
    func: (x: number) => x < 0,
    expected: [
      [-1, -5, -9],
      [1, 0],
    ],
  },
  {
    input: ["hello", "hey", 1, 2, 3],
    func: (x: string) => typeof x === "string",
    expected: [
      ["hello", "hey"],
      [1, 2, 3],
    ],
  },
  {
    input: ["hello", "hey", { a: 1, b: 3 }, "me"],
    func: (x: string) => typeof x === "string",
    expected: [["hello", "hey", "me"], [{ a: 1, b: 3 }]],
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
