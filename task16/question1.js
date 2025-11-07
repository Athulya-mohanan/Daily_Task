/**1. Write a function which takes a string containing just the characters '(' and ')', 
 * and returns the length of the longest valid (well-formed) parentheses sub-string.

Test cases:

Input: "(()"
Output: 2

Input: ")()())"
Output: 4 */

// function wellFormedParentheses(str1) {
//     if(typeof(str1)!=="string") return "Invalid input"
//     if(str1.trim().length===0  ) return "Invalid input"
//   let str=  str1.replace(/\s/g,"")
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if(str[i]==="(" || str[i]===")"){
//         if (str[i] === "(" && str[i + 1] === ")") {
//       count++;
//     }
//     }
//     else return "Invalid input"
//   }
//   return count * 2;
// }
// let testCase = [
//   {
//     input: "(()",
//     expected: 2,
//   },
//   {
//     input: ")()())",
//     expected: 4,
//   },
//   {
//     input:"(()()())",
//     expected:6
//   },
//   {
//     input:"",
//     expected:"Invalid input"
//   },
//    {
//     input:"( )",
//     expected:2
//   },
//    {
//     input:")(",
//     expected:0
//   },
//   {
//     input:[],
//     expected:"Invalid input"
//   },
//   {
//     input:123,
//     expected:"Invalid input"
//   },
//   {
//     input:null,
//     expected:"Invalid input"
//   },
//   {
//     input:NaN,
//     expected:"Invalid input"
//   },
//   {
//     input:undefined,
//     expected:"Invalid input"
//   },
//   {
//     input:{},
//     expected:"Invalid input"
//   },
//   {
//     input:"hello",
//     expected:"Invalid input"
//   },
//   {
//     input:"(l(p)()",
//     expected:"Invalid input"
//   },
//  {
//     input:" ",
//     expected:"Invalid input"
//  }
// ];
// testCase.forEach((num, index) => {
//   let output = wellFormedParentheses(num.input);
//   let pass=output.toString()===num.expected.toString()
//   console.log("Test :",index+1,pass?"Pass":"Fail")
//   console.log("input :",num.input)
//   console.log("Expected :",num.expected)
//   console.log("Got :",output)
//   console.log("----------------------------------------------")
// });


function wellFormedParentheses(str1) {
    for(let i=0;i<str1.length;i++){
      for(let j=str1.length-1;j<0;j--)  {
        if(arr[i]==="(" && arr[j]===")")
            console.log(str1.slice(arr[i],arr[j]))
      }
    }
}
console.log(wellFormedParentheses("(()"))