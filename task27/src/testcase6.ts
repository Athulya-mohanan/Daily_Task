import question6 = require("./question6")

let testCase=[
    {
        input:[1,0,2,"",3,null,4],
        expected:[1,2,3,4]
    },
    {
        input:["",null,false],
        expected:[]
    },
    {
        input:[1,2,3,4],
        expected:[1,2,3,4]
    },
    {
        input:"hello",
        expected:"Invalid"
    },
    {
        input:[],
        expected:"Invalid"
    },
   {
        input:{},
        expected:"Invalid"
    },{
        input:null,
        expected:"Invalid"
    },{
        input:undefined,
        expected:"Invalid"
    },{
        input:NaN,
        expected:"Invalid"
    },

{
        input:6/4,
        expected:"Invalid"
    },

]
testCase.forEach((num,index)=>{
    let output=question6.removeFalsy(num.input)
    let pass=JSON.stringify(output)===JSON.stringify(num.expected)
    console.log(`Test ${index+1} :`,pass?"Pass":"Fail")
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("--------------------------------------------------------------------")
})