/**5. Write a program which takes a 2D array like a triangle, return the minimum path sum from top to bottom.

Test cases:
Input:  [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11 */

function minPath(arr){
    let result=[]
    let arrlen=[]
    let validlen=[]
    if(!Array.isArray(arr)|| arr.length===0) return "Invalid input" 

    for(let subarr of arr){
        if(!Array.isArray(subarr)) return "Invalid input"
        for(let i of subarr){
            if(typeof(i)!=="number") return "Invalid input"
        }
    }
    for(let i=0;i<arr.length;i++){   
            arrlen.push(arr[i].length)   
    }
    for(let i=arr[0].length;i<=arr.length;i++){
        validlen.push(i)
    }
    
   if(arrlen.toString()!==validlen.toString()) return "Invalid input"
    for(let subarr of arr){
        let min=Math.min(...subarr)
        result.push(min)
    }
    return result.reduce((curr,acc)=>curr+acc)
   
}

let testCase=[
    {
        input:[[2],[3,4],[6,5,7],[4,1,8,3]],
        expected:11
    },
    {
        input:[[1,2],[3,4],[6,5,7],[4,1,8,3]],
        expected:"Invalid input"
    },
     {
        input:[[],[3,4],[6,5,7],[4,1,8,3]],
        expected:"Invalid input"
    },
    {
        input:123,
        expected:"Invalid input"
    },
      {
        input:"123",
        expected:"Invalid input"
    },
      {
        input:NaN,
        expected:"Invalid input"
    },
      {
        input:undefined,
        expected:"Invalid input"
    },
      {
        input:null,
        expected:"Invalid input"
    },
    {
        input:[1,2,3],
        expected:"Invalid input"
    },
     {
        input:[["1","2"],["3","4","5"]],
        expected:"Invalid input"
    },
    {
        input:[[],[]],
        expected:"Invalid input"
    },
    {
        input:{},
        expected:"Invalid input"
    },
    {
        input:true,
        expected:"Invalid input"
    },
    {
        input:[{}],
        expected:"Invalid input"
    },
    {
        input:[],
        expected:"Invalid input"
    }
]
testCase.forEach((num,index)=>{
  let output=minPath(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log("Test :",index+1,pass?"Pass":"Fail")
    console.log("Input :",num.input)
    console.log("Expected :",num.expected)
    console.log("Got :",output)
    console.log("------------------------------------------")   
})