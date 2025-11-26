"use strict";
/** Write a function that converts Celsius temperature to Fahrenheit. */
// F = °C×(9/5)+32.
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFahrenheit = toFahrenheit;
function toFahrenheit(num) {
    if (typeof (num) !== "number" || Number.isNaN(num) || num === Infinity)
        return "Invalid";
    let result = num * (9 / 5) + 32;
    return result + "°F";
}
// console.log(toFahrenheit(25))
//# sourceMappingURL=question1.js.map