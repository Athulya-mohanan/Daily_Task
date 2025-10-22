function wordCount(word) {
  let splitedword = word.split(" ");
  let count = splitedword.length;
  for (i = 0; i <= splitedword.length - 1; i++) {
    if (splitedword[i] === "") {
      count = count - 1;
    }
  }
  return count;
}
console.log(wordCount("Programming is fun!"));
