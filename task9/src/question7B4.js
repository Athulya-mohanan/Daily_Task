"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function characterCount(word) {
    let freqentCount = {};
    for (let i of word.toLowerCase()) {
        freqentCount[i] = (freqentCount[i] || 0) + 1;
    }
    return freqentCount;
}
console.log(characterCount("hello"));
console.log(characterCount("programming"));
//# sourceMappingURL=question7B4.js.map