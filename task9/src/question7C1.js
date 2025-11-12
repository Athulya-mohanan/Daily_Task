"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfArray(arr) {
    let array = [];
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = String(arr[i]).replaceAll(",", "");
        array.push(Number(str));
    }
    return array.reduce((acc, curr) => acc + curr);
}
console.log(sumOfArray([[1, 2, 3], [0, 7]]));
console.log(sumOfArray([[1, 2, 3], [0, 7], [1, 2, 3]]));
//# sourceMappingURL=question7C1.js.map