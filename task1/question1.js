/*Without using built-in methods like .map(), .filter(), or .reduce(), implement your own versions:
myMap(array, callback)
myFilter(array, callback)
myReduce(array, callback, initialValue) */
import { utilFunction } from "../util.js";
function myMap(arr,callback){
     if(!Array.isArray(arr)) return "Invalid input"
    if(arr.length===0) return "Array must contain atleast one value"
    for(let i of arr){
        if(typeof(i)!=="number"){
           return "Invalid input" 
        }
    } 
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i]))
    }
    return result
}
let TestCase=[
    {
        input:[2,3,4,5],
        expected:[4,6,8,10],
        function:n=>n*2
    },
    {
      input:[0,0,0],
        expected:[0,0,0],
        function:n=>n*3,
        
    },
    {
         input:["hey","hello","there"],
        expected:"Invalid input",
        function:n=>n*3,
    },
    {
         input:[-1,-3,-5],
        expected:[true,true,true],
        function:n=>n<0,
    },
    {
         input:[1.5,3.75,4.8],
        expected:[3.0,7.5,9.6],
        function:n=>n*2,
    },
     {
         input:[],
        expected:"Array must contain atleast one value",
        function:n=>n*2,
    },
     {
         input:5,
        expected:"Invalid input",
        function:n=>n*2,
    },
    {
         input:[2,4,5,6,7,8],
        expected:[1,2,2.5,3,3.5,4],
        function:n=>n/2,
    },
    {
         input:{},
        expected:"Invalid input",
        function:n=>n/2,
    },
      {
         input:[[1,2,3,4]],
        expected:"Invalid input",
        function:n=>n%2,
    },
    {
        input:undefined,
        expected:"Invalid input",
        function:n=>n*7
    },
    {
        input:[-2,3,4,5],
        expected:[-4,6,8,10],
        function:n=>n*2
    },
    {
        input:[-0.5,3,-4.89,5],
        expected:[-1,6,-9.78,10],
        function:n=>n*2 
    },
    {
        input:-4,
        expected:"Invalid input",
        function:n=>n%2
    },
    {
        input:[-2],
        expected:[-6],
        function:n=>n*3
    }
    

]
 console.log("----------------------MAP---------------------")
TestCase.forEach((item,num)=>{
   
    const output=myMap(item.input,item.function)
    const pass=utilFunction(item.expected,output)
    console.log(`Test ${num+1} :`, pass?"Passed":"Failed")
         console.log(`Input : ${item.input}`)
        console.log(`Expected : ${item.expected}`)
        console.log(`Got :${output}`)
    console.log("--------------------------")
})

//Filter
// function evenNumbers(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
function myFilter(arr,callback){
   if(!Array.isArray(arr)) return "Invalid input"
   if(arr.length===0) return "Array must contain atleast one value"
  
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
// myFilter([1,2,3,4,5,6,7,8,10],evenNumbers)
let filtestCase=[
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
        expected:["hello"],
        callback:n=>n==="hello"
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
    {
        input:[2,4,6,8,9],
        callback:n=>n>10,
        expected:[]

    }
]
console.log("------------------FILTER----------------")
filtestCase.forEach((num,index)=>{
    let output=myFilter(num.input,num.callback)
    let pass=utilFunction(output,num.expected)
    console.log(`Test ${index+1} :`, pass)
         console.log("Input :" ,num.input)
        console.log("Expected :", num.expected)
        console.log("Got :",output)
    console.log("--------------------------")
})
// Reduce
function sumFind(arr,initialvalue){
    let sum=0
    let startindex=arr.indexOf(initialvalue)
    for(let i=startindex;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
function myReduce(arr,callback,initialvalue){
    console.log(`Sum of the array(starts from ${initialvalue})`)
    console.log(callback(arr,initialvalue))
}

// myReduce([1,2,3,4,5,6,7],sumFind,3)




// function arrayDoubled(arr){
//  if(!Array.isArray(arr)) return "Invalid input"
//  if(arr.length===0) return "Array must contain atleast one value"
//     for(let i of arr){
//         if(typeof(i)!=="number"){
//            return "Invalid input" 
//         }
//     } 
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//        result.push(arr[i]*2)
//     }
//     return result

// }


// function myMap(arr,callback){
//     // console.log("Array doubled")
// let result= callback(arr)
// return result
// }

// myMap([1,2,3,4],arrayDoubled)



// function runTest(testnumber,input,expected){
//     let output=myMap(input,arrayDoubled)
//     if(JSON.stringify(output)===JSON.stringify(expected)){
//         console.log(`Test ${testnumber} Passed`)
//         console.log(`Input : ${input}`)
//         console.log(`Expected : ${expected}`)
//         console.log(`Got :${output}`)
//         console.log("---------------------------")
//     }
//     else{
//         console.log(`Test ${testnumber} Failed`)
//          console.log(`Input : ${input}`)
//         console.log(`Expected : ${expected}`)
//         console.log(`Got :${output}`)
//          console.log("---------------------------")
//     }
// }


// runTest(1,[2,3,4,5],[4,6,8,10])
// runTest(2,[0,0,0],[0,0,0])
// runTest(3,["hey","hello","there"],"Invalid input")
// runTest(4,[-1,-3,-5],[-2,-6,-10])
// runTest(5,[1.5,3.75,4.8],[3.0,7.5,9.6])
// runTest(6,[],"Array must contain atleast one value")
// runTest(7,5,"Invalid input")
// runTest(8,null,"Invalid input")
// runTest(7,{},"Invalid input")
// runTest(9,[[1,2,3,4]],"Invalid input")
// runTest(10,undefined,"Invalid input")
// runTest(11,[-2,3,4,5],[-4,6,8,10])
// runTest(12,[-0,3,-4,5],[-0,6,-8,10])
// runTest(13,[-0.5,3,-4.89,5],[-1,6,-9.78,10])
// runTest(14,-4,"Invalid input")
// runTest(15,[-2],[-4])

