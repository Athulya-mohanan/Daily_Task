"use strict";
/**6. Write a function which finds the common keys between two objects.

Test cases:

Input: {name: "Brad", age: "25"}, {name: "Titan", place: "mars"}
Output: ["name"] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCommonKey = findCommonKey;
function findCommonKey(arg1, arg2) {
    if (typeof (arg1) !== "object" || typeof (arg2) !== "object" || arg1 === null || arg2 === null || Array.isArray(arg1) || Array.isArray(arg2))
        return "Invalid";
    let result = [];
    let key1 = Object.keys(arg1);
    let key2 = Object.keys(arg2);
    if (key1.length === 0 || key2.length == 0)
        return "Invalid";
    for (let key of key1) {
        if (key2.includes(key)) {
            result.push(key);
        }
    }
    if (result.length === 0)
        return "No Common Keys";
    else
        return result;
}
// console.log(findCommonKey({name: "Brad", age: "25"}, {name: "Titan", place: "mars",age:90}))
//# sourceMappingURL=question6.js.map