import question3 = require("./question3")

let testCase=[
    {
        input:153,
        expected:true
    },
    {
        input:15,
        expected:false
    },
    {
        input:1,
        expected:true
    },
    {
        input:"hey",
        expected:"Invalid"
    },
    {
        input:NaN,
        expected:"Invalid"
    },
    {
        input:[1,2],
        expected:"Invalid"
    },
    {
        input:{},
        expected:"Invalid"
    },
    {
        input:undefined,
        expected:"Invalid"
    },
    {
        input:null,
        expected:"Invalid"
    },
    {
        input:0,
        expected:true
    },
]

testCase.forEach((num,index)=>{
    let output=question3.ArmstrongNumber(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log(`Test ${index+1} :`,pass?"Pass":"Fail")
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("--------------------------------------------------------------------")
})