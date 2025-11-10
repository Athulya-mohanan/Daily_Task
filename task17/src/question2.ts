function sortByKey(arr: object[], key: string, order: string) {
  if (!key || !order) return "Invalid input";
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  for (let obj of arr) {
    if (typeof obj !== "object" || Array.isArray(obj)) return "Invalid input";
  }
  let od1 = order.toLowerCase();
  if (od1 === "asce") {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i][key] > arr[j][key]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  } else if (od1 === "desc") {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i][key] < arr[j][key]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  } else {
    return "Invalid input";
  }
}
let testCase = [
  {
    input: [{ age: 30 }, { age: 20 }],
    key: "age",
    order: "asce",
    expected: [{ age: 20 }, { age: 30 }],
  },
  {
    input: [{ age: 30 }, { age: 20 }],
    key: "age",
    order: "desc",
    expected: [{ age: 30 }, { age: 20 }],
  },
  {
    input: [{ age: 30 }, { age: 20 }],
    key: "id",
    order: "asce",
    expected: [{ age: 30 }, { age: 20 }],
  },
  {
    input: [{ age: 30 }, { age: 20 }],
    key: "age",
    order: "asces",
    expected: "Invalid input",
  },
  {
    input: [
      { age: 20, id: 2 },
      { age: 30, id: 4 },
    ],
    key: "id",
    order: "desc",
    expected: [
      { age: 30, id: 4 },
      { age: 20, id: 2 },
    ],
  },
  {
    input: [
      { age: 20, id: 2, mark: 50 },
      { age: 30, id: 4, mark: 90 },
      { age: 14, id: 5, mark: 70 },
    ],
    key: "id",
    order: "desc",
    expected: [
      { age: 14, id: 5, mark: 70 },
      { age: 30, id: 4, mark: 90 },
      { age: 20, id: 2, mark: 50 },
    ],
  },
  {
    input: [
      { age: 20, id: 2, mark: 50 },
      { age: 14, id: 5, mark: 70 },
      { age: 30, mark: 90 },
      { age: 20, id: 3, mark: 50 },
    ],
    key: "id",
    order: "desc",
    expected: [
      { age: 14, id: 5, mark: 70 },
      { age: 20, id: 3, mark: 50 },
      { age: 30, mark: 90 },
      { age: 20, id: 2, mark: 50 },
    ],
  },
  {
    input: "hello",
    expected: "Invalid input",
  },
  {
    input: [
      { age: 20, id: 2, mark: 50 },
      { age: 14, id: 5, mark: 70 },
      { age: 30, mark: 90 },
      { age: 20, id: 3, mark: 50 },
    ],
    order: "desc",
    expected: "Invalid input",
  },
  {
    input: [1, 2, 3],
    key: "",
    order: "desc",
    expected: "Invalid input",
  },
  {
    input: undefined,
    key: " ",
    order: "desc",
    expected: "Invalid input",
  },
  {
    input: [
      { age: 20, id: 2, mark: 50 },
      { age: 20, id: 5, mark: 70 },
      { age: 20, mark: 90 },
      { age: 20, id: 3, mark: 50 },
    ],
    key: "age",
    order: "desc",
    expected: [
      { age: 20, id: 2, mark: 50 },
      { age: 20, id: 5, mark: 70 },
      { age: 20, mark: 90 },
      { age: 20, id: 3, mark: 50 },
    ],
  },
  {
    input: [
      { age: 20, id: 2, mark: 50 },
      [{ age: 20, id: 5, mark: 70 }],
      { age: 20, mark: 90 },
      [{ age: 20, id: 3, mark: 50 }],
    ],
    key: "age",
    order: "desc",
    expected: "Invalid input",
  },
  {
    input: [],
    key: "age",
    order: "asce",
    expected: "Invalid input",
  },
  {
    input: [
      { name: "elva", mark: 10 },
      { name: "milo", mark: 12 },
    ],
    key: "name",
    order: "desc",
    expected: [
      { name: "milo", mark: 12 },
      { name: "elva", mark: 10 },
    ],
  },
];
testCase.forEach((num, index) => {
  let output = sortByKey(num.input, num.key, num.order);
  let pass = JSON.stringify(output) === JSON.stringify(num.expected);
  console.log("Test :", index + 1, pass ? "Pass" : "Fail");
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got :", output);
  console.log("-------------------------------------");
});
