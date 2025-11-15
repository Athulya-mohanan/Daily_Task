/**Write a function findLongestChain(arr) that:
Finds the first longest strictly increasing chain in the array.
Example:
Input: [5, 1, 2, 3, 0, 4, 6]
Output:
List: 1,2,3,4,6
length: 5
Returns both: */

export function findLongestChain(arr: number[]) {
  if (!Array.isArray(arr) || arr.length == 0) return "Invalid input";
  for (let num of arr) {
    if (typeof num !== "number") return "Invalid input";
  }
  let subres: number[] = [];
  let allposibles: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    subres = [];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let values = arr[j];

        subres[0] = arr[i];
        subres.push(values);
      }
      allposibles.push(subres);
    }
  }
  let unique: number[] = [];
  for (let arrs of allposibles) {
    if (!unique.some((u) => JSON.stringify(u) === JSON.stringify(arrs))) {
      unique.push(arrs);
    }
  }
  let len: number[] = [];
  for (let subarr of unique) {
    len.push(subarr.length);
  }
  let large = len.sort((a, b) => b - a);
  for (let subarr of unique) {
    if (subarr.length === large[0]) {
      return { length: large[0], List: subarr };
    }
  }
}
// console.log(findLongestChain([5, 1, 2, 3, 0, 4, 6]));
