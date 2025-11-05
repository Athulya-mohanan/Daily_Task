/**. Write a program longestCommonPrefix(strings) that takes a list of strings and returns the 
longest common prefix among them. Your function must be case-sensitive. 
Test cases: 
Input: ["flower", "flow", "flight"] 
Output: "fl" 
Input: ["dog", "racecar", "car"] 
Output: "" (an empty string, as there is no common prefix) */
import { utilFunction } from "../util.js"

function largestPrefix(arr){
     if(!Array.isArray(arr) || arr.length===0)   return "Invalid input"
        for( let i of arr){
                if(typeof(i)!=="string")
                        return "Invalid input"
        }
    let prevalue=arr[0]
    for(let i =0;i<arr.length;i++){
        while(!arr[i].startsWith(prevalue)){
            prevalue=prevalue.slice(0,-1)
        }
    }
    if(prevalue.length===0)
        return `${""}`
    else
        return prevalue
}
// console.log(largestPrefix(["flower", "flow", "flight"]))
// console.log(largestPrefix(["dog", "racecar", "car"]))
let testCase=[
        {
                input:["flower", "flow", "flight"],
                expected:"fl"
        },
         {
                input:["ower", "low", "ight"],
                expected:""
        },
        {
                input:[123, "low", "ight"],
                expected:"Invalid input"
        },
        {
                input:["", "", ""],
                expected:""
        },
        {
                input:[],
                expected:"Invalid input"
        },
        {
                input:{},
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
                input:undefined,
                expected:"Invalid input"
        },
          {
                input:[{name:"hello"}],
                expected:"Invalid input"
        },
          {
                input:["123","1456","135"],
                expected:["1"]
        },
        {
                input:"hello",
                expected:"Invalid input"
        },
          {
                input:123,
                expected:"Invalid input"
        },
        {
                input:true,
                expected:"Invalid input"
        },
        {
                input:["hello"],
                expected:["hello"]
        }
        
]
testCase.forEach((num,index)=>{
        let output=largestPrefix(num.input)
       let pass=utilFunction(output,num.expected)
        console.log(`Test: ${index+1}`,pass)
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})