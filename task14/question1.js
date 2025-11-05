/*
    1. Write a function to remove all the falsy values from the given array.

    Test cases:
    Input: [54, false, null, 9, "HI", 0]
    Output; [54, 9, "HI"]
*/

import { utilFunction } from "../util.js"

function removeFalsy(arr){
    if(!Array.isArray(arr) || arr.length===0) return "Invalid input"
    let result=[]
    let falsyvalues=[null,0,false,'',NaN,undefined]
    for(let i of arr)
    if(!falsyvalues.includes(i)){
        result.push(i)
    }
    
    return result
}
let testCase=[
    {
        input:[1,2,3,4,false,null,7,undefined],
        expected:[1,2,3,4,7]
    },
    {
        input:[1,2,3,4],
        expected:[1,2,3,4]
    },
    {
        input:[1,2,3,''],
        expected:[1,2,3]
    },
    {
        input:[NaN,1],
        expected:[1]
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:{num:1},
        expected:"Invalid input"
    },
    {
        input:[],
        expected:"Invalid input"
    },
    {
        input:["hello","hey","there"],
        expected:["hello","hey","there"]
    },
    {
        input:"",
        expected:"Invalid input"
    },
     {
        input:[""],
        expected:[]
    },
    {
        input:[null,0,false,'',NaN,undefined],
        expected:[]
    },
      {
        input:["null","0","false",'',"NaN","undefined"],
        expected:["null","0","false","NaN","undefined"]
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
    }
]
testCase.forEach((num,index)=>{
    let output=removeFalsy(num.input)
    let pass=utilFunction(num.expected,output)
    console.log("Test :",index+1, pass)
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("--------------------------------")
})