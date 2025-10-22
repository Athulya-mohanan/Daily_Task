function sumofArray(arr) {
  let array=[]
  let sum=0
  for(i=0;i<arr.length;i++){
    let str=arr[i].toString().split(",").join("")
    array.push(Number(str))
  }
  for(i=0;i<array.length;i++){
    sum=sum+array[i]
  }
  return sum
}
console.log(sumofArray([[1, 2, 3],[0, 7]]))
console.log(sumofArray([[1, 2, 3],[0, 7],[1,2,3]]))


