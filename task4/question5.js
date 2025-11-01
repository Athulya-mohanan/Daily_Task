function kebabcase(word){
    if(typeof(word)!=="string" || Array.isArray(word)) return "Invalid input"
    if(word.replaceAll(/\s/g,"").length===0) return "Invalid input"
    let updated=word.replace(/[A-Z]/g,"-"+"$&")
    return updated.toLowerCase()
}
let testCase=[
    {
        input:"myFunction",
        expected:"my-function"
    },
     {
        input:"myFUncTion",
        expected:"my-f-unc-tion"
    },
    {
        input:[],
        expected:"Invalid input"
    },
    {
        input:"my_",
        expected:"my-"
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:"",
        expected:"Invalid input"
    },
    {
        input:"F",
        expected:"-f"
    },
    {
        input:"hello world",
        expected:"hello world"
    },
    {
        input:"hello w W O",
        expected:"hello w -w -o"
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
        input:{},
        expected:"Invalid input"
    },
    {
        input:5/9,
        expected:"Invalid input"
    },
    {
        input:["heH"],
        expected:"Invalid input"
    }
    
]

testCase.forEach((num,index)=>{
    let output=kebabcase(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log("Test :",index+1, pass?"Pass":"Fail")
    console.log(`Input`,num.input)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})
