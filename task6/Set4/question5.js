function removeFalsy(arr){
   for(let value of arr){
    return arr.filter((ele)=>(
        ele!=false&& ele!=0 && ele!=''&& ele!=null && ele!=undefined && ele!=NaN
    ))
   }
}
console.log(removeFalsy([true,false,0,'',null,undefined,NaN,123,48]))
