function sumOfArray(...arr:number[]){
    let sum:number=0
    for(let i of arr){
        sum+=i
    }
    return sum
}
console.log(sumOfArray(1,2,3,4))
console.log(sumOfArray(1,2))