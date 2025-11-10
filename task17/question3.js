/**Write a function DeepEqual(a, b) that checks whether two values (objects,
arrays, or primitives) are deeply equal.
Example 1:
Input: {x:1,y:{z:2}}, {x:1,y:{z:2}}
Output: true
Example 2:
Input: [1, 2, 3], [1, 2, 3]
Output: true
Example 3:
Input: 1, "1"
Output: false */

function deepEqual(a, b) {
  let result = true;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          result = false;
          break;
        }
      }
    } else {
      result = false;
    }
  } else {
    result = a === b;
  }
  return result;
}
console.log(deepEqual([1, 2, 3], [1, 2, 3]));
console.log(deepEqual(1, "1"));

