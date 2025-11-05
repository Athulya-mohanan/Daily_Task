/*
    4. Write a function which takes two strings stringA and stringB, return true if stringA can be constructed by using the letters from stringB and false otherwise.

    Test cases:
    Input: "a", "b"
    Output: false

    Input: "aa", "aab"
    Output: true
*/

function isConstructed(str1,str2){
    if(typeof(str1)!=="string" || typeof(str2)!=="string") return "Invalid input"
    if(str1.replaceAll(/\s/g,"").length===0||str1.replaceAll(/\s/g,"").length===0) return "Invalid input"
    let str1frq={}
    let count=0
    let smallstr1=str1.toLowerCase().replaceAll(/\s/g,"")
    for(let i=0;i<smallstr1.length;i++){
        for( let j of smallstr1[i]){
            str1frq[j]=(str1frq[j]||0)+1
        }
    }
    let str2frq={}
    let smallstr2=str2.toLowerCase().replaceAll(/\s/g,"")
    for(let i=0;i<smallstr2.length;i++){
        for( let j of smallstr2[i]){
            str2frq[j]=(str2frq[j]||0)+1
        }
    }
    const str1key=Object.keys(str1frq)
    const str2key=Object.keys(str2frq)
    for(let keys of str1key){
        if(!str2key.includes(keys)) return false
        if(str1frq[keys]===str2frq[keys]){
            count++
        }
    }
if(count>0){
    return true
}
else return false
}
let testCase=[
    {
        inp1:"a",
        inp2:"b",
        expected:false
    },
    {
        inp1:"aa",
        inp2:"aab",
        expected:true
    },
    {
        inp1:"aac",
        inp2:"aab",
        expected:false
    },
    {
        inp1:123,
        inp2:"aab",
        expected:"Invalid input"
    },
    {
        inp1:123,
        inp2:123,
        expected:"Invalid input"
    },
    {
        inp1:[],
        inp2:"abc",
        expected:"Invalid input"
    },
    {
        inp1:"",
        inp2:"acc",
        expected:"Invalid input"
    },
    {
        inp1:"",
        inp2:"",
        expected:"Invalid input"
    },
    {
        inp1:null,
        inp2:"acc",
        expected:"Invalid input"
    },
    {
        inp1:undefined,
        inp2:"acc",
        expected:"Invalid input"
    },
    {
        inp1:NaN,
        inp2:"acc",
        expected:"Invalid input"
    },
    {
        inp1:{},
        inp2:"acc",
        expected:"Invalid input"
    },
    {
        inp1:"123a",
        inp2:"acc",
        expected:false
    },
    {
        inp1:"aa",
        inp2:"acac",
        expected:true
    },
    {
        inp1:"@#$",
        inp2:"a@v#n$",
        expected:true
    }
]

testCase.forEach((num,index)=>{
    let output=isConstructed(num.inp1,num.inp2)
    let pass=output.toString()===num.expected.toString()
    console.log("Test :",index+1,pass?"Pass":"Fail")
    console.log("Input :",num.inp1,num.inp2)
    console.log("Expected :",num.expected)
    console.log("Got",output)
    console.log("-------------------------------------------------")
})