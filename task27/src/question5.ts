/**5.  Find Intersection of Two Arrays
input: [1,2,3], [2,3,4])
output: [2,3] */

export function intersection(
  arr1: number[],
  arr2: number[]
): number[] | string {
  if(!Array.isArray(arr1)||!Array.isArray(arr2)) return "Invalid"

  let result = [];
  for (let a of arr1) {
    if(typeof(a)!=="number") return "Invalid"
    for (let b of arr2) {
      if(typeof(b)!=="number") return "Invalid"
      if (a === b) {
        result.push(a);
      }
    }
  }
  let unique: number[] = [];
  for (let sub of result) {

    if (!unique.some((u) => u === sub)) {
      unique.push(sub);
    }
  }
  return unique;
}
// console.log(intersection([1, 2, 3], [2, 3, 4]));
