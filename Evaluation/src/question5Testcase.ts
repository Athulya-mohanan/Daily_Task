import question5 = require("./question5");


let testCase = [
  {
    input: [
      { name: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
    ],

    searchText: "m",
    expected:[ { name: 'Mouse', price: 800 }, { name: 'Monitor', price: 12000 } ]
  },
  {
    input: [
      { name: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
    ],

    searchText: "M",
    expected:[ { name: 'Mouse', price: 800 }, { name: 'Monitor', price: 12000 } ]
  },
  {
    input: [
      { name: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
    ],

    searchText: "MoUse",
    expected:[ { name: 'Mouse', price: 800 }]
  },
   {
    input: [
      { name: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
    ],

    searchText: "To",
    expected:[{ name: "Laptop", price: 60000 }, { name: "Monitor", price: 12000 }]
  },
  {
    input: [
      { age: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
    ],

    searchText: "To",
    expected:"Invalid input"
  },
   {
    input: [
      { name: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
    ],

    searchText: "k",
    expected:"No Match found"
  },
   {
    input: [
      { name: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
    ],

    searchText: 123,
    expected:"Invalid input"
  },
   {
    input: [
      { name: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
    ],

    searchText: null,
    expected:"Invalid input"
  },
   {
    input: 123,

    searchText: null,
    expected:"Invalid input"
  },
   {
    input: [],

    searchText: null,
    expected:"Invalid input"
  },
];

testCase.forEach((num,index)=>{
    let output=question5.filterProducts(num.input,num.searchText)
    let pass=JSON.stringify(output)===JSON.stringify(num.expected)
    console.log("Test :",index+1,pass?"Pass":"Fail")
    console.log("input",num.input)
    console.log("expected ",num.expected)
    console.log("Got",output)
    console.log("--------------------------------------------")
})