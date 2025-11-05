// let count=0
// function CountIncrement(){
//    return count++ 
// }
// console.log(CountIncrement())
// console.log(CountIncrement())
// console.log(CountIncrement())




function CountIncrement(n){
   return function(){
      return n++
   }
}
const counter=CountIncrement(5)
console.log(counter())
console.log(counter())
console.log(counter())
