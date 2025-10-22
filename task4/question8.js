function maxProducts(lst){
    let pdtSum=1
    let sortedlst=lst.sort((a,b)=>b-a)
    console.log(lst)
    for(let i=0;i<3;i++){
        pdtSum=+pdtSum*sortedlst[i]
    }
    return pdtSum
}
console.log(maxProducts([1, 2,3, 4,0]))
console.log(maxProducts([-4, -3, -2, -1]))
console.log(maxProducts([-1, -2, -3, -4, -5]))