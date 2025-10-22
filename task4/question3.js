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



// function objectInvert(obj){
// //     let keys=Object.keys(obj)
// //     console.log(keys)
// //    let values=Object.values(obj)
// //    console.log(values)
// //    for(i=0;i<keys.length;i++){
// //     for(j=0;j<keys.length;j++){
// //         return obj={values:keys}
// //     }
// //    }
// let pair=Object.entries(obj)
//    console.log(pair)
//    console.log(obj)
// }
// console.log(objectInvert({ a: 1, b: 2 }))

