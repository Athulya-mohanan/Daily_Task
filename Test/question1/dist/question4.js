"use strict";
/**4. Implement a template parser. It takes two inputs, template string and data object. Keys wrapped in double curly brackets should be replaced with values of given data.

Input:
"Hello {{name}}, you have {{count}} new messages.", { name: "John", count: 3 }

Output:
"Hello John, you have 3 new messages." */
Object.defineProperty(exports, "__esModule", { value: true });
function templateParser(str, obj) {
    // let newStr=str.replaceAll(/[{},]/g,"")
    // let keys=Object.keys(obj)
    // let index=[]
    // let result=""
    // for(let word of newStr){
    //     if(keys.includes(word)) {
    //         index.push(newStr.indexOf(word))
    //     }
    // }
    let newStr = str.split(" ").join(" ");
    let strreplace = newStr.replaceAll(/[{}]/g, "");
    console.log(strreplace);
}
console.log(templateParser("Hello {{name}} , you have {{count}} new messages.", { name: "John", count: 3 }));
//# sourceMappingURL=question4.js.map