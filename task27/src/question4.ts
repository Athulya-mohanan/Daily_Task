/**4.  Convert Snake Case to Camel Case
input: "hello_world_from_js"
output: "helloWorldFromJs" */
export function toCamelCase(str:string):string{
    if(typeof(str)!=="string"||str.trim().length===0) return "Invalid"
 for(let i=0;i<str.length;i++){
    if(str[i]==="_" && str[i+1]==="_") return "Invalid"
 }
 if(str[0]==="_"||str[str.length-1]==="_") return "Invalid"
 if(str!==str.toLowerCase()) return "Invalid"
let result=""
let updated= str.split("_")
for(let sub of updated){
result+=sub[0]?.toUpperCase()+sub.slice(1)
}
return result[0]?.toLowerCase()+result.slice(1)
}
// console.log(toCamelCase("hello_a"))