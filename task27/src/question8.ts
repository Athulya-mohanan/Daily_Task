/**8. Convert an Object to Query String
input: {name:"John", age:30}
output: "name=John&age=30" */

export function objectToQueryString(obj):string{
   if(typeof(obj)!=="object"||obj===null) return "Invalid"
  
let key:(string|number)[]=Object.keys(obj)
let values:(string|number)[]=Object.values(obj)
if(key.length===0||values.length===0) return "Invalid"
let result:string=""
for(let i=0;i<key.length;i++){
    result+=`${key[i]}=${values[i]}&`
}
return result.slice(0,result.length-1)
}
// console.log(objectToQueryString({name:"John", age:30,place:"vadakara"}))