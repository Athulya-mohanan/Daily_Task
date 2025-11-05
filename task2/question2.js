/**2. Write a program that takes a sentence as input and returns the word count.

Test cases:
Input: "Hello world"
Expected output: 2 */
function wordCount(word) {
  if(typeof(word)!=="string") return "Invalid input"
  let splitedword = word.split(" ");
  let count = splitedword.length;
  for (i = 0; i <= splitedword.length - 1; i++) {
    if (splitedword[i] === "") {
      count = count - 1;
    }
  }
  return count;
}
testCase=[
  {
    input:"Program is fun",
    expected:3
  },
   {
    input:"",
    expected:0
  },
  {
    input:123,
    expected:"Invalid input"
  },
  {
    input:[{}],
    expected:"Invalid input"
  },
  {
    input:{},
    expected:"Invalid input"
  },
   {
    input:[],
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
    input:"hello",
    expected:1
  },
   {
    input:["hello","there"],
    expected:"Invalid input"
  },
  {
    input:12/3,
    expected:"Invalid input"
  },
  {
    input:{name:"Athulya"},
    expected:"Invalid input"
  },
  {
    input:NaN,
    expected:"Invalid input"
  },
  {
    input:"  ",
    expected:0
  },
  {
    input:"12 89",
    expected:2
  }
]
testCase.forEach((num,index)=>{
  let output=wordCount(num.input)
  let pass=output.toString()===num.expected.toString()
  console.log("Test :",index+1 ,pass?"Passed":"Failed")
  console.log("Input",num.input)
  console.log("Expected",num.expected)
  console.log("Got" ,output)
  console.log("---------------------------------")
})