function maxProduct(arr){
    let product=1
   let sorted=arr.sort((a,b)=>b-a)
//    console.log(sorted)
   for(i=0;i<3;i++){
    product=product*sorted[i]
   }
   console.log(product)
}
maxProduct([1, 2, 3, 4])