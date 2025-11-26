import question8 = require("./question8")

let testCase=[
    {
        input:"Room 45 on floor 3",
        expected:"Room ## on floor #"
    },
    {
        input:"123",
        expected:"###"
    },
     {
        input:123,
        expected:"Invalid"
    },
    {
        input:"Hello",
        expected:"Hello"
    },{
        input:"[1,2,3]",
        expected:"[#,#,#]"
    },
    {
         input:[1,2,3],
        expected:"Invalid"
    },
    {
        input:undefined,
        expected:"Invalid"
    },
     {
        input:"",
        expected:"Invalid"
    },
     {
        input:"",
        expected:"Invalid"
    },
     {
        input:"1",
        expected:"#"
    }
    
]

testCase.forEach((num,index)=>{
    let output=question8.replacesAllNumber(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log(`Test ${index+1} :`,pass?"Pass":"Fail")
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("--------------------------------------------------------------------")
})