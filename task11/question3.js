import { utilFunction } from "../util.js"

//Filter
console.log("Filter:")
function myFilter(arr,callback){
    let result=[]
    if(!Array.isArray(arr)) return "Invalid input"
    if(arr.length===0) return "Array must contain atleast one value"
    for(let i of arr){
        if(typeof(i)!=="number") return "Invalid input"
    }
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
    console.log("------------------------------FIlter---------------------------------")
// function greater(n){
//     n=n>10
//     return n
// }
// console.log(myFilter([12,4,5,6,7,8,10,18,90],greater))
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
    }
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
    console.log("------------------------------Map---------------------------------")
// Map
console.log("Map:")
function myMap(arr,callback){
    if(!Array.isArray(arr)) return "Invalid input"
    if(arr.length===0) return "Array must contain atleast one value"
    if(typeof(i)!=="number"){
        return "Invalid input"
    }
    let result=[]
    for(let i=0;i<arr.length;i++){
         result.push(callback(arr[i]))    
    }
    return result
}
testCase.forEach((num,index)=>{

    let output=myMap(num.input,num.callback)
    let pass=utilFunction(output,num.expected)
    console.log(`Test ${index+1} :`, pass)
         console.log("Input :" ,num.input)
        console.log("Expected :", num.expected)
        console.log("Got :",output)
    console.log("--------------------------")
})
// function toDoubled(n){
//     n=n*2
//     return n
// }
// console.log(myMap([12,4,5,6,7,8,10,18,90],toDoubled))

// Reduce
// console.log("Reduce:")
// function myReduce(arr,callback,initialvalue){
//     let start=arr.indexOf(initialvalue)
//     let acc=initialvalue
//     for(let i=start+1;i<arr.length;i++){
//         acc=callback(acc,arr[i])
//     }
//     return acc
// }
// function sumOfLimited(a,b){
//    return a+b
// }
// console.log(myReduce([1,2,3,4,5,6],sumOfLimited,5))

console.log("Reduce:")
function myReduce(arr,callback,initialvalue){
    let acc;
    let statIndex;

    if(initialvalue!==undefined){
        acc=initialvalue;
        statIndex=0
    }else{
        acc=arr[0]
        statIndex=1
    }
    for(let i=statIndex;i<arr.length;i++){
        acc=callback(acc,arr[i])
    }
    return acc;
}
function sumOf(a,b){
    return a+b
}
console.log(myReduce([1,2,3,4,5,6,7],sumOf,5))