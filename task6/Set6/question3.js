

function  isValidNumber(value){
   if(isFinite(value) && typeof(value)==="number") {
    return "valid"
   }
   else{
    return "not valid"
   }

}
let testCase=[
   {
      input:12,
      expected:"valid"
   },{
      input:12.03,
      expected:"valid"
   },
   {
      input:-12.03,
      expected:"valid"
   },
    {
      input:Infinity,
      expected:"not valid"
   },
    {
      input:NaN,
      expected:"not valid"
   },
    {
      input:undefined,
      expected:"not valid"
   },
    {
      input:null,
      expected:"not valid"
   },
    {
      input:Infinity,
      expected:"not valid"
   },
    {
      input:111111234569876543234567890876543213456789087654,
      expected:"valid"
   },
      {
      input:-111111234569876543234567890876543213456789087654,
      expected:"valid"
   },
   {
      input:["hey"],
      expected:"not valid"
   },
   {
      input:{},
      expected:"not valid"
   },
   {
      input:4/0,
      expected:"not valid"
   },
   {
      input:4/5,
      expected:"valid"
   },
   {
      input:3^700,
      expected:"valid"
   }
]
testCase.forEach((num,index)=>{
        let output=isValidNumber(num.input)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})
