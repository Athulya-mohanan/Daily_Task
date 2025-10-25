function emailValidation(email){
    let extn=email.slice(-4)
    if(extn===".com" && email.includes("@")){
        return true
    }
    else{
        return false
    }
}
console.log(emailValidation("tbbxt.@com.com"))
console.log(emailValidation("athulyaa175@gmail.com"))
console.log(emailValidation("invalid.email.com"))