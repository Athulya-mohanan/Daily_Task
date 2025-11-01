function maxProducts(lst1){
    if(!Array.isArray(lst1)||lst1.length<3) return "Invalid input"
    let lst=[...lst1]
    // if(lst.length<3) return "Invalid input"
    let pdtSum=1
    for(let lsts of lst){
        if(typeof(lsts)!=="number") return "Invalid input"
    }
    let sortedlst=lst.sort((a,b)=>b-a)
    for(let i=0;i<3;i++){
        pdtSum=+pdtSum*sortedlst[i]
    }
    return pdtSum
}
// console.log(maxProducts([1, 2,3, 4,0]))
// console.log(maxProducts([-4, -3, -2, -1]))
// console.log(maxProducts([-1, -2, -3, -4, -5]))

let testCase=[
    {
        input:[1,2,3,4,5],
        expected:60
    },
    {
        input:[0,1,2,3,4,5],
        expected:60  
    },
    {
        input:["hello",1,2,34],
        expected:"Invalid input"
    },
     {
        input:[3],
        expected:"Invalid input"
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:[12/3,45/6,19/4],
        expected:142.5
    },
    {
        input:[-2,4,5,6],
        expected:120
    },
     {
        input:{},
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
        input:"hello",
        expected:"Invalid input"
    },
    {
        input:null,
        expected:"Invalid input"
    },
    {
        input:[0,0,0],
        expected:0
    },
    {
        input:[-2,-4,-5,-6],
        expected:-40
    },
    {
        input:[],
        expected:"Invalid input"
    }
]
testCase.forEach((num,index)=>{
    let output=maxProducts(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log(`Test : ${index+1}`,pass?"Pass":"Fail")
   console.log("Input :",num.input)
   console.log("Expected :",num.expected)
   console.log("Got :",output)
   console.log("-----------------------------------------------------")
})