/**3. Invert Keys and Values in an Object

Test cases:
Input: { a: 1, b: 2 }
Output: { 1: "a", 2: "b" } */
function objectInvert(obj){
    let newobj=Object.entries(obj)
   for(let i=0;i<newobj.length;i++){
    for(let j=1;j<newobj.length;j++){
       temp=newobj[i][j]
        newobj[i][j]=newobj[i][i]
        newobj[i][i]=temp
    }
    return newobj
   }
}
console.log(objectInvert({ a: 1, b: 2 }))





