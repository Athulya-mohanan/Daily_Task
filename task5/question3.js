function trnsposeMatrix(mrtx){
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
console.log(trnsposeMatrix([ [2, 9, 0],[7, 1, 5]]))