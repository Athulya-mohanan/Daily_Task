function arrayLengthSort(arr){
    let len=[]
    for(let i in arr){
        len.push(arr[i].length)
    }
    let sortLen=len.sort((a,b)=>a-b)
    let sortedarray=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(sortLen[i]===arr[j].length){
                sortedarray.push(arr[j])
            }
        } 
    }
    let removeduplicate=[...new Set(sortedarray)] 
    return removeduplicate
  
}
console.log(arrayLengthSort(["cat", "dog", "elephant", "tiger"]))