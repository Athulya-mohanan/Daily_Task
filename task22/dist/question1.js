"use strict";
/**Write a program which accepts a date and a formatter string. The program should return the given date after formatting based on the given formatter.

Supported formatters:

YY	 18	    Two-digit year
YYYY 2018	Four-digit year
M	 1-12	The month, beginning at 1
MM	 01-12	The month, 2-digits
D	 1-31	The day of the month
DD	 01-31	The day of the month, 2-digits
H	 0-23	The hour
HH	 00-23	The hour, 2-digits
h	 1-12	The hour, 12-hour clock
hh	 01-12	The hour, 12-hour clock, 2-digits
m	 0-59	The minute
mm	 00-59	The minute, 2-digits
s	 0-59	The second
ss	 00-59	The second, 2-digits
A	 AM PM
a	 am pm

Test cases:
Input: new Date(2025, 1, 4, 13, 44, 3), 'YY-M-D, H:m:s'
Output: 25-2-4, 13:44:3 */
Object.defineProperty(exports, "__esModule", { value: true });
function formatter(datestr, str) {
    let date1 = new Date(datestr);
    let year = date1.getFullYear();
    let month = date1.getMonth();
    let date = date1.getDate();
    let fulldate = [];
    fulldate.push(year.toString(), month.toString(), date.toString());
    let hour = date1.getHours();
    let minute = date1.getMinutes();
    let second = date1.getSeconds();
    let fulltime = [];
    fulltime.push(hour.toString(), minute.toString(), second.toString());
    let dateTime = str.split(",");
    let inpdate = dateTime[0].split("-");
    let inptime = dateTime[1].split(":");
    let result = [];
    for (let i = 0; i < inpdate.length; i++) {
        console.log(inpdate[i].length);
        if (inpdate[i].length == 2) {
            if (fulldate[i].length > 2) {
                result.push(fulldate[i]?.slice(2));
            }
            else
                result.push(fulldate[i].padStart(2, "0"));
        }
        else if (inpdate[i].length == 1) {
            result.push(fulldate[i]);
        }
    }
    for (let i = 0; i < inptime.length; i++) {
        if (inptime[i].length == 2) {
            result.push(fulltime[i].padStart(2, "0"));
        }
        else if (str[i].length == 1) {
            result.push(fulltime[i]);
        }
    }
    return result;
}
console.log(formatter(new Date(2025, 1, 4, 13, 44, 3), 'YY-MM-D,H:m:ss'));
// Not completed
//# sourceMappingURL=question1.js.map