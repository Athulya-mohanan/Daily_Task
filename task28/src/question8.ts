/**8. Write a function which replaces all numbers in a string with "#".

Test cases:

Input: "Room 45 on floor 3"
Output: "Room ## on floor #" */

export function replacesAllNumber(str:string){

    if(typeof(str)!=="string" ||str.trim().length===0) return "Invalid"
    return str.replaceAll(/[0-9]/g,"#")
   
}
// console.log(replacesAllNumber("Room 45 on floor 3"))