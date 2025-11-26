"use strict";
/**3. Convert Array of Objects to a Single Object

Test cases:

Input: [{key: "a", value: 1}, {key: "b", value: 2}]
Output: {a: 1, b: 2} */
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertArrayObject = convertArrayObject;
function convertArrayObject(arr) {
    if (typeof (arr) !== "object")
        return "Invalid";
    let values = [];
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) !== "object")
            return "Invalid";
        values.push(Object.values(arr[i]));
    }
    for (let subarr of values) {
        if (subarr.length !== 2)
            return "Invalid";
    }
    for (let i = 0; i < values.length; i++) {
        result[values[i][0]] = values[i][1];
    }
    return result;
}
console.log(convertArrayObject([{ key: "a", value: 1 }, { key: "b", value: 2 }]));
//# sourceMappingURL=question3.js.map