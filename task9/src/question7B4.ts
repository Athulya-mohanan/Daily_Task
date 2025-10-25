function characterCount(word:string):string|number{
    let freqentCount:any={}
    for(let i of word.toLowerCase()){
        freqentCount[i]=(freqentCount[i]||0)+1
    }
    return freqentCount
}
console.log(characterCount("hello"))
console.log(characterCount("programming"))