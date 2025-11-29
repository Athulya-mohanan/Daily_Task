import question1 = require("./question1")

let testCase=[
    {
        input:[[30,32,35],[28,40,33],[31,36,38]],
        expected:{ maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0] }
    },
     {
        input:134,
        expected:"Invalid"
    },
    {
        input:"Hey",
        expected:"Invalid"
    },
    {
        input:[1,2,3,4],
        expected:"Invalid"
    },
     {
        input:[[1,2,3],["hey",7,9]],
        expected:"Invalid"
    },
     {
        input:[[1,2,3],[NaN,7,9]],
        expected:"Invalid"
    },
     {
        input:[[1,2,3],[7,9],25],
        expected:"Invalid"
    },
     {
        input:[[30,32,35],[28,-40,33],[31,36,38]],
        expected:{ maxTemp: 38, minTemp: -40, averageTemp:24.8, hottestPoint: [2,2], coldestPoint: [1,1] }
    },
      {
        input:null,
        expected:"Invalid"
    },
     {
        input:[12,3,[4,6,7]],
        expected:"Invalid"
    },
]

testCase.forEach((num,index)=>{
    let output=question1.AnalyzeHeatmap(num.input)
    let pass=JSON.stringify(output)===JSON.stringify(num.expected)
    console.log(`Test : ${index+1}`,pass?"Pass":"Fail")
    console.log("Input :",num.input)
    console.log("Expected",num.expected)
    console.log("Got",output)
    console.log("--------------------------------------------------------")
})