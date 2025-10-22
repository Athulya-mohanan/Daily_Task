// function  safeAdd(a, b){
//     return a+b
// }
// console.log(safeAdd(0.1,0.2))

function safeAdd(a,b){
    let decimal1=(a.toString().split(".")[1]||"").length
    let decimal2=(b.toString().split(".")[1]||"").length
    let decimalplace=Math.pow(10,Math.max(decimal1,decimal2))
    
    let result=((a*decimalplace)+(b*decimalplace))/decimalplace
    return result
}
console.log(safeAdd(0.2,0.1))