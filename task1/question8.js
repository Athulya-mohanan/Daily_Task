function checkAnagram(arr){
    const group={}
    for(let word of arr){
        const key=word.split("").sort().join("");
        if(!group[key]){
            group[key]=[]
        }
        group[key].push(word)
    }
    return Object.values(group)
}
console.log(checkAnagram(["care", "race", "acre", "dog", "god", "cat"]))

