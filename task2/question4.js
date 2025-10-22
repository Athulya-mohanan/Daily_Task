function toSort(str){
  return str.toUpperCase().replace(/\s/g, "").split("").sort()
}
function isAnagrams(str1,str2){
    let result
    let sort1=toSort(str1)
    let sort2=toSort(str2)
    if(sort1.join()===sort2.join()){
        result= true
    }
    else{
        result= false
    }
return result
}
console.log(isAnagrams("hello", "world"))
