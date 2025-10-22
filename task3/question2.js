function armstrongNumber(num){
    let number=num.toString()
    let pow=number.length
    let sum=0
    for(let i of number){
       sum+= Number(i)**pow
    }
    return(sum===num)
}
console.log(armstrongNumber(153))