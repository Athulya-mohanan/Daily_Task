/**Write a function groupAnagrams(words) that groups a list of words by their anagram
type.
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]] */
function anagram(arr:string[]){
let result:string[]=[]
    let sorted=[]
    for(let words of arr){
    let  sort=words.split("").sort().join("")
      sorted.push(sort)
    }
console.log(sorted)
let subres=[]
for(let word of sorted){
    for(let i=0;i<sorted.length;i++){
        if(word==sorted[i]){
            console.log(arr[i])
        }
        
    }
    // console.log()
}
   return result
}
console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]))