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
console.log(isValidEmail("athuly@aa175@gmail.com"))
console.log(isValidEmail("athulyaa@gmail.com"))
console.log(isValidEmail("@atthy@gmailco.m"))
