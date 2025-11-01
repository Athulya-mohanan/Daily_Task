 function wordSort(wrd){
    return wrd.toLowerCase().replace(/\s/g,"").split("").sort()
}
function checkAnagram(wrd1,wrd2){
   if(typeof(wrd1)!=="string" || typeof(wrd2)!=="string"|| Array.isArray(wrd1)|| Array.isArray(wrd2) || wrd1.replaceAll(/\s/g,"").length===0||wrd2.replaceAll(/\s/g,"").length===0) return "Invalid input"
   if(wordSort(wrd1).join()===wordSort(wrd2).join()) {
    return true
   }
   else{
    return false
   }
}
let testCase=[
   {
      inp1:"care",
      inp2:"race",
      expected:true
   },
   {
      ip1:123,
      inp2:678,
      expected:"Invalid input"
   },
   {
      inp1:[1,2,3],
      inp2:"hey",
      expected:"Invalid input"
   },
   {
      inp1:true,
      inp2:"Hello",
      expected:"Invalid input"
   },
   {
      inp1:null,
      inp2:"race",
      expected:"Invalid input",
   },
   {
      inp1:NaN,
      inp2:"race",
      expected:"Invalid input",
   },
   {
      inp1:"race",
      inp2:"races",
      expected:false,
   },
   {
      inp1:[],
      inp2:"",
      expected:"Invalid input"
   },
   {
      inp1:"",
      inp2:"",
      expected:"Invalid input"
   },
   {
      inp1:"Rat",
      inp2:"TAr",
      expected:true
   },
   {
      inp1:"R a t",
      inp2:"T Ar",
      expected:true
   },
   {
      inp1:true,
      inp2:false,
      expected:"Invalid input"
   },
   {
      inp1:[],
      inp2:[],
      expected:"Invalid input"
   },
   {
      inp1:undefined,
      inp2:"care",
      expected:"Invalid input"
   },
   {
      inp1:' ',
      inp2:' ',
      expected:"Invalid input"
   }

]
testCase.forEach((num,index)=>{
   let output=checkAnagram(num.inp1,num.inp2)
   let pass=output.toString()===num.expected.toString()
   console.log(`Test: ${index+1}`,pass?"Passed":"Failed")
    console.log(`Input`,num.inp1,num.inp2)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})