
let word="CAT"
let result=[]
let resultSlice=[]
for(let i=0;i<word.length;i++){
    result =result+word[i]
    console.log(result)
    if(result.length==word.length){
        for(let i=1;i<word.length;i++){
            resultSlice=result.slice(i)
            console.log(resultSlice)
        }
    }
}
  


