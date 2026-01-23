/**3.Write a function SortMixedNested(arr) that takes an array of mixed types and nested arrays, and sorts all numbers in ascending order recursively, keeping the same nested structure.
Example:
Input: [3, [2, [5, 1]], 4]
Output: [1, [2, [3, 4]], 5 */

function sortMixedNested(arr: number[]) {
  //   let sorted = arr.flat(Infinity).sort((a, b) => a - b);
  let sorted = [1, 2, 3, 4, 5];
  //   function recursive(arr) {
  // console.log(sorted);
  arr.forEach((x: number) => {
    if (x instanceof Array) {
      sortMixedNested(x);
    } else {
      for (let i of sorted) {
        arr[i] = sorted[i];
      }
    }
  });
  //   }

  return arr;
}
console.log(sortMixedNested([3, [2, [5, 1]], 4]));

                                //NOT COMPLETED
