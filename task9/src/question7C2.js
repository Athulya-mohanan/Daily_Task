"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfArray(...arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}
console.log(sumOfArray(1, 2, 3, 4));
console.log(sumOfArray(1, 2));
//# sourceMappingURL=question7C2.js.map