// function extractUsername(email){
//     for(let i=0;i<email.length;i++){
//         if(email[i]==='@'){
//             console.log(email.slice(0,i))
//         }
//     }
// }
// extractUsername("athulya@gmail.com")


// next-vers
function extractUsername(email){
    if(typeof(email)!=="string") return "Invalid input"
    const indexAt=email.indexOf("@")
    if(indexAt===-1|| indexAt!==email.lastIndexOf("@")) return "Invalid input"
    else if (email.slice(0,indexAt).length===0)  return "Invalid input"
    else  return email.slice(0,indexAt)
}
// console.log(extractUsername("athulyasmohanan@gmail.com"))
let testCase=[
    {
        input:"athulyasmohanan@gmail.com",
        expected:"athulyasmohanan"
    },
    {
        input:"athuly@asmohanan@gmail.com",
        expected:"Invalid input"
    },
     {
        input:"athulyasmohanangmail.com",
        expected:"Invalid input"
    },
     {
        input:"@.com",
        expected:"Invalid input"
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
        input:"@vonnue.com",
        expected:"Invalid input"
    },
    {
        input:true,
        expected:"Invalid input"
    },
    {
        input:"",
        expected:"Invalid input"
    }
]
testCase.forEach((num,index)=>{
        let output=extractUsername(num.input)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})