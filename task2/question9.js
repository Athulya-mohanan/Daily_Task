function emailValidation(email){
    let exstn=email.slice(-4)
    return exstn==".com" &&email.includes(".com")
}
console.log(emailValidation("test@example.com"))
console.log(emailValidation("test@ex.comample"))