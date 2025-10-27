// Write a function getTicketPrice(age) that takes a person's age (a number) and returns the price of a movie ticket based on these rules:

// 	- Children (age 12 and under): $10
// 	- Adults (age 13 to 59): $20
// 	- Seniors (age 60 and over): $15


function getTicketPrice(age){
    let price
    if(age<=12){
        price=10
    }
    else if(age>=13 && age<=59){
        price=20
    }
    else{
        price=15
    }
    return ` $${price}`
}
console.log(getTicketPrice(20))