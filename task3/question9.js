
/**9. Write a function to remove duplicate characters from the given string.

Test cases:
Input: 'apple'
Expected output: 'aple' */
import { utilFunction } from "../util.js"

function removeDuplications(str1){
   if(typeof(str1)!=="string") return "Entered must be a string"
   let str=str1.toLowerCase()
   let arr=[]
   for(let i of str){
    arr.push(i)
   }
   let duplicatedremove= [... new Set(arr)]
   return duplicatedremove.toString().split(",").join("")

}
let testCase=[
   {
      input:"apple",
      expect:"aple"
   },
   {
      input:123,
      expect:"Entered must be a string"
   },
   {
      input:[1,2,3],
      expect:"Entered must be a string"
   },
   {
      input:{},
      expect:"Entered must be a string"
   },
   {
      input:"ppppp",
      expect:"p"
   },
   {
      input:null,
      expect:"Entered must be a string"
   },
   {
      input:undefined,
      expect:"Entered must be a string"
   },
   {
      input:NaN,
      expect:"Entered must be a string"
   },
   {
      input:"ApPle",
      expect:"aple"
   },
   {
      input:7/9,
      expect:"Entered must be a string"
   },
   {
      input:"",
      expect:""
   },
   {
      input:"hello there",
      expect:" helo tr"
   },
   {
      input:true,
      expect:"Entered must be a string"
   },
   {
      input:"1211211",
      expect:"12"
   },
   {
      input:(1),
      expect:"Entered must be a string"
   }

]
testCase.forEach((num,index)=>{
   let output=removeDuplications(num.input)
   let pass=utilFunction(num.expect,output)
    console.log(`Test: ${index+1}`,pass)
    console.log("Input :",num.input)
    console.log("Expected :",num.expect)
    console.log("Got :",output)
    console.log("---------------------------------")
})