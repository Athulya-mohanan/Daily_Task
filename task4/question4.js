// let word="CAT"
// let result=[]
// let trimed=[]
// for(i=0;i<word.length;i++){
//     result+=word[i]
//     console.log(result)
//     if(result.length===word.length){
//         for(i=1;i<word.length;i++){
//         trimed=result.slice(i)
//         console.log(trimed)
//     }
//     }
// }

import { utilFunction } from "../util.js";

function wordPattern(word1) {
 
    if(typeof(word1)!=="string" ) return "Invalid input"
       let word=word1.replaceAll(/[\s-,.]/g,"")
       if(word.length===0) return "Invalid input"
  let result = [];
  let patt1 = "";
  let patt2 = "";
  let pattern=""
  for (let i = 0; i < word.length; i++) {
    result = result + word[i];
    pattern+=result
    patt1 += result + "\n";

  }
  for (let i = 1; i < word.length; i++) {
    result = word.slice(i);
    pattern+=result
    patt2 += result + "\n";
  }
  return pattern
//   return patt1+patt2
}
// console.log(wordPattern("CAT"));

let testCase=[
    {
        input:`CAT`,
        expected:"CCACATATT"
    },
       {
        input:123,
        expected:"Invalid input"
    },
     {
        input:[123],
        expected:"Invalid input"
    },
     {
        input:"",
        expected:"Invalid input"
    },
     {
        input:{a:"hey"},
        expected:"Invalid input"
    },
    {
        input:"1,2,4,5",
        expected:`1121241245245455`
    },
    {
        input:"H",
        expected:"H"
    },
     {
        input:null,
        expected:"Invalid input"
    },
     {
        input:undefined,
        expected:"Invalid input"
    },
     {
        input:NaN,
        expected:"Invalid input"
    },
     {
        input:{},
        expected:"Invalid input"
    },
    {
        input:" A B C",
        expected:"AABABCBCC"
    },
    {
        input:3/5,
        expected:"Invalid input"
    },
    {
       input:[{}] ,
       expected:"Invalid input"
    }

]
testCase.forEach((num,index)=>{
    let output=wordPattern(num.input)
    let pass=utilFunction(output,num.expected)
    console.log(`Test ${index+1} :`, pass)
         console.log(`Input :${num.input}`)
        console.log(`Expected :${num.expected}`)
        console.log(`Got :${output}`)
        console.log("----------------------------------------")
})

