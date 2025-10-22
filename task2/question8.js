function missingNumber(arr){
    let len=arr.length
    let arrayIndex=[]
    for(let i=arr[0];i<=arr[len-1];i++){
       arrayIndex.push(i)
    
    }
   for(i=0;i<arrayIndex.length;i++){
    
    if(arrayIndex[i]!==arr[i]){
        return arrayIndex[i]
    }
    else if(arr[0]==2){
        return 1
    }
   }
}
console.log(missingNumber([2, 3, 4, 5, 6]))