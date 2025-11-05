/**5. Write a function which receives 'n' number of number arguments, and it should return their sum. (Note: Arguments can be in any count).

Test cases:
Input: 1, 2, 3, 4
Expected output: 10 */
import { utilFunction } from "../util.js"

function sumOfArguments(...a){
    // if(!Array.isArray(...a)) return "Invalid input"
    let sum=0
  for(let i of a){
    if(typeof(i)!=="number" ) return "Input must be number"
  }
   
    for( let i of a){
        sum+=i
    }
    return sum
}


// console.log(sumOfArguments[1, 2, 3, 4])
// console.log(sumOfArguments( 1, 2 ))

let testCase=[
    {
        inp1:[1,2,3,4],
        expected:10

    },
    {
        inp1:"hello",
        expected:"Input must be number"

    },
    {
        inp1:[2.4,4],
        expected:6.4

    },
    {
        inp1:[2/4,8.58],
        expected:9.08
    },
    {
        inp1:["one",2,8],
        inp2:2,
        expected:"Input must be number"
    },
    {
        inp1:[null],
       
        expected:"Input must be number"
    },
    {
        inp1:[-1,0,2],
        inp2:0,
        expected:1
    },
    {
        inp1:[NaN,undefined],
        expected:"Input must be number"
    },
    {
        inp1:[],
        expected:0
    },
  
    {
        inp1:[0,0,0],
        expected:0
    },
    {
        inp1:[true],
        expected:"Input must be number"
    },
  
    

]

testCase.forEach((num,index)=>{
    let output=sumOfArguments(...num.inp1)
    let pass=utilFunction(num.expected,output)
    console.log(`Test: ${index+1}`,pass)
    console.log(`Input`,num.inp1)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})
