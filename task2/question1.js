/**Write a program that checks if a given number is prime. */

function isPrime(num) {
  let result;
  if(num<0 || typeof(num)!=="number" || Math.round(num)!==num) return "Invalid input"
  if(num==0||num==1){
    result="Enter a valid number(0 and 1 are not valid)"
  }
  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}
testCase=[
  {
    input:9,
    expected:false
  },
  {
    input:-9,
    expected:"Invalid input"
  },
  {
    input:1.6,
    expected:"Invalid input"
  },
  {
    input:"123",
    expected:"Invalid input"
  },
  {
    input:123,
    expected:false
  },
  {
    input:"",
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
    input:[1,2,3],
    expected:"Invalid input"
  },
  {
    input:{},
    expected:"Invalid input"
  },
  {
    input:1,
    expected:"Enter a valid number(0 and 1 are not valid)"
  },
  {
    input:0,
    expected:"Enter a valid number(0 and 1 are not valid)"
  },
  {
    input:[{}],
     expected:"Invalid input"
  },
  {
    input:{name:"Doe"},
    expected:"Invalid input"
  },
  {
    input:12/2,
    expected:false
  },
 
{
  input:7,
  expected:true
}
]
testCase.forEach((num,index)=>{
  let output=isPrime(num.input)
  pass=output.toString()===num.expected.toString()
  console.log(`Test: ${index+1}`,pass?"Passed":"Failed")
  console.log("Input",num.input)
  console.log("Expected",num.expected)
  console.log("Got",output)
  console.log("-----------------------------------")
})