/**Remove Duplicates from an Array Without Using Set
       Return a new array with unique values. */

export function removeDuplications(arr: (number | string)[]):(number|string)[]|string {
  if (!Array.isArray(arr)) return "Invalid";
  if (arr.length === 0) return "Invalid";

  let unique: number | string[] = [];
  for (let sub of arr) {
    if (Array.isArray(sub)) return "Invalid";

    if (!unique.some((u) => u === sub)) {
      unique.push(sub);
    }
  }
  return unique;
}
console.log(removeDuplications(["hello", "hello", 11, "11"]));
