/*
    3. Write a function which takes a string, reverse all the vowels in the string and return it.

    Test cases:
    Input: s = "IceCreAm"
    Output: "AceCreIm"

*/

function vowelsReverse(str) {
  // let strSmall = str.toLowerCase();
  let vovels = ["a", "e", "i", "o", "u"];
  let strVovels = [];
  let vovelsIndex = [];
  let strarr=[]
  for (let i = 0; i < str.length; i++) {
    if (vovels.includes(str[i])) {
      vovelsIndex.push(i);
      strVovels.push(str[i]);
    }
  }
  
  strVovels.reverse()
   console.log(vovelsIndex);
   console.log(strVovels)
  for(let i of str){
    strarr.push(i)
  }
//   console.log(strarr)
for(let i=0;i<strarr.length;i++){
    for(let index of vovelsIndex){
        if(i===index){
            if(strarr[i]!==strVovels[i]){
                // strarr[i]=strVovels[i]
                let temp=strarr[i]
                strarr[i]=strVovels[i]
                strVovels[i]=temp
            }
        }
    }
}

  console.log(strarr);
}
console.log(vowelsReverse("IceCreAm"));

