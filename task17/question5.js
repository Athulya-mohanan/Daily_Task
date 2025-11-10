/**Write a function ComposeAsync(...fns) that allows composition of asynchronous
functions (Promise-returning). Execution order should be right-to-left.
Example:
const addOne = async x => x+1;
const double = async x => x*2;
const fn = ComposeAsync(addOne, double);
await fn(3) → 7
 */

const addOne = async x => x+1;
const double = async x => x*2;
const fn = ComposeAsync(addOne, double);
console.log(await fn(3))