/**Write a program that finds the missing number in an array containing consecutive integers from 1 to n, with one number missing.

Test cases:
Input: [1, 2, 3, 5, 6]
Expected output: 4 */
import { utilFunction } from "../util.js"
function missingNumber(arr){
    // console.log(typeof(arr))
    if(arr.length===0||!Array.isArray(arr)) return "Invalid input"
    for(let i of arr){
        if(typeof(i)!=="number" || Math.round(i)!==i ||Math.abs(i)!==i) return "Invalid input"
    }
    let len=arr.length
    let arrayIndex=[]
    let result=[]
    let missingNumbers=[]
    for(let i=arr[0];i<=arr[len-1];i++){
       arrayIndex.push(i)
    }
    if(arr[0]===2){
        missingNumbers.push(1)
    }else if(arr[0]>2){
        return "More than one numbers are missing"
    }
   for(let i=0;i<arrayIndex.length;i++){
    if(arrayIndex[i]!==arr[i])
        result.push(arrayIndex[i])
   }  
   for(let i of result){
    if(!arr.includes(i)){
        missingNumbers.push(i)
    }
   }
   if(missingNumbers.length===0){
    return "No missing number"
   }
   else if(missingNumbers.length==1){
    return missingNumbers
   }
   else if(missingNumbers.length>1){
    return `More than one numbers are missing`
   }
}
// console.log(missingNumber([2]))
let testCase=[
    {
        input:[2, 3, 4, 5, 6],
        expected:[1]
    },
    {
        input:[1,2, 3, 5, 6],
        expected:[4]
    },
    {
        input:[1,2, 3, 6],
        expected:"More than one numbers are missing"
    },
    {
        input:[2],
        expected:[1]
    },
    {
        input:[1,2,3,4,5],
        expected:"No missing number"
    },
    {
        input:[],
        expected:"Invalid input"
    },
    {
        input:[3,4,5],
        expected:"More than one numbers are missing"
    },
     {
        input:["hello",1],
        expected:"Invalid input"
    },
    {
        input:[1, ,5],
        expected:"Invalid input"
    },
    {
        input:"123 567",
        expected:"Invalid input"
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:[1.3,1.4,1.5,1.6],
        expected:"Invalid input"
    },
    {
        input:[2/1,3/1,4/1],
        expected:[1]
    },
    {
        input:[-1,2,3,-4,-6],
        expected:"Invalid input"
    },
    {
        input:[[1,2,3],[9,0]],
        expected:"Invalid input"
    }

]
testCase.forEach((num,index)=>{
    let output=missingNumber(num.input)
    let pass=utilFunction(output,num.expected)
    console.log(`Test : ${index+1}`,pass)
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("-------------------------------------------")
})