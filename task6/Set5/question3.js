function capitalize(sentence){
   let splited=sentence.split(" ").map((word)=>word[0].toUpperCase()+word.slice(1).toLowerCase()).join(" ")
   return splited
}
console.log(capitalize("this is a programming language"))