"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPrime(num) {
    let result = "";
    if (num === 0 || num === 1) {
        result = "Zero and One is not valid";
    }
    for (let i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            result = false;
            break;
        }
        else {
            result = true;
        }
    }
    return result;
}
console.log(isPrime(29));
console.log(isPrime(10));
console.log(isPrime(7));
// Question-2
function sentenceCount(sent) {
    let count = 0;
    let splited = sent.split(" ");
    count = splited.length;
    for (let i = 0; i < splited.length; i++) {
        if (splited[i] === "") {
            count = count - 1;
        }
    }
    return count;
}
console.log(sentenceCount("Hello world"));
console.log(sentenceCount("This is a sample sentence."));
console.log(sentenceCount("Programming is fun!"));
//# sourceMappingURL=question7B.js.map