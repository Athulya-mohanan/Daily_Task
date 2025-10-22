 function wordSort(wrd){
    return wrd.toLowerCase().replace(/\s/g,"").split("").sort()
}
function Anagram(wrd1,wrd2){
   if(wordSort(wrd1).join()===wordSort(wrd2).join()) {
    return true
   }
   else{
    return false
   }
}
console.log(Anagram("listen", "siLent"))
console.log(Anagram("restful", "fluster"))
console.log(Anagram( "hello", "world"))
