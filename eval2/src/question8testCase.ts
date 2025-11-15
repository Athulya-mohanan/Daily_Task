import question8 = require("./question8")

let testCase=[
    {
        input:10,
        expect:"Even"
    },
    {
        input:-10,
        expect:"Even"
    },
     {
        input:5.95,
        expect:"Invalid input"
    },
    {
        input:[123],
        expect:"Invalid input"
    },
     {
        input:null,
        expect:"Invalid input"
    },
    {
        input:0,
        expect:"Zero is invalid"
    },
     {
        input:1,
        expect:"Odd"
    },
    {
        input:"12",
        expect:"Invalid input"
    },
     {
        input:999,
        expect:"Odd"
    },
]
testCase.forEach((num,index)=>{
    let output=question8.checkEven(num.input)
    let pass=output.toString()===num.expect.toString()
    console.log("Test ",index+1,pass?"Pass":"Fail")
    console.log("input",num.input)
    console.log("expect",num.expect)
    console.log("Got",output)
    console.log("------------------------------")
})