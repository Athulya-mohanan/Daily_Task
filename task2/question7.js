function longestWord(arr){
     if(Array.isArray(arr)|| typeof(arr)!=="string"|| arr.trim().length===0) return "Invalid input"
  
    let splitedword=arr.split(" ")
    let len=[]
    let result=[]
    for( let i in splitedword){
        len.push(splitedword[i].length)
    } 
    for( let i in splitedword){
         let sorted=len.sort((a,b)=>b-a)
        if(sorted[0]===splitedword[i].length)
        {
             result.push(splitedword[i])
        }
   }
   return result 
}
// console.log(longestWord("I love coding coding"))

let testCase=[
     {
          input:"I love coding coding",
          expected:["coding","coding"]
     },
     {
          input:["I love coding coding"],
          expected:"Invalid input"
     },
     {
          input:123,
          expected:"Invalid input"
     },
     {
         input:{},
         expected:"Invalid input"
     },
     {
          input:"1 2 3 4 5 ",
          expected:["1","2","3","4","5"]
     },
     {
          input:"one one one",
          expected:["one","one","one"]
     },
     {
          input:"",
          expected:"Invalid input"
     },
     {
          input:undefined,
          expected:"Invalid input"
     },
     {
          input:null,
          expected:"Invalid input"
     },
      {
          input:NaN,
          expected:"Invalid input"
     },
     {
          input:"        ",
          expected:"Invalid input"
     },
     {
          input:3/4,
          expected:"Invalid input"
     },
     {
          input:{name:"Doe"},
          expected:"Invalid input"
     },
     {
          input:" hello     there",
          expected:["hello","there"]
     },
     {
          input:"  hello hey  ",
          expected:["hello"]
     }
]

testCase.forEach((cases,index)=>{
     let output=longestWord(cases.input)
     let pass=output.toString()===cases.expected.toString()
     console.log(`Test :${index+1}`,pass?"Passed":"Failed")
     console.log("Input:",cases.input)
     console.log("Expected",cases.expected)
     console.log("Got",output)
     console.log("--------------------------------------------------")
})