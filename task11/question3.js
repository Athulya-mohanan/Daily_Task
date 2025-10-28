//Filter
console.log("Filter:")
function myFilter(arr,callback){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
function greater(n){
    n=n>10
    return n
}
console.log(myFilter([12,4,5,6,7,8,10,18,90],greater))

// Map
console.log("Map:")
function myMap(arr,callback){
    let result=[]
    for(let i=0;i<arr.length;i++){

         result.push(callback(arr[i]))
    
        
    }
    return result
}
function toDoubled(n){
    n=n*2
    return n
}
console.log(myMap([12,4,5,6,7,8,10,18,90],toDoubled))

// Reduce
// console.log("Reduce:")
// function myReduce(arr,callback,initialvalue){
//     let start=arr.indexOf(initialvalue)
//     let acc=initialvalue
//     for(let i=start+1;i<arr.length;i++){
//         acc=callback(acc,arr[i])
//     }
//     return acc
// }
// function sumOfLimited(a,b){
//    return a+b
// }
// console.log(myReduce([1,2,3,4,5,6],sumOfLimited,5))

console.log("Reduce:")
function myReduce(arr,callback,initialvalue){
    let acc;
    let statIndex;

    if(initialvalue!==undefined){
        acc=initialvalue;
        statIndex=0
    }else{
        acc=arr[0]
        statIndex=1
    }
    for(let i=statIndex;i<arr.length;i++){
        acc=callback(acc,arr[i])
    }
    return acc;
}
function sumOf(a,b){
    return a+b
}
console.log(myReduce([1,2,3,4,5,6,7],sumOf,5))