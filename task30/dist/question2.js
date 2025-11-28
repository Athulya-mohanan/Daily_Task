"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SieveOfEratosthenes = SieveOfEratosthenes;
function SieveOfEratosthenes(num) {
    if (typeof (num) !== "number" || num <= 0 || Math.round(num) !== num)
        return "Invalid";
    let arr = [];
    let result = [];
    for (let i = 2; i < num * 10; i++) {
        arr.push(i);
    }
    for (let i = 2; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] % i === 0) {
                arr.splice(j, 1);
            }
        }
    }
    return arr.slice(0, num);
}
// console.log(SieveOfEratosthenes(50))
//# sourceMappingURL=question2.js.map