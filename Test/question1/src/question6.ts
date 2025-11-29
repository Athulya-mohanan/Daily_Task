/**6. Develop a string compression tool.

Input: "aaabbbbcc", "encrypt"
Output: "a3b4c2"

Input: "a3b4c2", "decrypt"
Output: "aaabbbbcc" */

export function compressionTool(str:string,cryp:string){

    if(typeof(str)!=="string"||typeof(cryp)!=="string" || str.length==0) return "Invalid"
   let way=cryp.toLowerCase()

    let splited:string[]=str.split("")
    let result:string=""
    let freq={}
   
    if(way==="encrypt") {
         for(let letr of splited){
       freq[letr]=(freq[letr]||0)+1
    }
        for(let key in freq){
            result+=key+freq[key]
        }
         return result  
    }
   else if(way==="decrypt"){
    for(let i =0;i<splited.length;i++){
        freq[str[i]]=Number(str[i+1])
        i++
     }
     for(let key in freq){
       for(let i=0;i<freq[key];i++){
        result+=key
       }
     }
     return result
   }
   else return "Invalid"
     
}
console.log(compressionTool("a3b4c2", "dEcryPt"))

