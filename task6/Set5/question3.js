function capitalize(sentence){
   if(typeof(sentence)!=="string" || sentence.trim().length===0) return "Invalid input"
   let splited=sentence.split(" ").map((word)=>word[0].toUpperCase()+word.slice(1).toLowerCase()).join(" ")
   return splited
}
// console.log(capitalize("this is a programming language"))

let testCase=[
   {
      input:"this is a programming language",
      expected:"This Is A Programming Language"
   },
    {
      input:"This Is A Programming Language",
      expected:"This Is A Programming Language"
   },
   {
      input:"THIS IS A PROGRAM",
      expected:"This Is A Program"
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
        expected:"Hello"
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
    }
]
testCase.forEach((num,index)=>{
        let output=capitalize(num.input)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})