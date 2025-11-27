"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linerarsearch = linerarsearch;
function linerarsearch(arr, num) {
    if (!Array.isArray(arr) || arr.length === 0 || typeof (num) !== "number")
        return "Invalid";
    for (let num of arr) {
        if (typeof (num) !== "number")
            return "Invalid";
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num)
            return `Item ${num} is found at index ${i}`;
    }
    return "Item not found";
}
// console.log(linerarsearch([1,2,3,4,5,6],0))
//# sourceMappingURL=linearsearch.js.map