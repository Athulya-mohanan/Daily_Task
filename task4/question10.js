function emailValidation(mail){
    let extn=mail.slice(-4)
    if(extn==".com" && mail.includes("@")){
        return true
    }
    else{
        return false
    }
}
console.log(emailValidation("test.exa.@commple.com"))
console.log(emailValidation("invalid.email.com"))
console.log(emailValidation("user@domain"))