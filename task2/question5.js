/**Write a program that takes a string as input and returns the frequency of each character in the string.

Test cases:
Input: "hello"
Expected output: {'h': 1, 'e': 1, 'l': 2, 'o': 1} */
function characterFrequency(words){
    if(Array.isArray(words) || typeof(words)!=="string") return "Invalid input"
    let frequenCount={}
    let word=words.toUpperCase().replaceAll(/\s/g,"")
    if(word.length===0) return "Empty string"
    for(let j=0;j<word.length;j++){
        for(let i of word[j]){
        frequenCount[i]=(frequenCount[i]||0)+1
    }
    }
    
    return frequenCount
}
// console.log(characterFrequency("programming"))

const testCase=[
    {
        input:"Programming",
        expected:{ P: 1, R: 2, O: 1, G: 2, A: 1, M: 2, I: 1, N: 1 }
    },
     {
        input:[],
        expected:"Invalid input"
    },
    {
        input:"hello Hey",
        expected:{ H: 2, E: 2, L: 2, O: 1, Y: 1 }
    },
    {
        input:[1,2,3],
        expected:"Invalid input"
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:[{name:"Doe"}],
        expected:"Invalid input"
    },
    {
        input:NaN,
        expected:"Invalid input"
    },
     {
        input:undefined,
        expected:"Invalid input"
    },
     {
        input:null,
        expected:"Invalid input"
    },
    {
        input:"  ",
        expected:"Empty string"
    },
    {
        input:{},
        expected:"Invalid input",
        
    },
    {
        input:"ArraY",
        expected:{ A: 2, R: 2, Y: 1 }
    },
    {
        input:true,
        expected:"Invalid input"
    },
    {
        input:"---",
        expected:{ '-': 3 }
    },
    {
        input:3/6,
        expected:"Invalid input"
    },
    {
        input:"  hello  ",
        expected:{ H: 1, E: 1, L: 2, O: 1 }
    }

]
testCase.forEach((str,index)=>{
    let output=characterFrequency(str.input)
    let pass=output.toString()===str.expected.toString()
    console.log(`Test : ${index+1}`,pass?"Pass":"Fail")
    console.log("Input :",str.input)
    console.log("Expected :",str.expected)
    console.log("Got :",output)
    console.log("--------------------------------------------------")
})