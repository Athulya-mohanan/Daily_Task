"use strict";
/**Remove Duplicates from an Array Without Using Set
       Return a new array with unique values. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplications = removeDuplications;
function removeDuplications(arr) {
    if (!Array.isArray(arr))
        return "Invalid";
    if (arr.length === 0)
        return "Invalid";
    let unique = [];
    for (let sub of arr) {
        if (Array.isArray(sub))
            return "Invalid";
        if (!unique.some((u) => u === sub)) {
            unique.push(sub);
        }
    }
    return unique;
}
console.log(removeDuplications(["hello", "hello", 11, "11"]));
//# sourceMappingURL=question1.js.map