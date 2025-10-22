function characterFrequency(word){
    let frequenCount={}
    for(let i of word){
        frequenCount[i]=(frequenCount[i]||0)+1
    }
    return frequenCount
}
console.log(characterFrequency("programming"))
