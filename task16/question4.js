/**4. Write a function which takes two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

Test cases:

Input: 4, 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

Input: 1, 1
Output: [[1]] */

 
// function possibleCombinations(n,k){
//    let arr=[]
//    let output=[]
//    for(let i=1;i<=n;i++) {
//     arr.push(i)
//    }
//    if(k===1) return [n]
//    for(let i=0;i<arr.length;i++){
//     for(let j=1;j<arr.length;j++){
//         if(i!==j)
//         {let subarr=[]
//         subarr.push(arr[i],arr[j])
//         output.push(subarr)}
//     }
//    }
//    for(let i of output){
//     i.sort((a,b)=>a-b)
//    }
  
//    let result=[]
//    for(let subarr of output){
//     if(!result.some((x)=>JSON.stringify(x)===JSON.stringify(subarr) ))
//         result.push(subarr)
//    }
//    return result
// }

// console.log(possibleCombinations(1,1))

function possibleCombinations(n,k){
   let arr=[]
   let output=[]
   for(let i=1;i<=n;i++) {
    arr.push(i)
   }
   if(k===1) return [n]
   for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;j++){
        if(i!==j)
        {let subarr=[]
        subarr.push(arr[i],arr[j])
        output.push(subarr)}
    }
   }
   for(let i of output){
    i.sort((a,b)=>a-b)
   }
  
   let result=[]
   for(let subarr of output){
    if(!result.some((x)=>JSON.stringify(x)===JSON.stringify(subarr) ))
        result.push(subarr)
   }
   return result
}

console.log(possibleCombinations(1,1))