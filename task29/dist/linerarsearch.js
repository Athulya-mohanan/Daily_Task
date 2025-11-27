"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function linerarsearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num)
            return `Item ${num} is found at index ${i}`;
        else
            return `Item ${num} not found`;
    }
}
console.log(linerarsearch([1, 2, 3, 4, 5, 6]));
//# sourceMappingURL=linerarsearch.js.map