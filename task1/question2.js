function patternPrint(aword) {
      if (typeof (aword )!="string" || aword.trim()==="") return "Invalid input";
  let word = aword.replaceAll(/[\s,-]/g, "");

  let result = [];
  let p1=""
  let p2=""
  let resultSlice = [];
  for (let i = 0; i < word.length; i++) {
    result = result + word[i];
    console.log(result);
    p1+=result
    if (result.length == word.length) {
      for (let i = 1; i < word.length; i++) {
        resultSlice = result.slice(i);
        console.log(resultSlice);
        p2+=resultSlice
      }
    }
  }
  return stringOnly=p1+p2
}
TestCase = [
  {
    input: "CAT",
    expected: "CCACATATT",
  },
  {
    input: "C A D",
    expected: "CCACADADD",
  },
  {
    input:123,
    expected:"Invalid input",
  },
  {
    input:[1,2,3],
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
    input:"Hello",
    expected:"HHeHelHellHelloellolloloo"
  },
  {
    input:"1,2,3",
    expected:"112123233"
  },
  {
    input:4/5,
    expected:"Invalid input"
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
    input:"NaN",
    expected:"NNaNaNaNN"
  },
  {
    input:{},
    expected:"Invalid input"
  }
];

TestCase.forEach((text,index)=>{
    let output=patternPrint(text.input)
    
    const pass=output.toString()===text.expected
    console.log(`Test ${index+1} :`, pass?"Passed":"Failed")
         console.log(`Input : ${text.input}`)
        console.log(`Expected : ${text.expected}`)
        console.log(`Got :${output}`)
        console.log("----------------------------------------")
})






