"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostFrequent = mostFrequent;
/** 2.  Find the Most Frequent Element in an Array
input:
output: 3 */
function mostFrequent(arr) {
    if (!Array.isArray(arr))
        return "Invalid";
    if (arr.length === 0)
        return "Invalid";
    let freq = {};
    for (let sub of arr) {
        freq[sub] = (freq[sub] || 0) + 1;
    }
    let result = [];
    let values = Object.values(freq);
    let keys = Object.keys(freq);
    let max = values.sort((a, b) => b - a);
    for (let key of keys) {
        if (freq[key] === max[0]) {
            result.push(key);
        }
    }
    return result;
}
// console.log(mostFrequent([1, 2, 2, 2, 3, 3, 3, 4]));
//# sourceMappingURL=question2.js.map