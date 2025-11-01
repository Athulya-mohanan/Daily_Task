import { utilFunction } from "../util.js"

function newArray(arr){
    if(!Array.isArray(arr) || arr.length===0) return "Invalid input"
    for(let i of arr){
        if(Math.round(i)!==i|| typeof(i)!=="number") return "Invalid input"
    }
    let odd=[]
    let even=[]
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
           even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
        result.push(even)
         result.push(odd)
        return result.flat()
}
// console.log(newArray([3, 2, 4, 1, 5, 8]))
let testCase=[
    {
        input:[3, 2, 4, 1, 5, 8],
        expected:[ 2, 4, 8, 3, 1, 5 ]
    },
    {
       input:[-3, 2, -4, 1, 5, -8],
        expected:[ 2, -4, -8, -3, 1, 5 ] 
    },
    {
       input:[-3.5, 2, -4, 1,5, 5, -8],
        expected:"Invalid input"
    },
    {
        input:["hello","hey"],
        expected:"Invalid input"
    },
    {
        input:["hello",1,2,3,4],
        expected:"Invalid input"
    },
    {
        input:1,
        expected:"Invalid input"
    },
    {
        input:[1,2,3,[4,5,6]],
        expected:"Invalid input"
    },
    {
        input:"hello",
        expected:"Invalid input"
    },
    {
        input:[],
        expected:"Invalid input"
    },
    {
        input:[[],[],[]],
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
        input:undefined,
        expected:"Invalid input"
    },
     {
        input:NaN,
        expected:"Invalid input"
    },
    {
        input:[""],
        expected:"Invalid input"
    }
]
testCase.forEach((num,index)=>{
    let output=newArray(num.input)
    let pass=utilFunction(output,num.expected)
     console.log(`Test: ${index+1}`,pass)
    console.log(`Input`,num.input)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})
