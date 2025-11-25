"use strict";
/**.  Check if a Number is Armstrong Number (An Armstrong number is a number that is equal to the sum of its own digits,
 *  each raised to the power of the total number of digits)
     Armstrong Number: 153 = 1³ + 5³ + 3³ */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmstrongNumber = ArmstrongNumber;
function ArmstrongNumber(num) {
    if (typeof (num) !== "number" || Number.isNaN(num))
        return "Invalid";
    let str = num.toString().split("");
    let sum = 0;
    for (let num of str) {
        sum += Number(num) ** str.length;
    }
    return sum === num ? true : false;
}
// console.log(ArmstrongNumber(12))
//# sourceMappingURL=question3.js.map