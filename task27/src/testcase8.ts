import question8 = require("./question8")

let testCase=[
    {
        input:{name:"John", age:30},
        expected:"name=John&age=30"
    },
    {
        input:{name:"John"},
        expected:"name=John"
    },
    {
        input:{name:"John", age:30,place:"Vadakara"},
        expected:"name=John&age=30&place=Vadakara"
    },
    {
        input:{},
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
        input:123,
        expected:"Invalid"
    },
    {
        input:"hello",
        expected:"Invalid"
    },
    {
        input:true,
        expected:"Invalid"
    },
]

testCase.forEach((num,index)=>{
    let output=question8.objectToQueryString(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log(`Test ${index+1} :`,pass?"Pass":"Fail")
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("--------------------------------------------------------------------")
})