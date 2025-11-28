
export function euclidean(a:number,b:number){
    if(typeof(a)!=="number"||typeof(a)!=="number" ||a<0||b<0||Math.round(a)!=a||Math.round(b)!=b) return "Invalid"
    let r
    if(b==0) return a
    else 
        r=a%b
  
    return euclidean(b,r)
   
}
// console.log(euclidean(18,48))


// function euclidean(a:number,b:number){
//     let r=a%b
//     let q=Math.trunc(a/b)
//     a=q*b*r
//     if(r==0) return b
//     else       
//     return euclidean(b,r)  
// }
// console.log(euclidean(69,100))