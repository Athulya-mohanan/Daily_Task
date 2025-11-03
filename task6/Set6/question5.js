function sumOfDigits(n){
  if(typeof(n)!=="number"||Math.round(n)!==n) return "Invalid input"
  
    let sum=0
    let numbers=n.toString().replace(/-/g,"").split("")
   for(let i=0;i<numbers.length;i++){
     sum+=Number(numbers[i])  
   }
   return sum
    
}
let testCase=[
  {
    input:123,
    expected:6
  },
  {
    input:-123,
    expected:6
  },
  {
    input:123.678,
    expected:"Invalid input"
  },
  {
    input:NaN,
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
    input:[],
    expected:"Invalid input"
  },
   {
    input:"hey",
    expected:"Invalid input"
  },
   {
    input:["hey"],
    expected:"Invalid input"
  },
   {
    input:[{}],
    expected:"Invalid input"
  },
   {
    input:6/7,
    expected:"Invalid input"
  },
   {
    input:9,
    expected:9
  },
  {
    input:0,
    expected:0
  },
  {
    input:true,
    expected:"Invalid input"
  },
  {
    input:"",
    expected:"Invalid input"
  }
]

testCase.forEach((num,index)=>{
        let output=sumOfDigits(num.input)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})