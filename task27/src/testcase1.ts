import question1 = require("./question1")

let testCase=[
    {
        input:[1,1,1,1,1,1,1],
        expected:[1]
    },
     {
        input:[1,1,"hello","hello"],
        expected:[1,"hello"]
    },
     {
        input:[1,2,3,4,5,6,7,8],
        expected:[1,2,3,4,5,6,7,8]
    }, {
        input:[],
        expected:"Invalid"
    },
    {
        input:"hello",
        expected:"Invalid"
    },
    {
        input:null,
        expected:"Invalid"
    },
    {
        input:[1,2,3,[4,56]],
        expected:"Invalid"
    },
    {
        input:["11",11],
        expected:["11",11]
    },
    {
        input:{},
        expected:"Invalid"
    },
     {
        input:[1,2,4,-5,5,-5,7.9,7.8],
        expected:[1,2,4,-5,5,7.9,7.8]
    },
]

testCase.forEach((num,index)=>{
    let output=question1.removeDuplications(num.input)
    let pass=JSON.stringify(output)===JSON.stringify(num.expected)
    console.log(`Test ${index+1} :`,pass?"Pass":"Fail")
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("--------------------------------------------------------------------")
})