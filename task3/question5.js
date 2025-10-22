function sumOfArguments(...a){
    let sum=0
    for( i of a){
        sum+=i
    }
    return sum
}
console.log(sumOfArguments(1, 2, 3, 4))
console.log(sumOfArguments( 1, 2 ))