


function checkObjectequality(obj1,obj2){
    let copied=Object.assign(obj1,obj2)
    return copied
}
console.log(checkObjectequality({ a: 1, b: 2 }, { b: 3, c: 4 }))