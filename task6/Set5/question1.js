function stringStructure(word){
    if(typeof(word)!=="string") return "Invalid input"
    
    let updated=word.replace(/[^\w]/g,"")
    if(updated.trim().length===0) return "Invalid input"
    return updated.toLowerCase()
}
let testCase=[
    {
        input:" hello world!!",
        expected:"helloworld"
    },
     {
        input:" hello         world!!",
        expected:"helloworld"
    },
    {
        input:" hello#",
        expected:"hello"
    },
    {
        input:"",
        expected:"Invalid input"
    },
     {
        input:123,
        expected:"Invalid input"
    },
    {
        input:[],
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
        input:"*********",
        expected:"Invalid input"
    },
    {
        input:NaN,
        expected:"Invalid input"
    },
    {
        input:"a*&^%$#@",
        expected:"a"
    },
    {
        input:["hey"],
        expected:"Invalid input"
    },
    {
        input:"Doe )",
        expected:"doe"
    },{
        input:"        ",
        expected:"Invalid input"
    },{
        input:4/8,
        expected:"Invalid input"
    },


]

testCase.forEach((num,index)=>{
        let output=stringStructure(num.input)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})
