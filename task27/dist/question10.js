"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**Deep Object Comparison (without JSON.stringify)
      Write a function deepEqual(a, b) that returns true if two values are deeply equal. */
function flatObject(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        let newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            flatObject(obj[key], newKey, result);
        }
        else {
            result[newKey] = obj[key];
        }
    }
    return result;
}
console.log(flatObject({ a: { b: { c: 1 } }, d: 2 }));
//# sourceMappingURL=question10.js.map