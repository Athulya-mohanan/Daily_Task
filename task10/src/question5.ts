type Product={
    id:number,
    name:string,
    price:number,
    instock:boolean,
}

function productdetails(pdts:Product):string{
    return `Product ${pdts.id} : ${pdts.name} costs $${pdts.price} price`
}
let product1:Product={
    id:1,
    name:"Note book",
    price:60,
    instock:true
}
let product2:Product={
    id:2,
    name:"pen",
    price:20,
    instock:false
}
console.log(productdetails(product1))
console.log(productdetails(product2))