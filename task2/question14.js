function stringPalindrome(str){
    let updatedText=str.replace(/[,.!?\s]/g, '').toLowerCase()
    let reversedText=updatedText.split("").reverse().join().replace(/[,.!?\s]/g, '').toLowerCase()
    if(reversedText===updatedText){
        return true
    }
    else{
        return false
    }
}
console.log(stringPalindrome("Hello, world!"))
