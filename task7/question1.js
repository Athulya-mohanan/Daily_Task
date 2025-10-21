function newArray(arr){
    let odd=[]
    let even=[]
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
           even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
        result.push(even)
         result.push(odd)
        return result.flat()
}
console.log(newArray([3, 2, 4, 1, 5, 8]))