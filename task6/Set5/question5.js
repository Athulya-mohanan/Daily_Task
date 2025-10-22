function  countVowels(str){
    let count=0
    let LowerCase=str.toLowerCase()
    for( let i of LowerCase){
        if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
            count++
        }
    }
    return count
}
console.log(countVowels("hello world"))