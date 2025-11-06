/**5. Write a program which takes an 2D array as input like a matrix. 
 * If an element is 0, set its entire row and column to 0's and return the updated array.

Test cases:
Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Input: [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]] */

// function matrix(arr) {
//   let zeroIndex = [];
//   let rowIndex = [];
//   for (let row of arr) {
//     for (let i = 0; i <= row.length; i++) {
//       if (row[i] === 0) {
//         zeroIndex.push(i);
//         rowIndex.push(arr.indexOf(row));

//       }
//     }
//   }
//   for (let row of arr) {
//     for (let i = 0; i <= row.length; i++) {
//       row[zeroIndex] = 0;
//     }

//   }

// let newArr1= arr[1].map(x=>x-x)
// console.log(newArr1)
//     arr[1]=newArr1

// //   console.log(arr[1]);
//   console.log(arr);
// }
// matrix([
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ]);
function matrix(arr) {
    if(!Array.isArray(arr)) return "Invalid input"
    for(let array of arr){
        if(!Array.isArray(array)) return "Invalid input"
        for(let arrs of array){
            if(typeof(arrs)!=="number") return "Invalid input"
        }
    }
  let zeroIndex = [];
  let rowIndex = [];
  for (let row of arr) {
    for (let i = 0; i <= row.length; i++) {
      if (row[i] === 0) {
        zeroIndex.push(i);
        rowIndex.push(arr.indexOf(row));
      }
    }
  }
  for (let row of arr) {
    for (let i of zeroIndex) {
      row[i] = 0;
    }
  }
  let newArr1;
  for (let i = 0; i < rowIndex.length; i++) {
    newArr1 = arr[i].map((x) => x - x);
  }

  for (let i of rowIndex) {
    arr[i] = newArr1;
  }

  //   console.log(arr[1]);
  return arr
}
// matrix([[1,0,1],[2,3,4],[0,6,8]]);
let testCase=[
    {
      input:  [[1,1,1],[1,0,1],[1,1,1]],
      expected:[[1,0,1],[0,0,0],[1,0,1]]
    },
    {
      input:  [[0,1,2,0],[3,4,5,2],[1,3,1,5]],
      expected:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
    },
    {
        input:[[1,0,1],[2,3,4],[0,6,8]],
        expected:[[0,0,0],[0,0,4],[0,0,0]]
    },
    {
        input:[[1,2,0,4],[5,6,7,8],[1,2,3,0]],
        expected:[ [ 0, 0, 0, 0 ], [ 5, 6, 0, 0 ], [ 0, 0, 0, 0 ] ]
    },
    {
        input:[[1,2,3,4],[5,6,7,8],[1,2,3,4]],
        expected:[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 1, 2, 3, 4 ] ]
    },
    {
        input:[[1,1,1],[1,0,1]],
        expected:[[1,0,1],[0,0,0]]
    },
    {
        
        input:[[1,0,1]],
        expected:[[0,0,0]]
    
    },
    {
        input:123,
        expected:"Invalid input"
    },
     {
        input:null,
        expected:"Invalid input"
    },
     {
        input:undefined,
        expected:"Invalid input"
    },
     {
        input:NaN,
        expected:"Invalid input"
    },
     {
        input:[1,2,3],
        expected:"Invalid input"
    },
    {
        input:[["hey",1,2],[3,0,5],["to",1,2]],
        expected:"Invalid input"
    },
    {
        input:[[]],
        expected:[[]]
    },
    {
        input:[{}],
        expected:"Invalid input"
    }
]
testCase.forEach((num,index)=>{
    let output=matrix(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log("Test :",index+1,pass?"Pass":"Fail")
    console.log("Input",num.input)
    console.log("Expected",num.expected)
    console.log("Got",output)
    console.log("----------------------------")
})

