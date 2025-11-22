
// 8. Checks whether an integer is even without using the modulo (%) operator


export function checkEven(num:number){
    if(num===0) return "Zero is invalid"
    if(Math.round(num)!=num) return "Invalid input"
    if(typeof(num)!=="number") return "Invalid input"
    let ans=num/2
    if(Math.round(ans)===ans) return "Even"
    else return "Odd"
}
console.log(checkEven(168))

