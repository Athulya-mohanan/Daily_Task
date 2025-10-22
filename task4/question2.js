function findPermutations(str){
    if(str.length===1){
        return [str]
    }
    let permutations=[]
    for(let i=0;i<str.length;i++){
        let currentChars=str[i]
        let remaingChars=str.slice(0,i)+str.slice(i+1)
            let permutationsCall=findPermutations(remaingChars)
        for(let chars of permutationsCall){
            permutations.push(currentChars+chars)
        }
    }
    return permutations
}
console.log(findPermutations("abc"))