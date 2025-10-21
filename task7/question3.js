function findMissingNumber(arr){
    let index=[]
    let sortedArray=arr.sort((a,b)=>a-b)
    let missing
    for(let i=1;i<=arr.length;i++){
        index.push(i)
    
    for( let i=0;i<index.length;i++){
        if(index[i]!=sortedArray[i]){
            return missing= index[i]    
        }
    }
}
return "Nothing is missing"
}
console.log(findMissingNumber([1,2, 5,4,6,3,8]))