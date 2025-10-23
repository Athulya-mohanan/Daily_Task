function changeUpperCase(arr:string[]):string[]{
    let result:string[]=[]
    for(let i of arr){
        result.push(i.toUpperCase())
    }
    return result
}
console.log(changeUpperCase(['hey','there','is']))