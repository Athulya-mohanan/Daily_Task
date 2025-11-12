"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function productdetails(pdts) {
    return `Product ${pdts.id} : ${pdts.name} costs $${pdts.price} price`;
}
let product1 = {
    id: 1,
    name: "Note book",
    price: 60,
    instock: true
};
let product2 = {
    id: 2,
    name: "pen",
    price: 20,
    instock: false
};
console.log(productdetails(product1));
console.log(productdetails(product2));
//# sourceMappingURL=question5.js.map