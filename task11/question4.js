function checkAnagram(arr){
    const group={}
    for(let word of arr){
        const key=word.split("").sort().join("");
        if(!group[key]){
            group[key]=[]
        }
        group[key].push(word)
    }
    let result= Object.values(group)
    result.sort((a,b)=>b.length-a.length)
    return result
}
console.log(checkAnagram(["tan", "tea", "eat", "ate", "nat", "bat"]))