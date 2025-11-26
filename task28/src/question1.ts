/** Write a function that converts Celsius temperature to Fahrenheit. */
// F = °C×(9/5)+32.

export function toFahrenheit(num:number):number|string{
    if(typeof(num)!=="number" ||Number.isNaN(num)||num===Infinity) return "Invalid"
    let result:number=num*(9/5)+32
    return result+"°F"
}

// console.log(toFahrenheit(25))