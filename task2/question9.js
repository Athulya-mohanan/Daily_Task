/** */
// function emailValidation(email){
//     let extn=email.slice(-4)
//     if(extn===".com" && email.includes("@")){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(emailValidation("tbbxt.@com.com"))
// console.log(emailValidation("athulyaa175@gmail.com"))
// console.log(emailValidation("invalid.email.com"))

function isValidEmail(email){
    if(Array.isArray(email)|| email.length===0 || typeof(email)!=="string") return "Invalid input"
    if(email.replaceAll(/\s/g,"").length===0) return "Invalid input"
   const indexAt=email.indexOf("@")
   if(indexAt===-1|| indexAt!==email.lastIndexOf("@")) return false

   const local=email.slice(0,indexAt)
   const domain=email.slice(indexAt+1)

   // local and domain can't be empty
   if(!local||!domain) return false

   // Domain must contain "."
    const dotIndex=domain.indexOf(".")
    if(dotIndex===-1||dotIndex===0||dotIndex===domain.length -1)
        return false

    if(email.includes(" ")) return false

    if(email.includes("..")) return false

    return true;

}
// console.log(isValidEmail("athuly@aa175@gmail.com"))
// console.log(isValidEmail("athulyaa@gmail.com"))
// console.log(isValidEmail("@atthy@gmailco.m"))

let testCase=[
    {
        input:'athuly@aa175@gmail.com',
        expected:false
    },
    {
        input:"athulyaa@gmail.com",
        expected:true
    },
    {
        input:"@atthy@gmailco.m",
        expected:false
    },
    {
        input:["hello"],
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
       input:123,
       expected:"Invalid input"
    },
    {
        input:"user 175@gmail.com",
        expected:false
    },
    {
        input:"user..@gmail.com",
        expected:false
    },
    {
        input:"user.a@vonue.com",
        expected:true
    },
    {
        input:"doe..@gmail.com",
        expected:false
    },
    {
        input:"1234@gmail.com",
        expected:true
    },
    {
        input:"user@example",
        expected:false,
    },{
        input:'user.exmaple.com',
        expected:false
    },
    {
        input:"user@175gamil@.com",
        expected:false
    }
]
testCase.forEach((num,index)=>{
        let output=isValidEmail(num.input)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})