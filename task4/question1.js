/**1. Write a function to flatten an array of arbitrarily nested arrays into a flat array.

Test cases:
Input: [1, [2, [3, [4]], 5]]
Output: [1, 2, 3, 4, 5] */
import { utilFunction } from "../util.js"

function flatArray(arr){
    if(!Array.isArray(arr)) return "Invalid input"
    let flatted=arr.flat(Infinity)
    return flatted
}
console.log(flatArray([1, [2, [3, [4]], 5]]))

let testCase=[
    {
        input:[1, [2, [3, [4]], 5]],
        expected:[1,2,3,4,5]
    },
    {
        input:[1,[4,6,[89,[70]]]],
        expected:[ 1, 4, 6, 89, 70 ]
    },
    {
        input:"hello",
        expected:"Invalid input"
    },
    {
        input:["hello",["there",["input",["return"]]]],
        expected:[ 'hello', 'there', 'input', 'return' ]
    },
    {
        input:{},
        expected:"Invalid input"
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:[null],
        expected:[null]
    },
    {
        input:true,
        expected:"Invalid input"
    },
    {
        input:[{},[1,2,3,["repeat",["hey"]]]],
        expected:[ {}, 1, 2, 3, 'repeat', 'hey' ]
    },
    {
        input:[],
        expected:[]
    },
    {
        input:NaN,
        expected:"Invvalid input"
    },
    {
        input:undefined,
        expected:"Invalid input"
    },
    {
        input:null,
        expected:"Invalid input"
    },
    {
        input:"",
        expected:"Invalid input"
    },
    {
        input:[1,2,3,[5,6,[,[]]]],
        expected:[ 1, 2, 3, 5, 6 ]
    }
    
]
testCase.forEach((num,index)=>{
    let output=flatArray(num.input)
    let pass=utilFunction(num.expected,output)
    console.log(`Test : ${index+1}`,pass)
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("--------------------------------")
})