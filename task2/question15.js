function stringReverse(str){
    let reversed=[]
    let splitedword=str.split(" ")
    for(let i in splitedword){
        reversed.push(splitedword[i].split("").reverse().join(""))
    }
return reversed
}
console.log(stringReverse("Programming is fun"))