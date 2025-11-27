import binsearch = require("./binsearch")

let testCase=[
    {
        input:[1,2,3,4,5,6,7],
        item:3,
        expected:"Item 3 found at index 2"
    },
     {
        input:[1,2,3,4,5,6,7],
        item:8,
        expected:"Item not found"
    },
     {
        input:[],
        item:8,
        expected:"Invalid"
    }, {
        input:123,
        item:8,
        expected:"Invalid"
    },
     {
        input:"hello",
        item:8,
        expected:"Invalid"
    },
     {
        input:["one",1,3],
        item:8,
        expected:"Invalid"
    },
      {
        input:[1,0,8,7,6,9,5,4],
        item:8,
        expected:"Array must be sorted"  
    },
     {
        input:{},
        item:"8",
        expected:"Invalid"  
    },
     {
        input:null,
        item:"8",
        expected:"Invalid"  
    },
     {
        input:undefined,
        item:"8",
        expected:"Invalid"  
    },
]

testCase.forEach((num,index)=>{
    let output=binsearch.binarySearch(num.input,num.item)
    let pass=JSON.stringify(output)===JSON.stringify(num.expected)
    console.log(`Test ${index+1} :`,pass?"Pass":"Fail")
    console.log("Input :",num.input,num.item)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("--------------------------------------------------------------------")
})