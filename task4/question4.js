let word="CAT"
let result=[]
let trimed=[]
for(i=0;i<word.length;i++){
    result+=word[i]
    console.log(result)
    if(result.length===word.length){
        for(i=1;i<word.length;i++){
        trimed=result.slice(i)
        console.log(trimed)
    }
    }   
}