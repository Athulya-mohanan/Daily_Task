function checkAnagram(arr){
      if(!Array.isArray(arr)) return "Invalid input"
    if(arr.length===0) return "Array must contain atleast one value"
    for(let i of arr){
        if(typeof(i)!=="string" || i.replaceAll(/[\s,-]/g, "")===""){
           return "Invalid input" 
        }
    } 
    const group={}
    for(let word of arr){
        const key=word.toString().toUpperCase().split("").sort().join("");
        if(!group[key]){
            group[key]=[]
        }
        group[key].push(word)
    }
    return Object.values(group)
}
// console.log(checkAnagram(["care", "race", "acre", "dog", "god", "cat",123]))

testCase=[
    {
        input:["care", "race", "acre", "dog", "god", "cat"],
        expect:[ [ 'care', 'race', 'acre' ], [ 'dog', 'god' ], [ 'cat' ] ]
    },
    {
        input:[ "", "", "", ""],
        expect:"Invalid input"
    },
    {
        input:123,
        expect:"Invalid input"
    },
    {
        input:"random",
        expect:"Invalid input"
    },
    {
        input:["random"],
        expect:[['random']]
    },
    {
        input:[123],
        expect:"Invalid input"
    },
    {
        input:null,
        expect:"Invalid input"
    },
    {
        input:undefined,
        expect:"Invalid input"
    },
    {
        input:{},
        expect:"Invalid input"
    },
    {
        input:[],
        expect:"Array must contain atleast one value"
    },
    {
        input:NaN,
        expect:"Invalid input"
    },
    {
        input:[123,"Hello","there"],
        expect:"Invalid input"
    },
    {
        input:["CaRe","race"],
        expect:[ [ 'CaRe', 'race' ] ]
    },
    {
        input:[{}],
        expect:"Invalid input"
    },
    {
        input:"",
        expect:"Invalid input"
    }
]
testCase.forEach((obj,index)=>{
    let output=checkAnagram(obj.input)
    const pass=JSON.stringify(output)===JSON.stringify(obj.expect)
    console.log(`Test: ${index+1}`,pass?"Passed":"Failed")
    console.log(`Input`,obj.input)
    console.log(`Expected: `,obj.expect)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})
