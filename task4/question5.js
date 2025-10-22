function kebabcase(word){
    let updated=word.replace(/[A-Z]/g,"-"+"$&")
    return updated.toLowerCase()
}
console.log(kebabcase('myFunction'))