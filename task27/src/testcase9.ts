import question9 = require("./question9")

let testCase=[
    {
        input:[1,2,3,4,5,6,7],
        expected:"Ascending"
    },
    {
        input:[9,7,6,3,2],
        expected:"Descending"
    },
    {
        input:[1,9,3,8,0],
        expected:"Unsorted"
    },
    {
        input:[1,9,3,8,0,"one"],
        expected:"Invalid"
    },
    {
        input:null,
        expected:"Invalid"
    },
    {
        input:undefined,
        expected:"Invalid"
    },
    {
        input:NaN,
        expected:"Invalid"
    },
    {
        input:true,
        expected:"Invalid"
    },
    {
        input:[1/2,2/2,3/2],
        expected:"Ascending"
    },
    {
        input:[-1,-2,-3,-4,-5],
        expected:"Descending"
    }

]
testCase.forEach((num,index)=>{
    let output=question9.checkArray(num.input)
    let pass=JSON.stringify(output)===JSON.stringify(num.expected)
    console.log(`Test ${index+1} :`,pass?"Pass":"Fail")
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("--------------------------------------------------------------------")
})