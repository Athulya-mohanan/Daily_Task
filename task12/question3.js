//  Create a person Object, which contains below said properties:
// 	- A firstName property (e.g., "John")
// 	- A lastName property (e.g., "Doe").
// 	- A birthYear property (e.g., 1990).
// 	- A method called getFullName() that returns the person's full name (e.g., "John Doe")
// 	- A method called getAge() that calculates and returns the person's current age.

import { objectComparison } from "../utilobj.js"


// let person={
//     firstName:"John",
//     lastName:"Doe",
//     birthyear:1998,
//     fullName(){
//         return this.firstName+ " "+ this.lastName
//     },
//     getAge(){
//         let currentYear=new Date().getFullYear()
//        return currentYear-this.birthyear
//     }
// }

// console.log(person.getAge(),person.fullName())


function personName(obj){
  
    let result=""
    let keys=Object.keys(obj)
    let defkeys=[ 'firstName', 'lastName', 'birthyear' ]
    if(typeof(obj.birthyear)!=="number"||typeof(obj.firstName)!=="string"||typeof(obj.lastName)!=="string") return "Invalid input"
    for(let key of defkeys){
        if(!keys.includes(key)) return "Invalid input"
    }
   function fullName(){
        result+="name :"+obj.firstName+" "+obj.lastName+","
    }
    function getAge(){
        let currentYear=new Date().getFullYear()
        result+= `age: ${currentYear-obj.birthyear}`
    }
    fullName(),
    getAge()
    return result
}
// console.log(personName({
//     firstName:"John",
//     lastName:"Doe",
//     birthyear:1998}))

let testCase=[
    {
        input:{firstName:"John",lastName:"Doe",birthyear:1998},
        expected:"name :John Doe,age: 27"
    },
    {
        input:{lastName:"Doe",birthyear:1998},
        expected:"Invalid input"
    },
    {
        input:{firstName:"Doe",birthyear:1998},
        expected:"Invalid input"
    },
     {
        input:{firstName:"Doe",lastName:"John"},
        expected:"Invalid input"
    },
    {
        input:{},
        expected:"Invalid input"
    },
    {
        input:[{firstName:"John",lastName:"Doe",birthyear:1998}],
        expected:"Invalid input"
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:NaN,
        expected:"Invalid input"
    },
    {
        input:[],
        expected:"Invalid input"
    },
    {
        input:[{}],
        expected:"Invalid input"
    },
    {
       input:{firstNames:"John",lastName:"Doe",birthyear:1998},
        expected:"Invalid input" 
    },
    {
       input:{firstNames:"John",lastNames:"Doe",birthyear:1998},
        expected:"Invalid input" 
    },
     {
       input:{firstName:"John",lastName:"Doe",birthyear:"hey"},
        expected:"Invalid input" 
    },
     {
       input:{firstName:123,lastName:"Doe",birthyear:"hey"},
        expected:"Invalid input" 
    },
     {
       input:{firstName:"John",lastName:true,birthyear:"hey"},
        expected:"Invalid input" 
    },
]
testCase.forEach((num,index)=>{
        let output=personName(num.input)
       let pass=objectComparison(output,num.expected)
        console.log(`Test: ${index+1}`,pass)
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})

// let obj1={firstName:"John",lastName:"Doe",birthyear:1998}
// console.log(typeof(obj1.birthyear))