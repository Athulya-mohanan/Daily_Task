"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionsort = selectionsort;
function selectionsort(arr) {
    if (!Array.isArray(arr))
        return "Invalid";
    for (let num of arr) {
        if (typeof (num) !== "number")
            return "Invalid";
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndx]) {
                minIndx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndx];
        arr[minIndx] = temp;
    }
    return arr;
}
// console.log(selectionsort([12,0,6,14,10,8,7]))
//# sourceMappingURL=selectionsort.js.map