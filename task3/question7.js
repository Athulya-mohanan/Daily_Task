import { utilFunction } from "../util.js"

function snakeCase(word){

    if(typeof(word)!=="string"|| Array.isArray(word)) return "Enter a string"
    let space=word.replace(/\s/g,"")
    if(space.length===0) return "Invalid input"
    let updated=word.replace(/[A-Z]/g,"_"+"$&")
     console.log(updated.toLowerCase())
    return updated.toLowerCase()
   
}
// console.log(snakeCase("myFunction"))
// console.log(snakeCase("myFuncTion"))

let testCase=[
    {
        input:"myFunction",
        expected:"my_function"
    },
    {
        input:"myFunctionFunctIon",
        expected:"my_function_funct_ion"
    },
    {
        input:"my_",
        expected:"my_"
    },
    {
        input:123,
        expected:"Enter a string"
    },
    {
        input:" ",
        expected:"Invalid input"
    },
    {
        input:"_",
        expected:"_"
    },
    {
        input:"hello World",
        expected:"hello _world"
    },
    {
        input:"hello w W O",
        expected:"hello w _w _o"
    },
    {
        input:["helloW"],
        expected:"Enter a string"
    },
    {
        input:NaN,
        expected:"Enter a string"
    },
    {
        input:undefined,
        expected:"Enter a string"
    },
    {
        input:null,
        expected:"Enter a string"
    },
    {
        input:{},
        expected:"Enter a string"
    },
    {
        input:1_4_6,
        expected:"Enter a string"
    },
    {
        input:4/6,
        expected:"Enter a string"
    },
    {
        input:[],
        expected:"Enter a string"
    }

]
testCase.forEach((num,index)=>{
    let output=snakeCase(num.input)
    let pass=utilFunction(output,num.expected)
    console.log("Test :",index, pass)
    console.log(`Input`,num.input)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})