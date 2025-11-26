/**5. Write a function which calculates sum of unique numbers in an array.

Test cases:

Input: [1,2,3,2]
Output: 4 */

export function sumOfUnique(arr:number[]):number|string{
    if(!Array.isArray(arr)) return "Invalid"
    if(arr.length===0) return "Invalid"
    for(let num of arr){
        if(typeof(num)!=="number") return "Invalid"
    }
    let result:number=0
    for(let i=0;i<arr.length-1;i++){
        if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
            result+=arr[i]
        }
    }
    return result
}

// console.log(sumOfUnique([1,2,3,2]))