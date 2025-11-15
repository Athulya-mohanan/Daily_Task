export function filterProducts(products,searchText:string){
   if(typeof(products)!=="object") return "Invalid input"
    if(typeof(searchText)!=="string") return "Invalid input"
    let upsearch=searchText.toLowerCase()
    for(let obj of products){
        if(!obj.name){ return "Invalid input"}
    }
    let res=[]
    for(let obj of products){
        if(obj.name.toLowerCase().includes(upsearch)){
            res.push(obj)
        }
    }
    if(res.length===0) return "No Match found"
    return res
}

console.log(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],"t"))