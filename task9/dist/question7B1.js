"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPrime(num) {
    let result = "";
    if (num === 0 || num === 1) {
        result = "Zero and One is not valid";
    }
    for (let i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            result = false;
            break;
        }
        else {
            result = true;
        }
    }
    return result;
}
console.log(isPrime(29));
console.log(isPrime(10));
console.log(isPrime(7));
//# sourceMappingURL=question7B1.js.map