"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**(eg: x^2 + 2x+3, x=2) */
function evaluatePolynomial(str, value) {
    let val = value.split("=");
    // console.log(val[0])
    let newstr = str.replaceAll(val[0], val[1]);
    console.log(newstr);
}
console.log(evaluatePolynomial(" x^2 + 2x+3", "x=2"));
//# sourceMappingURL=question4.js.map