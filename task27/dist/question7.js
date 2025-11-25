"use strict";
/**7. Count Vowels in a String
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.countVovels = countVovels;
function countVovels(str) {
    if (typeof (str) !== "string")
        return "Invalid";
    if (str.trim().length === 0)
        return "Invalid";
    let count = 0;
    let vovels = ["a", "e", "i", "o", "u"];
    let tosmall = str.toLowerCase();
    for (let letter of tosmall) {
        if (vovels.includes(letter)) {
            count++;
        }
    }
    return count;
}
// console.log(countVovels("HellOIs there"))
//# sourceMappingURL=question7.js.map