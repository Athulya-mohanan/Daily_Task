function intersection(arr1,arr2){
    let result=[]
    for(let a of arr1){
        for(let b of arr2){
            if(a===b){
                result.push(a)
            }
        }
    }
    return result
}
console.log(intersection([1,2,3],[2,3,4]))