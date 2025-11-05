/**13. Write a program that takes a list of strings as input and returns the longest word among them.

Test cases:
Input: ["cat", "dog", "elephant", "tiger"]
Expected output: "elephant" */
import { utilFunction } from "../util.js"
function largestWord(arr){
    if(!Array.isArray(arr)) return "Invalid input"
    for(let i of arr){
        if(typeof(i)!=="string")
            return "Array must contain strings"
    }
    let len=[]
    let result=[]
    for(let i in arr){
        len.push(arr[i].length)
    }
    let largest=len.sort((a,b)=>b-a)
    for(let i in arr){
        if(largest[0]===arr[i].length){
            result.push (arr[i])
        }
    }
    return result
}
// console.log(largestWord(["programming", "is", "fun","programming"]))
let testCase=[
    {
        input:"I love coding",
        expected:"Invalid input"
    },
    {
        input:["code","Programs","easly"],
        expected:["Programs"]
    },
    {
        input:["I love coding"],
        expected:"I love coding"
    },
    {
        input:[123,456],
        expected:"Array must contain strings"
    },
    {
        input:[123,"hello","there"],
        expected:"Array must contain strings"
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:{},
        expected:"Invalid input"
    },
    {
        input:"1 2 3 4 5",
        expected:"Invalid input"
    },
    {
        input:"",
        expected:"Invalid input"
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
        input:NaN,
        expected:"Invalid input"
    },
    {
        input:3/4,
        expected:"Invalid input"
    },
    {
        input:["","  Program" ,"there was "],
        expected:["there was "]
    },
    {
        input:["car","cat"],
        expected:["car","cat"]
    }
    
]

testCase.forEach((num,index)=>{
    let output=largestWord(num.input)
    let pass=utilFunction(output,num.expected)
    console.log(`Task :${index+1}`,pass)
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("---------------------------------------")
})