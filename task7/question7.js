function flatArray(arr){
  let result=[]
  arr.forEach(x=>{
    if(x instanceof Array){
      result=result.concat(flatArray(x))
    }else{
      result.push(x)
    }
  })
  return result
}
console.log(flatArray([1, [2, [3, [4]], 5]]))
