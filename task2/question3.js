function isEven(list){
    let evenlist=[]
    for( i in list){
        if(list[i]%2==0) 
            evenlist.push(list[i])
    }
    return evenlist
}
console.log(isEven([2, 4, 6, 8, 10]))
