/**2. Write a function SeatingArrangementsWithRoundTable(people) that returns all unique circular permutations of people.
Example:
("A,B,C" is the same as "B,C,A"). */

// export function roundTable(people:string[]){
//  let result:string[]=[]
//  for(let i=0;i<people.length;i++){
//     let current:string=people[i]
//     let left:string[]=people.slice(0,i)
//     let right:string[]=people.slice(i+1)
//     result.push([current,right,left])
//  }
//  let flaten:string[]=[]
//  for(let subres of result){
//     let flat=subres.flat()
//     flaten.push(flat)
//  }
//  return flaten
// // return result
// }
// console.log(roundTable(["A","B","C"]))

function roundTable(people: string) {
  if (people.length === 1) return [people];
  let result = [];
  for (let i = 0; i < people.length; i++) {
    let startChar = people[i];
    let remaing = people.slice(0, i) + people.slice(i + 1);
    let roundCall = roundTable(remaing);
    for (let chars of roundCall) {
      result.push(startChar + chars);
    }
  }
  return result;
}
console.log(roundTable("ABC"));
