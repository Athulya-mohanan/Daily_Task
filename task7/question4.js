// A
// B B
// C C C
// D D D D
// E E E E E
// function patternPrinting(n){
//     let letters=['A','B','C','D','E','F','G']
//     for(let i=0;i<n;i++){
//         console.log(letters[i].repeat(i+1).split("").join(" "))

//     }

// }
// patternPrinting(7)

// function patternPrinting(n) {
//   let letters = [];
//   for (let i = 65; i <= 90; i++) {
//     letters.push(i);
//   }
//   for (let i = 0; i < n; i++) {
//     console.log(
//       String.fromCharCode(letters[i])
//         .repeat(i + 1)
//         .split("")
//         .join(" ")
//     );
//   }
// }
// patternPrinting(9);



function patternPrinting(n) {
  if(n<=0|| typeof(n)!=="number" || Math.round(n)!==n) return "Invalid input"
  let letters = [];
  let str=""
  for (let i = 65; i <= 90; i++) {
    letters.push(i);
  }
  for (let i = 0; i < n; i++) {
     str=str+
      String.fromCharCode(letters[i])
        .repeat(i + 1)
        .split("")
        .join(" ")
  
  }
 return str.replaceAll(/\s/g,"")
}
// console.log(patternPrinting(9))

let testCase=[
  {
    input:9,
    expected:"ABBCCCDDDDEEEEEFFFFFFGGGGGGGHHHHHHHHIIIIIIIII"
  },
  {
    input:0,
    expected:"Invalid input"
  },
    {
    input:-6,
    expected:"Invalid input"
  },
    {
    input:"hey",
    expected:"Invalid input"
  },
    {
    input:0,
    expected:"Invalid input"
  },
    {
    input:true,
    expected:"Invalid input"
  },
    {
    input:9.87,
    expected:"Invalid input"
  },  {
    input:[],
    expected:"Invalid input"
  },
    {
    input:{},
    expected:"Invalid input"
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
    input:1,
    expected:"A"
  },
    {
    input:3/5,
    expected:"Invalid input"
  },
  {
    input:NaN,
    expected:"Invalid input"
  },
  {
    input:[{}],
    expected:"Invalid input"
  }
]

testCase.forEach((num,index)=>{
    let output=patternPrinting(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log(`Test ${index+1} :`, pass?"Pass":"Fail")
         console.log("Input :" ,num.input)
        console.log("Expected :", num.expected)
        console.log("Got :",output)
    console.log("--------------------------")
})