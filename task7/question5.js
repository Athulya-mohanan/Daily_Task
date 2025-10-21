function myFilter(arr,callback){
    let result=[]
    for(i=0;i<arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }   
    }  
    return result
}
function greater(n){
    n=n>10
    return n
}
console.log(myFilter([15,2,3,4,5,6,89,63,20],greater))
