/**
2. Write a function that rotates an array by k steps. 

Test cases:

Input: [1,2,3,4,5], k=2
Output: [4,5,1,2,3] */

export function rotatesArrayBySteps(arr:number[],steps:number):number[]|string{
    
    if(steps>arr.length || !Array.isArray(arr) ||typeof(steps)!=="number" ||steps<0||Math.round(steps)!==steps) return "Invalid"
         let slice1=arr.slice(-steps)
         let remaining=arr.slice(0,-steps)
    return slice1.concat(remaining)
}
// console.log(rotatesArrayBySteps([1,2,3,4,5],0))