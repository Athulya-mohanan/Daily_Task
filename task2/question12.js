import { utilFunction } from "../util.js"
function maxProduct(arr){
  
   if(!Array.isArray(arr)) return "invalid input"
    let newarray=JSON.parse(JSON.stringify(arr))
 if( newarray.length<3) return "Atleast 3 numbers needed"
    let product=1
    for(let i of newarray){
      if(typeof(i)==="string"){
         return "invalid input"
      }
    }
   let sorted=newarray.sort((a,b)=>b-a)
   for(let i=0;i<3;i++){
    product=product*Math.round(sorted[i])
   }

   return product
}
let testCase=[
   {
      input:[1,2,3,4,5],
      expected:60
   },
   {
      input:[0,1,2,3,4,5],
      expected:60
   },
   {
      input:["hey",1,2,3],
      expected:"invalid input"
   },
   {
      input:[3],
      expected:"Atleast 3 numbers needed"
   },
   {
      input:123,
      expected:"invalid input"
   },
   {
      input:[2/3,4/5,8/9],
      expected:1
   },
   {
      input:[-2,4,5,6],
      expected:120
   },
    {
      input:[-2,-4,-5,-6],
      expected:-40
   },
   {
      input:{},
      expected:"invalid input"
   },
    {
      input:[],
      expected:"Atleast 3 numbers needed"
   },
   {
      input:NaN,
      expected:"invalid input"
   },
   {
      input:undefined,
      expected:"invalid input"
   },
   {
      input:"hello",
      expected:"invalid input"
   },
   {
      input:null,
      expected:"invalid input"
   },
   {
      input:[0,0,0],
      expected:0
   }
]
testCase.forEach((num,index)=>{
   let output=maxProduct(num.input)
   let pass=utilFunction(output,num.expected)
   console.log(`Test : ${index+1}`,pass)
   console.log("Input :",num.input)
   console.log("Expected :",num.expected)
   console.log("Got :",output)
   console.log("-----------------------------------------------------")
})