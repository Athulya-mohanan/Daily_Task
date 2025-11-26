/**7. Write a function which converts URL query params to objects.

Test cases:

Input: "?name=John&age=20&active=true"
Output: {name: "John", age: "20", active: "true"} */

export function convertUrlQuery(str:string){
    if(typeof(str)!=="string") return "Invalid"
 
    if(str[0]!=="?") return "Invalid"
    if(!str.includes("=")) return "Invalid"
    let result={}
    let newstr=str.slice(1)
    let splited=newstr.split("&")
    for(let i=0;i<splited.length;i++){
        let subSplit=splited[i]?.split("=")
        result[subSplit[0]]=subSplit[1]
    }
    return result
}
// console.log(convertUrlQuery("?name="))