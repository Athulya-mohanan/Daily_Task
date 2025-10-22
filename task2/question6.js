function sumOfDivisible(arr){
    let sum=0
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]%3==0){
            sum=sum+arr[i]
        }
    }
    return sum
}
console.log(sumOfDivisible([15, 25, 35, 45,55]))
