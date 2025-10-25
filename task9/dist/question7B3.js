"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toSortString(str) {
    return str.toUpperCase().replace(/\s/g, "").split("").sort().join("");
}
function isAnangram(str1, str2) {
    let result;
    let sort1 = toSortString(str1);
    let sort2 = toSortString(str2);
    if (sort1 === sort2) {
        result = true;
    }
    else {
        result = false;
    }
    return result;
}
console.log(isAnangram("listen", "silent"));
console.log(isAnangram("restful", "fluster"));
console.log(isAnangram("hello", "world"));
//# sourceMappingURL=question7B3.js.map