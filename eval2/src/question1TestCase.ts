import question1 = require("./question1")

let testCase=[
    {
        input:[5, 1, 2, 3, 0, 4, 6],
        expect:{ length: 5, List: [1,2,3,4,6] }
    },
    {
        input:[1,2,3,4,5,6,7],
        expect:{ length: 7, List: [1,2,3,4,5,6,7] }
    },
    {
        input:123,
        expect:"Invalid input"
    },
    {
        input:"123",
        expect:"Invalid input"
    },
    {
        input:["hello","there"],
        expect:"Invalid input"
    },
    {
        input:null,
        expect:"Invalid input"
    },
    {
        input:[],
        expect:"Invalid input"
    },
    {
        input:[1,2,3,-8,4,5,6,-7,8,-9,0],
        expect:{length:7,List:[1,2,3,4,5,6,8]}
    },
    {
        input:[1,1,1,1,1],
        expect:{length:0,List:[]}
    },
     {
        input:[9,8,7,6,5,4,3,2,1],
        expect:{length:0,List:[]}
    }
    
]
testCase.forEach((num,index)=>{
    let output=question1.findLongestChain(num.input)
    let pass=JSON.stringify(output)===JSON.stringify(num.expect)
    console.log("Test ",index+1,pass?"Pass":"Fail")
    console.log("input",num.input)
    console.log("expect",num.expect)
    console.log("Got",output)
    console.log("------------------------------")
})