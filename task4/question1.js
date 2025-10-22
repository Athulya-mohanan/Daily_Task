function flatArray(arr){
    let flatted=arr.flat(Infinity)
    return flatted
}
console.log(flatArray([1, [2, [3, [4]], 5]]))