/**2. Write a function which takes an array of strings (words) and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified. Last line can be justified to the left.

Test cases:
Input: ["This", "is", "an", "example", "of", "text", "justification."], 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
] */

function maxWidthLine(arr, maxwidth) {
  let str = "";
  for (let i of arr) {
    str += i + "   ";
  }
  let newArr = [];
  newArr.push(str);
  //  console.log(str.length)
  for (let i = 0; i < str.length; i++) {
    for (let words of newArr) {
      let str1 = [];
      if (str1.length < 5) {
        str1.push(words[i]);
        newArr.push(str1);
      }
    }
  }
  console.log(newArr);
}
console.log(
  maxWidthLine(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);
