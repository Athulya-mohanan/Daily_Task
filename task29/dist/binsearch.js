"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = binarySearch;
function binSearch(arr, start, end, item) {
    if (start === end) {
        if (arr[start] === item)
            return `Item ${item} found at index ${start}`;
        else
            return "Item not found";
    }
    else {
        let mid = Math.trunc((start + end) / 2);
        if (item === arr[mid])
            return `Item ${item} found at index ${mid}`;
        else if (item < arr[mid])
            return binSearch(arr, start, mid - 1, item);
        else
            return binSearch(arr, mid + 1, end, item);
    }
}
// console.log(binSearch([1,2,4,8,0,7],0,4,2))
function binarySearch(arr, item) {
    if (!Array.isArray(arr) || arr.length === 0 || typeof (item) !== "number")
        return "Invalid";
    for (let num of arr) {
        if (typeof (num) !== "number")
            return "Invalid";
    }
    let asce = [...arr].sort((a, b) => a - b);
    let desc = [...arr].sort((a, b) => b - a);
    if (JSON.stringify(asce) !== JSON.stringify(arr) || JSON.stringify(desc) !== JSON.stringify(desc))
        return "Array must be sorted";
    else
        return binSearch(arr, 0, arr.length - 1, item);
}
// console.log(binarySearch([1,2,3,4],3))
//# sourceMappingURL=binsearch.js.map