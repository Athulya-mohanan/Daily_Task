import { utilFunction } from "../util.js"

function flatArray(arr){
  if(!Array.isArray(arr)) return "Invalid input"

  if(arr.length===0) return "Invalid input"
  let result=[]
  arr.forEach(x=>{
    if(x instanceof Array){
      result=result.concat(flatArray(x))
    }else{
      result.push(x)
    }
  })
  for(let arr of result){
    if(typeof(arr)==="number"|| typeof(arr)!=="string")
      return result
    else return result
  }
  
  
}
// console.log(flatArray([1, [2, [3, [4]], 5]]))

let testCase=[
  {
    input:[1, [2, [3, [4]], 5]],
    expected:[1,2,3,4,5]
  },
  {
    input:[],
    expected:"Invalid input"
  },
  {
    input:["hello",["hello",["is",["hello","hello"]]]],
    expected:["hello","hello","is","hello","hello"]
  },
  {
    input:"hello",
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
    input:[1,2,3,4,5],
    expected:[1,2,3,4,5]
  },
  {
    input:[[[[1]]]],
    expected:[1]
  },
  {
    input:123,
    expected:"Invalid input"
  },
  {
    input:"",
    expected:"Invalid input"
  },
  {
    input:4/5,
    expected:"Invalid input"
  },
  {
    input:{},
    expected:"Invalid input"
  },
  {
    input:{name:"Athulya"},
    expected:"Invalid input"
  },
  {
    input:[null],
    expected:[]
  }
]
testCase.forEach((item,num)=>{
    const output=flatArray(item.input)
    const pass=utilFunction(output,item.expected)
    console.log(`Test ${num+1} :`, pass)
         console.log(`Input : ${item.input}`)
        console.log(`Expected : ${item.expected}`)
        console.log(`Got :${output}`)
    console.log("--------------------------")
})