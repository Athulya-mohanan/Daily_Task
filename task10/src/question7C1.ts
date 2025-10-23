function sumOfArray(arr:number[][]){
    let array:number[]=[]
    let str:string=""
    for(let i =0;i<arr.length;i++){
        str=String(arr[i]).replaceAll(",","")
        array.push(Number(str))
    }
   return array.reduce((acc,curr)=>acc+curr)

}
console.log(sumOfArray([[1, 2, 3],[0, 7]]))
console.log(sumOfArray([[1, 2, 3],[0, 7],[1,2,3]]))
