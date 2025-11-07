/**2. Write a function that takes a array of integers where every element appears exactly twice,
 * except for one element which appears only once. The function should find and return that single unique number. */

function findUnique(arr) {
    if(!Array.isArray(arr) || arr.length===0) return "Invalid input"
    for(let i of arr){
        if(typeof(i)!=="number" ||Array.isArray(i)) return "Invalid input"
    }
  let numcount = {};
  for (let nums of arr) {
    numcount[nums] = (numcount[nums] || 0) + 1;
  }
  let numcountValues = Object.values(numcount);
  let isTwice = numcountValues.filter((x) => x > 2);
  let isunique = numcountValues.filter((x) => x == 1);
  if (isTwice.length > 0) return "Elements need to appears exactly twice";
  else if (isunique.length > 1 || isunique.length === 0) {
    return "Need one unique element";
  } else {
    for (let i of arr) {
      if (arr.indexOf(i) === arr.lastIndexOf(i)) return i;
    }
  }
}

let testCase=[
    {
        input:[1,2,3,4,5,6,1,3,4,5,6],
        expecet:2
    },
    {
        input:[1,3,4,5,6,1,3,4,5,6],
        expecet:"Need one unique element"
    },
     {
        input:[1,2,3,4,8,5,6,1,3,4,5,6],
        expecet:"Need one unique element"
    },
    {
        input:[4,1,2,3,4,5,6,1,3,4,5,6],
        expecet:"Elements need to appears exactly twice"
    },
     {
        input:123,
        expecet:"Invalid input"
    },
      {
        input:"123",
        expecet:"Invalid input"
    },
      {
        input:null,
        expecet:"Invalid input"
    },
      {
        input:NaN,
        expecet:"Invalid input"
    },
      {
        input:undefined,
        expecet:"Invalid input"
    },
      {
        input:{},
        expecet:"Invalid input"
    },
      {
        input:[],
        expecet:"Invalid input"
    },
    {
        input:["hello","hey"],
        expecet:"Invalid input"
    },
    {
        input:[null,undefined],
        expecet:"Invalid input"
    },
    {
        input:[1,2,3,[4,5,6,[4]]],
        expecet:"Invalid input"
    },
    {
        input:"hello",
        expecet:"Invalid input"
    }
]

testCase.forEach((num,index)=>{
    let output=findUnique(num.input)
    let pass=output.toString()===num.expecet.toString()
    console.log("Test :",index+1,pass?"Pass":"Fail")
    console.log("Input :",num.input)
    console.log("Expected :",num.expecet)
    console.log("Got :",output)
    console.log("------------------------------------------")
})