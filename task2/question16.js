function arrayLengthSort(arr){
    if(!Array.isArray(arr)) return "Invalid input"
    for(let i of arr){
        if(typeof(i)!=="string"){
            return "Invalid input"
        }
    }
    let len=[]
    for(let i in arr){
      
        len.push(arr[i].length)
    }
    
    let sortLen=len.sort((a,b)=>a-b)
    let sortedarray=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(sortLen[i]===arr[j].length){
                sortedarray.push(arr[j])
            }
        } 
    }
    let removeduplicate=[...new Set(sortedarray)] 
    return removeduplicate
   
  
}
// console.log(arrayLengthSort(["cat", "dog", "elephant", "tiger"]))

let testCase=[
    {
        input:["cat", "dog", "elephant", "tiger"],
        expected:[ 'cat', 'dog', 'tiger', 'elephant' ]
    },
    {
        input:[],
        expected:[]
    },
    {
        input:"",
        expected:"Invalid input"
    },
    {
        input:NaN,
        expected:"Invalid input"
    },
     {
        input:{},
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
        input:123,
        expected:"Invalid input"
    },
    {
        input:3/4,
        expected:"Invalid input"
    },
    {
        input:["cat","rat","cow"],
        expected:["cat","rat","cow"]
    },
    {
        input:["","",""],
        expected:""
    },
    {
        input:[1111,2,3,"cat","rat"],
        expected:"Invalid input"
    },
    {
        input:["c   at","rats"],
        expected:[ 'rats', 'c   at' ]
    },
    {
        input:[1,2,3,4],
        expected:"Invalid input"
    },
    {
        input:[1/4,"5",true],
        expected:"Invalid input"
    }
]
testCase.forEach((obj,index)=>{
    let output=arrayLengthSort(obj.input)
    const pass=output.toString()===obj.expected.toString()
    console.log(`Test: ${index+1}`,pass?"Passed":"Failed")
    console.log(`Input`,obj.input)
    console.log(`Expected: `,obj.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})
