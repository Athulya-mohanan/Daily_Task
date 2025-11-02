// Write a function getTicketPrice(age) that takes a person's age (a number) and returns the price of a movie ticket based on these rules:



// 	- Children (age 12 and under): $10
// 	- Adults (age 13 to 59): $20
// 	- Seniors (age 60 and over): $15


function getTicketPrice(age){
    if(typeof(age)!=="number" || age<0 || Math.round(age)!==age) return "Invalid input"
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
    return `$${price}`
}
// console.log(getTicketPrice(20))

let testCase=[
    {
        input:60,
        expected:"$15"
    },
    {
        input:10,
        expected:"$10"
    },

    {
        input:15,
        expected:"$20"
    },
    {
        input:"hey",
        expected:"Invalid input"
    },
    {
        input:80.7,
        expected:"Invalid input"
    },
    {
        input:4/6,
        expected:"Invalid input"
    },
    {
        input:-60,
        expected:"Invalid input"
    },
    {
        input:[60],
        expected:"Invalid input"
    },
    {
        input:[],
        expected:"Invalid input"
    },
     {
        input:["hey"],
        expected:"Invalid input"
    },{
        input:{},
        expected:"Invalid input"
    },

{
        input:null,
        expected:"Invalid input"
    },

{
        input:undefined,
        expected:"Invalid input"
    },
   {
        input:[{}],
        expected:"Invalid input"
    },{
        input:0,
        expected:"$10"
    },


]

testCase.forEach((num,index)=>{
        let output=getTicketPrice(num.input)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})

