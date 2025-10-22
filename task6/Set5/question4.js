function reverseWords(sentence){
    let splited=sentence.split(" ")
    return splited.reverse().toString().split(",").join(" ")
}
console.log(reverseWords("Hello everyone "))