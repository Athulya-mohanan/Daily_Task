import { utilFunction } from "../util.js"

function trnsposeMatrix(mrtx){
    let innerlen=mrtx[0].length
    for(let matx of mrtx){
     if(innerlen!==matx.length) return "Invalid input"
    }
    let newarr=[]
    let result=[]
   for(let i=0;i<mrtx[1].length;i++){
    for(let j=0;j<mrtx.length;j++){
        newarr.push(mrtx[j][i])
    }
   }

   for(let i=0;i<newarr.length;i+=mrtx.length){
    result.push(newarr.slice(i,i+mrtx.length))
   }
   return result
}
// console.log(trnsposeMatrix([[2, 9, 0],[7, 1, 5]]))

let testCase=[
    {
        input:[[2, 9, 0],[7, 1, 5]],
        expected:[ [ 2, 7 ], [ 9, 1 ], [ 0, 5 ] ]
    },

]
testCase.forEach((num,index)=>{
    let output=trnsposeMatrix(num.input)
    let pass=utilFunction(output,num.expected)
    console.log(`Test: ${index+1}`,pass)
    console.log(`Input`,num.input,)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})