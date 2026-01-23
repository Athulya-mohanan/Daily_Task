/**pattern = "abba"
str = "dog cat cat dog"
Output:
matches: true */

function patternMatch(pattern: string, str: string) {
  let newPattern = pattern.split("");
  let str1 = str.split(" ");
  let obj = [];
  let uniquewords: string[] = [];
  let uniqueKey: string[] = [];
  for (let words of str1) {
    if (!uniquewords.some((u) => u === words)) uniquewords.push(words);
  }
  for (let words of newPattern) {
    if (!uniqueKey.some((u) => u === words)) uniqueKey.push(words);
  }

  for (let i = 0; i < uniquewords.length; i++) {
    // console.log(uniqueKey[i])
    obj.push({ [i]: uniquewords[i] });
    // console.log(obj);
  }
 
}
console.log(patternMatch("abba", "dog cat cat dog"));

