function longestWord(arr){
    let splitedword=arr.split(" ")
    let len=[]
    let result=[]
    for( let i in splitedword){
        len.push(splitedword[i].length)
    } 
    for( let i in splitedword){
         let sorted=len.sort((a,b)=>b-a)
        if(sorted[0]===splitedword[i].length)
        {
             result.push(splitedword[i])
        }
   }
   return result 
}
console.log(longestWord("I love coding"))