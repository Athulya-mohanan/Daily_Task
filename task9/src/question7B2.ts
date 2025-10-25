function sentenceCount(sent:String):number{
    let count:number=0
   let splited= sent.split(" ")
   count=splited.length
    for( let i=0;i<splited.length;i++){
        if(splited[i]===""){
            count=count-1
        }
    }
    return count
}
console.log(sentenceCount("Hello world"))
console.log(sentenceCount("This is a sample sentence."))
console.log(sentenceCount("Programming is fun!"))