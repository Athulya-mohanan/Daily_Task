/**7. Count Vowels in a String
 */

export function countVovels(str:string):number|string{
    if(typeof(str)!=="string") return "Invalid"
    if(str.trim().length===0) return "Invalid"
    let count:number=0
    let vovels:string[]=["a","e","i","o","u"]
    let tosmall=str.toLowerCase()
    for(let letter of tosmall){
        if(vovels.includes(letter)){
            count++
        }
    }
    return count
}
// console.log(countVovels("HellOIs there"))
