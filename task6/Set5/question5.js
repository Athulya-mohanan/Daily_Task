function  countVowels(str){
    if(typeof(str)!=="string"|| str.trim().length===0) return "Invalid input"
    let count=0
    let LowerCase=str.toLowerCase()
    for( let i of LowerCase){
        if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
            count++
        }
    }
    return count
}
// console.log(countVowels("hello world"))
let testCase=[
    {
        input:"hello world",
        expected:3
    },
    {
        input:"wrtypkhg",
        expected:0
    },
    {
        input:"AbcoedEJOStu",
        expected:6
    },
    {
        input:89,
        expected:"Invalid input"
    },
    {
        input:["hello"],
        expected:"Invalid input"
    },
    {
        input:{},
        expected:"Invalid input"
    },
    {
        input:null,
        expected:"Invalid input"
    },
    {
        input:undefined,
        expected:"Invalid input"
    },
    {
        input:NaN,
        expected:"Invalid input"
    },
    {
        input:[{}],
        expected:"Invalid input"
    },
    {
        input:4*3,
        expected:"Invalid input"
    },
    {
        input:true,
        expected:"Invalid input"
    },
    {
        input:"aaaaaaaaaa",
        expected:10
    },
    {
        input:"",
        expected:"Invalid input"
    },
    {
        input:"  ",
        expected:"Invalid input"
    }
]

testCase.forEach((num,index)=>{
        let output=countVowels(num.input)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})