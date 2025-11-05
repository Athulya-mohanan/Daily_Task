/**11. Write a program that determines if a given number is a perfect square. A perfect square is an integer that is equal to the square of another integer.

Test cases:
Input: 16
Expected output: True */
function perfectSquare(num){
    if(typeof(num)!=="number"|| num<0) return "invalid input"
    let result
    for(let i=0;i<10;i++){
        if(i*i===num){
            result= true
            break;
        }
        else{
            result =false
        }
    }
    return result
}
let testCase=[
    {
        input:25,
        expected:true
    },
     {
        input:"hey",
        expected:"invalid input"
    },
    {
        input:[24,45,90],
        expected:"invalid input"
    },
     {
        input:{},
        expected:"invalid input"
    },
     {
        input:-25,
        expected:"invalid input"
    },
    {
        input:0,
        expected:true
    },
    {
        input:10,
        expected:false
    },
    {
        input:4/5,
        expected:false
    },
    {
        input:NaN,
        expected:false
    },
    {
        input:undefined,
        expected:"invalid input"
    },
    {
        input:true,
        expected:"invalid input"
    },
    {
        input:"",
        expected:"invalid input"
    },
    {
        input:[],
        expected:"invalid input"
    },
    {
        input:1.5,
        expected:false
    },
    {
        input:1/0,
        expected:false
    },
    {
        input:1.75666666666666666666666666666666,
        expected:false
    }
]
testCase.forEach((cases,index)=>{
    let output=perfectSquare(cases.input)
    let pass=output.toString()===cases.expected.toString()
    console.log(`Test :${index+1}`,pass?"Pass":"Fail")
    console.log(`Input:`,cases.input)
    console.log("Expected",cases.expected)
    console.log("Got :",output)
    console.log("-----------------------------------------------")
})