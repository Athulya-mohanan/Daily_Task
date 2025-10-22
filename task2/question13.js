function largestWord(arr){
    let len=[]
    for(let i in arr){
        len.push(arr[i].length)
    }
    let largest=len.sort((a,b)=>b-a)
    for(let i in arr){
        if(largest[0]===arr[i].length){
            return arr[i]
        }
    }
}
console.log(largestWord(["programming", "is", "fun"]))