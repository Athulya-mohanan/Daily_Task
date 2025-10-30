function toSort(str){
  return str.toUpperCase().replace(/\s/g, "").split("").sort()
}
function isAnagrams(str1,str2){
    if(Array.isArray(str1)|| Array.isArray(str2) || typeof(str1)!=="string" || typeof(str2)!=="string") return "Enterd must be string"
    let result
    let sort1=toSort(str1)
    let sort2=toSort(str2)
    if(sort1.join()===sort2.join()){
        result= true
    }
    else{
        result= false
    }
return result
}
let testCase=[
    {
        input1:"care",
        input2:"race",
        expected:true
    },
     {
        input1:123,
        input2:678,
        expected:"Enterd must be string"
    },
     {
        input1:[1,2,3],
        input2:"race",
        expected:"Enterd must be string"
    },
    {
        input1:true,
        input2:false,
        expected:"Enterd must be string"
    },
    {
        input1:null,
        input2:"race",
        expected:"Enterd must be string"
    },
    {
        input1:NaN,
        input2:null,
        expected:"Enterd must be string"
    },
    {
        input1:"race",
        input2:"rat",
        expected:false
    },
    {
        input1:[],
        input2:"",
        expected:"Enterd must be string"
    },
    {
        input1:"RAT",
        input2:"tAr",
        expected:true
    },
    {
        input1:"R E F",
        input2:"fre",
        expected:true
    },
    {
        input1:"",
        input2:"",
        expected:true
    },
    {
        input1:"%&",
        input2:"&%",
        expected:true
    },
    {
        input1:true,
        input2:false,
        expected:"Enterd must be string"
    },
    {
        input1:[],
        input2:[],
        expected:"Enterd must be string"
    },
    {
        input1:undefined,
        input2:"Care",
        expected:"Enterd must be string"
    }
]
testCase.forEach((obj,index)=>{
    let output=isAnagrams(obj.input1,obj.input2)
    const pass=output.toString()===obj.expected.toString()
     console.log(`Test: ${index+1}`,pass?"Passed":"Failed")
    console.log(`Input`,obj.input1,obj.input2)
    console.log(`Expected: `,obj.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})
