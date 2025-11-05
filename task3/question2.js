/**2. Write a program to find whether a given number is an Armstrong number ( An Armstrong number is the sum of its own digits, each raised to the power of the number of digits) */
import { utilFunction } from "../util.js"

function armstrongNumber(num){
    if(Array.isArray(num) ||typeof(num)!=="number" || num<0 || Math.round(num)!==num) return "Invalid input"
    let number=num.toString()
    let pow=number.length
    let sum=0
    for(let i of number){
       sum+= Number(i)**pow
    }
    return(sum===num)
}
// console.log(armstrongNumber(153))

let testCase=[
    {
        input:153,
        expected:true
    },
    {
        input:-153,
        expected:"Invalid input"
    },
    {
        input:[123],
        expected:"Invalid input"
    },
    {
        input:6.8,
        expected:"Invalid input"
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
        input:{},
        expected:"Invalid input"
    },
    {
        input:"",
        expected:"Invalid input"
    },
    {
        input:9/0,
        expected:false
    },
    {
        input:"123",
        expected:"Invalid input"
    },
    {
        input:true,
        expected:"Invalid input"
    },
    {
        input:[],
        expected:"Invalid input"
    },
    {
        input:0,
        expected:true
    },
    {
        input:["hello"],
        expected:"Invalid input"
    }
]

testCase.forEach((num,index)=>{
    let output=armstrongNumber(num.input)
    let pass=utilFunction(num.expected,output)
    console.log(`Test: ${index+1}`,pass)
    console.log(`Input`,num.input)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})