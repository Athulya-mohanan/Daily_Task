import question6 = require("./question6")

let testCase=[
    {
        input:"aaabbbbcc",
        way:"encrypt",
        expect:"a3b4c2"
    },
    {
        input:"a3b4c2",
        way:"decrypt",
        expect:"aaabbbbcc"
    },
    {
        input:123,
        way:"decrypt",
        expect:"Invalid"
    },
    {
        input:"123",
        way:456,
        expect:"Invalid"
    },
    {
        input:"a3b4c2",
        way:"dEcryPt",
        expect:"aaabbbbcc"
    },
    {
        input:"a3b4c2",
        way:"ejreb",
        expect:"Invalid"
    },
    {
        input:123,
        way:"ejreb",
        expect:"Invalid"
    },
    {
        input:"kemdke",
        way:873847,
        expect:"Invalid"
    },
     {
        input:"",
        way:"decryp",
        expect:"Invalid"
    },
]

testCase.forEach((num,index)=>{
    let output=question6.compressionTool(num.input,num.way)
    let pass=output.toString()===num.expect.toString()
    console.log(`Test : ${index+1}`,pass?"Pass":"Fail")
    console.log("Input :",num.input,num.way)
    console.log("Expected",num.expect)
    console.log("Got",output)
    console.log("--------------------------------------------------------")
})