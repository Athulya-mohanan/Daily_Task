
// function arrayDoubled(arr){
//  if(!Array.isArray(arr)) return "Invalid input"
//  if(arr.length===0) return "Array must contain atleast one value"
//     for(let i of arr){
//         if(typeof(i)!=="number"){
//            return "Invalid input" 
//         }
//     } 
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//        result.push(arr[i]*2)
//     }
//     return result

// }


// function myMap(arr,callback){
//     // console.log("Array doubled")
// let result= callback(arr)
// return result
// }

// myMap([1,2,3,4],arrayDoubled)


function myMap(arr,callback){
     if(!Array.isArray(arr)) return "Invalid input"
    if(arr.length===0) return "Array must contain atleast one value"
    for(let i of arr){
        if(typeof(i)!=="number"){
           return "Invalid input" 
        }
    } 
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i]))
    }
    return result
}

//Filter
function evenNumbers(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            result.push(arr[i])
        }
    }
    return result
}
function myFilter(arr,callback){
   
    console.log(callback(arr))
}
// myFilter([1,2,3,4,5,6,7,8,10],evenNumbers)

// Reduce
function sumFind(arr,initialvalue){
    let sum=0
    let startindex=arr.indexOf(initialvalue)
    for(let i=startindex;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
function myReduce(arr,callback,initialvalue){
    console.log(`Sum of the array(starts from ${initialvalue})`)
    console.log(callback(arr,initialvalue))
}

// myReduce([1,2,3,4,5,6,7],sumFind,3)



// function runTest(testnumber,input,expected){
//     let output=myMap(input,arrayDoubled)
//     if(JSON.stringify(output)===JSON.stringify(expected)){
//         console.log(`Test ${testnumber} Passed`)
//         console.log(`Input : ${input}`)
//         console.log(`Expected : ${expected}`)
//         console.log(`Got :${output}`)
//         console.log("---------------------------")
//     }
//     else{
//         console.log(`Test ${testnumber} Failed`)
//          console.log(`Input : ${input}`)
//         console.log(`Expected : ${expected}`)
//         console.log(`Got :${output}`)
//          console.log("---------------------------")
//     }
// }


// runTest(1,[2,3,4,5],[4,6,8,10])
// runTest(2,[0,0,0],[0,0,0])
// runTest(3,["hey","hello","there"],"Invalid input")
// runTest(4,[-1,-3,-5],[-2,-6,-10])
// runTest(5,[1.5,3.75,4.8],[3.0,7.5,9.6])
// runTest(6,[],"Array must contain atleast one value")
// runTest(7,5,"Invalid input")
// runTest(8,null,"Invalid input")
// runTest(7,{},"Invalid input")
// runTest(9,[[1,2,3,4]],"Invalid input")
// runTest(10,undefined,"Invalid input")
// runTest(11,[-2,3,4,5],[-4,6,8,10])
// runTest(12,[-0,3,-4,5],[-0,6,-8,10])
// runTest(13,[-0.5,3,-4.89,5],[-1,6,-9.78,10])
// runTest(14,-4,"Invalid input")
// runTest(15,[-2],[-4])

TestCase=[
    {
        input:[2,3,4,5],
        expected:[4,6,8,10],
        function:n=>n*2
    },
    {
      input:[0,0,0],
        expected:[0,0,0],
        function:n=>n*3,
        
    },
    {
         input:["hey","hello","there"],
        expected:"Invalid input",
        function:n=>n*3,
    },
    {
         input:[-1,-3,-5],
        expected:[true,true,true],
        function:n=>n<0,
    },
    {
         input:[1.5,3.75,4.8],
        expected:[3.0,7.5,9.6],
        function:n=>n*2,
    },
     {
         input:[],
        expected:"Array must contain atleast one value",
        function:n=>n*2,
    },
     {
         input:5,
        expected:"Invalid input",
        function:n=>n*2,
    },
    {
         input:[2,4,5,6,7,8],
        expected:[1,2,2.5,3,3.5,4],
        function:n=>n/2,
    },
    {
         input:{},
        expected:"Invalid input",
        function:n=>n/2,
    },
      {
         input:[[1,2,3,4]],
        expected:"Invalid input",
        function:n=>n%2,
    },
    {
        input:undefined,
        expected:"Invalid input",
        function:n=>n*7
    },
    {
        input:[-2,3,4,5],
        expected:[-4,6,8,10],
        function:n=>n*2
    },
    {
        input:[-0.5,3,-4.89,5],
        expected:[-1,6,-9.78,10],
        function:n=>n*2 
    },
    {
        input:-4,
        expected:"Invalid input",
        function:n=>n%2
    },
    {
        input:[-2],
        expected:[-6],
        function:n=>n*3
    }
    

]
TestCase.forEach((item,num)=>{
    const output=myMap(item.input,item.function)
    const pass=JSON.stringify(output) ===JSON.stringify(item.expected)
    console.log(`Test ${num+1} :`, pass?"Passed":"Failed")
         console.log(`Input : ${item.input}`)
        console.log(`Expected : ${item.expected}`)
        console.log(`Got :${output}`)
    console.log("--------------------------")
})
