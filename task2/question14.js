/**14. Write a program that checks if a given string is a palindrome, ignoring spaces and punctuation.

Test cases:
Input: "A man, a plan, a canal, Panama!"
Expected output: True */
function stringPalindrome(str){
    if(typeof(str)!=="string" ) return "Invalid input"
    let updatedText=str.replace(/[,.!?\s]/g, '').toLowerCase()
    if(updatedText.length===0) return "Invalid input"
    let reversedText=updatedText.split("").reverse().join().replace(/[,.!?\s]/g, '').toLowerCase()
    if(reversedText===updatedText){
        return true
    }
    else{
        return false
    }
}
// console.log(stringPalindrome("Hello, world!"))
// console.log(stringPalindrome("A man, a plan, a canal, Panama!"))

let testCase=[
    {
        input:"Hello, world!",
        expected:false
    },
     {
        input:"A man, a plan, a canal, Panama!",
        expected:true
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:["Hello","world"],
        expected:"Invalid input"
    },
    {
        input:"",
        expected:"Invalid input"
    },
    {
        input:[],
        expected:"Invalid input"
    },
    {
        input:true,
        expected:"Invalid input"
    },
    {
        input:{},
        expected:"Invalid input"
    },
    {
        input:"  ",
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
        input:[1,2,3,4],
        expected:"Invalid input"

    },
    {
        input:[{}],
        expected:"Invalid input"
    },
    {
        input:4/5,
        expected:"Invalid input"
    }
]
testCase.forEach((num,index)=>{
    let output=stringPalindrome(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log(`Task: ${index+1}`,pass?"Pass":"Fail")
    console.log("Input",num.input)
    console.log("Expected",num.expected)
    console.log("Got:",output)
    console.log("--------------------------------------------")
})
