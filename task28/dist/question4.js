"use strict";
/**
4. Convert seconds into time text.

Test cases:

Input: 9000
Output: "2 hours 30 minutes"

1 hr -60mints
1 min-60
1 hr=60x60 =3600*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondsToTime = secondsToTime;
function secondsToTime(num) {
    if (typeof (num) !== "number" || num < 0 || Number.isNaN(num) || num === Infinity || Math.round(num) !== num)
        return "Invalid";
    let result = num / 3600;
    let hours = Math.trunc(result);
    let remaining = num % 3600;
    let minutes = Math.trunc(remaining / 60);
    let seconds = remaining % 60;
    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
}
// console.log(secondsToTIme(74097) )
//# sourceMappingURL=question4.js.map