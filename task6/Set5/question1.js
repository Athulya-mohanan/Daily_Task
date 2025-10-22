function stringStructure(word){
    let updated=word.replace(/[!,\s]/g,"")
    return updated.toLowerCase()
}
console.log(stringStructure( ' Hello, World! '))