
function series(n:number){
    if(typeof(n)!=="number") return "Invalid input"
    let sum:number=0
    let result:number|string;
    for(let i=1;i<=n;i++){
        
        sum+=(i**i)
         
    }
  result= sum.toString().slice(-10)
  return Number(result)
   

}
console.log(series(141))
