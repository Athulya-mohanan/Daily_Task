"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubblesort = bubblesort;
function bubblesort(arr) {
    if (!Array.isArray(arr))
        return "Invalid";
    for (let num of arr) {
        if (typeof (num) !== "number")
            return "Invalid";
    }
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubblesort([12,0,6,14,10,8,7]))
//# sourceMappingURL=question1bubble.js.map