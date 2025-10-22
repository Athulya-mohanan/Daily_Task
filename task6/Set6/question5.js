function sumOfDigits(n){
    let sum=0
    let numbers=n.toString().split("")
   for(let i=0;i<numbers.length;i++){
     sum+=Number(numbers[i])  
   }
   return sum
    
}
console.log(sumOfDigits(123))