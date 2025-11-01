import { utilFunction } from "../util.js"

function findMissingNumber(arr){
    if(arr.length===0 || !Array.isArray(arr)) return "Invalid input"
    for(let i of arr){
        if(typeof(i)!=="number" || Math.round(i)!==i || i<0) return "Invalid input"
    }
    let index=[]
    let sortedArray=arr.sort((a,b)=>a-b)
    let missing=[]
    for(let i=1;i<=arr.length;i++){
        index.push(i)
    
    for(let numMiss of index){
        if(!sortedArray.includes(numMiss))
            missing.push(numMiss)
    }
}

let result=[]
 let missingnum=new Set([...missing])
result=[...missingnum]
if(result.length>1) return "More than one number is missing"
else if(result.length===0)return "Nothing is missing"
else return result
}
// console.log(findMissingNumber([1,2, 5,4,6,3,8]))

let testCase=[
    {
        input:[1,2, 5,4,6,3,8],
        expected:[7]
    },
    {
        input:[2,4,3,5,6,7],
        expected:[1]
    },
    {
        input:[1,2,3,4,5],
        expected:"Nothing is missing"
    },
    {
        input:[1,3,5,7,9],
        expected:'More than one number is missing'
    },
    {
        input:[2],
        expected:[1]
    },
    {
        input:[],
        expected:"Invalid input"
    },
    {
        input:[1,6,3,2,4,5],
        expected:"Nothing is missing"
    },
    {
        input:["hello",1,2,3],
        expected:"Invalid input"
    },
    {
        input:[1, ,5],
        expected:"Invalid input"
    },
    {
        input:"123 456",
        expected:"Invalid input"
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:[1.3,1.4,1.5],
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
    let output=findMissingNumber(num.input)
    let pass=utilFunction(output,num.expected)
     console.log(`Test : ${index+1}`,pass)
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("-------------------------------------------")
})