function reverseWords(sentence1){
    if(typeof(sentence1)!=="string"||sentence1.trim().length===0) return "Invalid input"
    let sentence=sentence1.trim()
    let splited=sentence.split(" ")
    return splited.reverse().toString().split(",").join(" ")
}
// console.log(reverseWords("Hello everyone there "))

let testCase=[
    {
        input:"Hello everyone there ",
        expected:"there everyone Hello"
    },
     {
        input:"Helloeveryonethere",
        expected:"Helloeveryonethere"
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:["hello"],
        expected:"Invalid input"
    },
    {
        input:{},
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
        input:[{}],
        expected:"Invalid input"
    },
    {
        input:1/3,
        expected:"Invalid input"
    },
    {
        input:"hello",
        expected:"hello"
    },
    {
        input:true,
        expected:"Invalid input"
    },
    {
        input:"",
        expected:"Invalid input"
    },
    {
      input:" ",
      expected:"Invalid input"
    },
    {
        input:"a b",
        expected:"b a"
    }
]
testCase.forEach((num,index)=>{
        let output=reverseWords(num.input)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})