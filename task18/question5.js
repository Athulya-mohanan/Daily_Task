/**Write a function SortBySum(arr) that sorts an array of arrays by the sum of their elements.
Example:
Input: [[1,2,3],[4],[2,7]]
Output: [[2,7],[1,2,3],[4]] */

// function SortBySum(arr) {
//   let sum = [];
//   let result = [];
//   if(!Array.isArray(arr)|| arr.length===0) return "Invalid input"
// for (let subarr of arr) {
//     if(!Array.isArray(subarr)|| subarr.length===0) return "Invalid input"
  
//     for(let i=0;i<subarr.length;i++){
//         if(typeof(subarr[i])!=="number") return "Invalid input"
//     }
// }
//   for (let subarr of arr) {
//     let sums = subarr.reduce((curr, acc) => curr + acc);
//     sum.push(sums);
//   }
//   let sumforsort = [...sum];
//   let sortedarr = sumforsort.sort((a, b) => b - a);
//   console.log(sum)
//   console.log(sortedarr)
//   for (let sort of sortedarr) {
//     for (let index of sum) {
//       if (sort === index) {
        
//         result.push(arr[sum.indexOf(index)]); 
//       }
//     }
//   }
//   return result;
// }
// console.log(SortBySum([[2,1],[0],[3]]));
// console.log(SortBySum([[1,2,3],[7],[0]]));

// let testCase = [
//   {
//     input: [[1, 2, 3], [4], [2, 7]],
//     expected: [[2, 7],  [1, 2, 3],[4]],
//   },
//   {
//     input: [
//       [1, 2, 3],
//       [22, "hello"],
//       [2, "one"],
//     ],
//     expected: "Invalid input"
//   },
//    {
//     input: "hello",
//     expected:"Invalid input",
//   },
//    {
//     input: 123,
//     expected:"Invalid input",
//   },
//    {
//     input: [[-1,-2,-3],[-7],[0]],
//     expected:[[0],[-1,-2,-3],[-7]],
//   },
//    {
//     input: [[-1,-2,-3,null],[-7],[0]],
//     expected:"Invalid input"
//   },
//    {
//     input:true,
//     expected:"Invalid input",
//   },
// {
//     input: [[-1,-2,-3,null],[-7],[0]],
//     expected:"Invalid input",
//   },
// {
//     input:[[1,2,3],4],
//     expected:"Invalid input"
// },
// {
//     input:[[1,2,3],[],[]],
//     expected:"Invalid input"
// },
// {
//     input:[],
//     expected:"Invalid input"
// },
// {
//     input:{},
//     expected:"Invalid input"
// },
// {
//     input:[[-1,-2,-3],[-4],[0]],
//     expected:[[0],[-4],[-1,-2,-3]]
// },
// {
//     input:[[1],[2],[3]],
//     expected:[[3],[2],[1]]
// },
// {
//     input:[[]],
//     expected:"Invalid input"
// },
// ];

// testCase.forEach((num, index) => {
//   let output = SortBySum(num.input);
//   let pass = JSON.stringify(num.expected) === JSON.stringify(output);
//   console.log("Test :", index + 1, pass ? "Pass" : "Fail");
//   console.log("Input :", num.input);
//   console.log("Expected :", num.expected);
//   console.log("Got :", output);
//   console.log("--------------------------------------------------");
// });


function SortBySum(arr) {
  let sum = [];
  let result = [];
  if(!Array.isArray(arr)|| arr.length===0) return "Invalid input"
for (let subarr of arr) {
    if(!Array.isArray(subarr)|| subarr.length===0) return "Invalid input"
  
    for(let i=0;i<subarr.length;i++){
        if(typeof(subarr[i])!=="number") return "Invalid input"
    }
}
  for (let subarr of arr) {
    let sums = subarr.reduce((curr, acc) => curr + acc);
    sum.push(sums);
  }
  let sumforsort = [...sum];
  let sortedarr = sumforsort.sort((a, b) => b - a);
  let usedIndex=[]
  for (let sort of sortedarr) {
    for (let i=0;i<sum.length;i++) {
      if (sort === sum[i] && !usedIndex.includes(i)){
        result.push(arr[i])
        usedIndex.push(i)
        break;
      } 
    }
  }
  return result;
}
console.log(SortBySum([[2,1],[0],[3,1],[3],[4]]));