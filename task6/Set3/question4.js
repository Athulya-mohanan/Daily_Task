function addItem(arr,item){
    let newArr=JSON.parse(JSON.stringify(arr))
    newArr.push(item)
    console.log("Orginal array",arr)
    return newArr
}

console.log(addItem([1,2,3,4,5,6],10))