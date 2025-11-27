/**9. Transform Array of Objects by Merging Duplicate IDs.

Test cases:

Input: [
  {id: 1, value: 10},
  {id: 2, value: 20},
  {id: 1, value: 15}
]
Output: [
  {id: 1, value: 25},
  {id: 2, value: 20}
] */
function mergingDuplications(arr){
    console.log(arr.length)
    let keys=[]
    let values=[]
    let result={}
    for(let i=0;i<arr.length;i++){
        keys.push(Object.keys(arr[i]))
        values.push(Object.values(arr[i]))
    }
 console.log(values)
 console.log(keys)
    // let sum=0
    for(let i=0;i<arr.length;i++){
        let currentkey=values[i][0]
        let currentValue=values[i][1]
        if(result[currentkey]){
            result[currentkey]+=currentValue
        }else{
            result[currentkey]=currentValue
        }
    }
    let final=[]
    for(let key in result){
      final.push({id:Number(key),value:result[key]})
    }
  return final
}

console.log(mergingDuplications([
  {id: 1, value: 10},
  {id: 2, value: 20},
  {id: 1, value: 15},
]))