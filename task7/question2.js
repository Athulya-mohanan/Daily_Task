function wordFrequency(word){
    let wordsAppears={}
    let newWord=word.toUpperCase().replace(/[,!]/g,"").split(" ")
    for(let words of newWord){
        wordsAppears[words]=(wordsAppears[words]||0)+1
    }
    return wordsAppears
}
console.log(wordFrequency("Hello hello world, world!"))