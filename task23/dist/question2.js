"use strict";
/**2. Write a program to parse query string into an object. Use '&' as separator.

Input: "name=John&age=20"
Output: { name: "John", age: "20" } */
Object.defineProperty(exports, "__esModule", { value: true });
function stringToObj(str) {
    let result = {};
    let splited = str.split("&");
    for (let i = 0; i < splited.length; i++) {
        let split = splited[i].split("=");
        result[split[0]] = split[1];
    }
    return result;
}
console.log(stringToObj("name=John&age=20&place=vadakara"));
//# sourceMappingURL=question2.js.map