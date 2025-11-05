/**1. Write a function named calculateTotal that takes two arguments:
   - billAmount (a number)
   - taxPercentage (a number, e.g., 15 for 15%)
   
The function should calculate the tax amount and return the total bill (bill amount + tax amount). Use default 20% if tax is not provided.
 */
import { utilFunction } from "../util.js"

function calculateTotal(billamount,tax=20){
    if(typeof(billamount)!=="number" || typeof(tax)!=="number" || tax<0||billamount<0 ) return "Invalid input"
    let taxpercentage=billamount*(tax/100)
    return taxpercentage+billamount
}
// console.log(calculateTotal(200,15))
// console.log(calculateTotal(100,15))
// console.log(calculateTotal(100))console.log(calculateTotal(200,15))
// console.log(calculateTotal(100,15))
// console.log(calculateTotal(100))

let testCase=[
    {
        input:100,
        tax:15,
        expected:115
    },
    {
        input:100,
        expected:120
    },
     {
        input:"hello",
        tax:15,
        expected:"Invalid input"
    },
    {
        input:0,
        tax:12,
        expected:0
    },
    {
        input:-40,
        expected:"Invalid input"
    },
    {
        input:[1,2,3],
        expected:"Invalid input"
    },
    {
        input:{},
        expected:"Invalid input"
    },
    {
        input:1.09,
        expected:"1.308"
    },
    {
        input:"",
        expected:"Invalid input"
    },
    {
        input:0.146,
        expected:0.1752
    },
    {
        input:[],
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
        input:true,
        expected:'Invalid input'
    },
    {
        input:-40,
        tax:-80,
        expected:"Invalid input"
    },
]

testCase.forEach((num,index)=>{
     let output=calculateTotal(num.input,num.tax)
           let pass=utilFunction(output,num.expected)
            console.log(`Test: ${index+1}`,pass)
            console.log("Input :",num.input)
            console.log("Expected :",num.expected)
            console.log("Got :",output)
            console.log("---------------------------------")
})