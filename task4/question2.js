/**2. Get All Permutations of a String. A permutation of a string is a rearrangement of its characters in all possible ways, where every character is used exactly once in each arrangement.

Test cases:
Input: "abc"
Output: ["abc", "acb", "bac", "bca", "cab", "cba"] */
import { utilFunction } from "../util.js"

function findPermutations(str1){
    if(typeof(str1)!=="string") return "Invalid input"
    let str=str1.replace(/\s/g,"")
    if(str.replace(/\s/g,"").length===0) return "Invalid input"
    if(str.length===1){
        return [str]
    }
    let permutations=[]
    for(let i=0;i<str.length;i++){
        let currentChars=str[i]
        let remaingChars=str.slice(0,i)+str.slice(i+1)
            let permutationsCall=findPermutations(remaingChars)
        for(let chars of permutationsCall){
            permutations.push(currentChars+chars)
        }
    }
    return permutations
}
// console.log(findPermutations("abc"))

const testCase=[
    {
        input:"abc",
        expected:[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
    },
   { 
        input:123,
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
        input:"a",
        expected:["a"]
    },
    {
        input:"",
        expected:"Invalid input"
    },
    {
        input:"h l o",
        expected:[ 'hlo', 'hol', 'lho', 'loh', 'ohl', 'olh' ]

    },
    {
        input:["abc"],
        expected:"Invalid input"
    },
    {
        input:{name:"Doe"},
        expected:"Invalid input"
    },
    {
        input:true,
        expected:"Invalid input"
    },
    {
        input:" ",
        expected:"Invalid input"
    },
    {
        input:[{}],
        expected:"Invalid input"
    },
    {
        input:"[]",
        expected:[ '[]', '][' ]
    },
    {
        input:2*"hey",
        expected:"Invalid input"
    }
]
testCase.forEach((num,index)=>{
    let output=findPermutations(num.input)
    let pass=utilFunction(num.expected,output)
    console.log(`Test : ${index+1}`,pass)
    console.log("Input :",num.input)
    console.log("Expected",num.expected)
    console.log("Got :",output)
    console.log("------------------------------------")
})