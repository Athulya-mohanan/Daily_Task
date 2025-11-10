/**Write a function Once(fn) that ensures a given function can only be executed
once, returning the same result for subsequent calls.
Example:
const initialize = Once(() => console.log("Initialized"));
initialize(); // "Initialized"
initialize(); // (no output) */
function Once() {
  let count = 0;
  return function () {
    count++;
    if (count === 1) {
      return "Initialized";
    } else return "";
  };
}
const initialize = Once();
console.log(initialize());
console.log(initialize());
console.log(initialize());
// const initialize = () => console.log("Initialized");
// initialize()
// initialize()
