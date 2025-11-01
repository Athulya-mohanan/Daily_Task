import { objectComparison } from "../utilobj.js"

function wordFrequency(word){
    let wordsAppears={}
    if(Array.isArray(word)|| typeof(word)!=="string" ||word.replaceAll(/\s/g,"").length===0) return "Invalid input"
    let newWord=word.trim().toUpperCase().replace(/[,!*@#$%^&*+_]/g,"").split(" ")
    for(let words of newWord){
        wordsAppears[words]=(wordsAppears[words]||0)+1
    }
    return wordsAppears
}
// console.log(wordFrequency("Hello hello world, world!"))

let testCase=[
    {
        input:"Hello hello world world!",
        expected:{ HELLO: 2, WORLD: 2 }
    },
    {
        input:"  hey  ",
        expected:{HEY:1}
    },
    {
        input:["hey"],
        expected:"Invalid input"
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
        input:"         ",
        expected:"Invalid input"
    },
    {
        input:true,
        expected:"Invalid input"
    },
    {
        input:{values:1},
        expected:"Invalid input"
    },
    {
        input:6.94,
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
        input:{},
        expected:"Invalid input"
    },
    {
        input:[],
        expected:"Invalid input"
    },
      {
        input:[{}],
        expected:"Invalid input"
    },
]
testCase.forEach((num,index)=>{
    let output=wordFrequency(num.input)
    let pass=objectComparison(output,num.expected)
    console.log(`Test: ${index+1}`,pass)
    console.log(`Input :`,num.input)
    console.log(`Expected:`,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})
