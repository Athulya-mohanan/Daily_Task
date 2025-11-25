"use strict";
/**Check if Array is Sorted (Ascending or Descending)
     return:
"ascending"
"descending"
"unsorted" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkArray = checkArray;
function checkArray(arr1) {
    if (!Array.isArray(arr1) || arr1.length === 0)
        return "Invalid";
    for (let num of arr1) {
        if (typeof (num) !== "number")
            return "Invalid";
    }
    let arr = [...arr1];
    let arr2 = [...arr1];
    let asending = arr.sort((a, b) => a - b);
    let desending = arr2.sort((a, b) => b - a);
    if (JSON.stringify(asending) === JSON.stringify(arr1))
        return "Ascending";
    else if (JSON.stringify(desending) === JSON.stringify(arr1))
        return "Descending";
    else
        return "Unsorted";
}
// console.log(checkArray([9,7,6,3,5,3,1,9]))
// console.log(checkArray([1,2,3,4,5,6,7,8,9]))
// console.log(checkArray([9,8,7,6,5,5,4,3]))
//# sourceMappingURL=question9.js.map