function snakeCase(word){
    let updated=word.replace(/[A-Z]/g,"_"+"$&")
    return updated.toLowerCase()
}
console.log(snakeCase("myFunction"))
console.log(snakeCase("myFuncTion"))