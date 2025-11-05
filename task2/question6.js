/**. Write a program that takes a list of integers as input and returns the sum of all the numbers divisible by 3.

Test cases:
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Expected output: 18 (3 + 6 + 9) */
import { utilFunction } from "../util.js"
function sumOfDivisible(arr){
      if(!Array.isArray(arr)) return "Invalid input"
    let sum=0
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]%3==0){
            sum=sum+arr[i]
        }
    }
    return sum
}
// console.log(sumOfDivisible([15, 25, 35, 45,55]))
let testcase=[
    {
        input:[15, 25, 35, 45,55],
        expected:60
    },
    {
        input:["one","two","three",15, 25, 35, 45,55],
        expected:60
    },
    {
        input:[1, -2, 3, 4, 5, 6, 7, -8, 9, 10],
        expected:18
    },
    {
        input:[1, -2, 3.5, 4, 5, 6, 7, -8.5, 9, 10],
        expected:15
    },
    {
        input:[],
        expected:0
    },
    {
        input:null,
        expected:"Invalid input"
    },
    {
        input:undefined,
        expected:"Invalid input"
    },
    {
        input:NaN,
        expected:"Invalid input"
    },
    {
        input:[1, -2, 3, 4, 5, 3/2, 7, -4/2, 9, 10],
        expected:12
    },
    {
        input:{},
        expected:"Invalid input"
    },
     {
        input:"",
        expected:"Invalid input"
    },
     {
        input:"hello",
        expected:"Invalid input"
    },
     {
        input:"  ",
        expected:"Invalid input"
    },
     {
        input:[2,4,7],
        expected:0
    },
    {
        input:["hello"],
        expected: 0
    },
]
testcase.forEach((num,index)=>{
    let output=sumOfDivisible(num.input)
    const pass=utilFunction(output,num.expected)
    console.log("exx",typeof(num.expected))
    console.log("g",typeof(output))
    console.log(`Test ${index+1} :`,pass)
    console.log(`Input :${num.input}`)
    console.log(`Expected:${num.expected}`)
    console.log("Got:",output)
    console.log("----------------------------------")
})