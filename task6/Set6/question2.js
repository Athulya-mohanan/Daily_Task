// function  safeAdd(a, b){
//     return a+b
// }
// console.log(safeAdd(0.1,0.2))

function safeAdd(a,b){
    if(typeof(a)!=="number"||typeof(b)!=="number") return "Invalid input"
    let decimal1=(a.toString().split(".")[1]||"").length
    let decimal2=(b.toString().split(".")[1]||"").length
    let decimalplace=Math.pow(10,Math.max(decimal1,decimal2))
    
    let result=((a*decimalplace)+(b*decimalplace))/decimalplace
    return result
}
// console.log(safeAdd(0.2,0.1))

let testCase=[
    {
        inp1:0.2,
        inp2:0.1,
        expected:0.3
    },
       {
        inp1:1,
        inp2:3,
        expected:4
    },
       {
        inp1:"hello",
        inp2:0.1,
        expected:"Invalid input"
    },
    {
        inp1:[],
        inp2:0.9,
        expected:"Invalid input"
    },
    {
        inp1:undefined,
        inp2:0.5,
        expected:"Invalid input"
    },
    {
        inp1:NaN,
        inp2:0.2,
        expected:"Invalid input"
    },
    {
        inp1:null,
        inp2:0.9,
        expected:"Invalid input"
    },
    {
        inp1:[{}],
        inp2:0.10,
        expected:"Invalid input"
    },
    {
        inp1:1.235,
        inp2:1,
        expected:2.235
    },
    {
        inp1:1.234,
        inp2:12.68099,
        expected:13.91499
    },
    {
        inp1:true,
        inp2:3.98,
        expected:"Invalid input"
    },
    {
        inp1:1.7890985764329,
        inp2:1,
        expected:2.7890985764329
    },
    {
        inp1:1.0,
        inp2:1.0,
        expected:2
    },
    {
        inp1:-0.08,
        inp2:1,
        expected:0.92
    },
    {
        inp1:-34.5,
        inp2:34.5,
        expected:0
    }
]
testCase.forEach((num,index)=>{
        let output=safeAdd(num.inp1,num.inp2)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.inp1,num.inp2)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})