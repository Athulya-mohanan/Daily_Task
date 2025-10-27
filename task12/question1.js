function calculateTotal(billamount,tax=20){
    let taxpercentage=billamount*(tax/100)
    return taxpercentage+billamount
}
console.log(calculateTotal(200,15))
console.log(calculateTotal(100,15))
console.log(calculateTotal(100))

