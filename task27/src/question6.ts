/**6.  Remove All Falsy Values from an Array (Falsy values: false, 0, "", null, undefined, NaN )
input: [1,0,2,"",3,null,4]
output: [1,2,3,4] */

export function removeFalsy(arr:[]){
    if(!Array.isArray(arr)) return "Invalid"
    if(arr.length===0) return "Invalid"
    let result:[]=[]
    let falsyvalues=[false, 0, "", null, undefined, NaN]
   for(let sub of arr){
    if(!falsyvalues.includes(sub)){
        result.push(sub)
    }
   }
    return result
}
// console.log(removeFalsy([1,0,2,"",3,null,4]))