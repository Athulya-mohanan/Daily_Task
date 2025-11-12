/**The series, 1^1 + 2^2 + 3^3 + …. + 10^10 = 10405071317
Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ….+ 1000^1000. */

function series(n){
    let sum=0n
    for(let i=1n;i<=BigInt(n);i++){
        
        sum+=(i**i)
    }
  let result= sum.toString().slice(-10)
  return Number(result)
   

}
console.log(series(1000))
