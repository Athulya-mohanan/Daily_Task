function isPrime(num:number):string|boolean{
    let result:string|boolean=""
    if(num===0||num===1){
        result="Zero and One is not valid"
    }
    for(let i=2;i<=num-1;i++){
        if(num%i==0){
            result=false;
            break;
        }else{
            result=true;
        }
        
    }
   return result
}

console.log(isPrime(29))
console.log(isPrime(10))
console.log(isPrime(7))
