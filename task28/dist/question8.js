"use strict";
/**8. Write a function which replaces all numbers in a string with "#".

Test cases:

Input: "Room 45 on floor 3"
Output: "Room ## on floor #" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacesAllNumber = replacesAllNumber;
function replacesAllNumber(str) {
    if (typeof (str) !== "string" || str.trim().length === 0)
        return "Invalid";
    return str.replaceAll(/[0-9]/g, "#");
}
// console.log(replacesAllNumber("Room 45 on floor 3"))
//# sourceMappingURL=question8.js.map