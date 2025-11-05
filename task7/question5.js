/**5. Custom Filter Function

Description:
Implement your own version of JavaScript's Array.filter() function called myFilter() that works exactly the same.
Then test it with a condition like "keep only numbers > 10". */
import { utilFunction } from "../util.js"

function myFilter(arr,callback){
    let result=[]
    if(!Array.isArray(arr)) return "Invalid input"
    if(arr.length===0) return "Array must contain atleast one value"
    for(let i of arr){
        if(typeof(i)!=="number") return "Invalid input"
    }
    for( let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }   
    }  
    return result
}
// function greater(n){
//     n=n>10
//     return n
// }
// console.log(myFilter([15,2,3,4,5,6,89,63,20],greater))

let testCase=[
    {
        input:[15,2,3,4,5,6,89,63,20],
        callback:n=>n>12,
        expected:[15,89,63,20]
    },
    {
        input:[0,0,0],
        callback:n=>n>0,
        expected:[]
    },
    {
        input:["hello","hey"],
        expected:"Invalid input",
        callback:n=>n>2
    },
    {
        input:[],
        expected:"Array must contain atleast one value",
        callback:n=>n<2,
    },
    {
        input:123,
        expected:"Invalid input",
        callback:n=>n>1
    },
    {
        input:[2,4,6,8,9],
        expected:[2],
        callback:n=>n==2
    },
    {
        input:"hello",
        expected:"Invalid input",
        callback:n=>n>12
    },
    {
        input:[2,4,6,8],
        expected:[2,4,6,8],
        callback:n=>n%2==0
    },
    {
        input:[1,2,3,4,5,6],
        expected:[1,3,5],
        callback:n=>n%2!==0
    },
    {
        input:[1,2,3,4,5,6,"one"],
        expected:"Invalid input",
        callback:n=>n%2!==0
    },
    {
       input:[1,2,3,4,5,6,-4,-6],
        expected:[-4,-6],
        callback:n=>n<0 
    },
    {
        input:[1.5,2,6.7,0.9],
        expected:[1.5,6.7,0.9],
        callback:n=>Math.round(n)!==n
    },
    {
        input:null,
        expected:"Invalid input",
        callback:n=>n>1
    },
    {
        input:{},
        expected:"Invalid input",
        callback:n=>n>1
    },
    {
        input:NaN,
        expected:"Invalid input",
        callback:n=>n>1
    },
   
]

testCase.forEach((num,index)=>{
    let output=myFilter(num.input,num.callback)
    let pass=utilFunction(output,num.expected)
    console.log(`Test ${index+1} :`, pass)
         console.log("Input :" ,num.input)
        console.log("Expected :", num.expected)
        console.log("Got :",output)
    console.log("--------------------------")
})