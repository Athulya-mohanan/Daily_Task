function stringReverse(str){
    if(typeof(str)!=="string" || Array.isArray(str)) return "Input must be a string"
    let reversed=[]
    let splitedword=str.split(" ")
    for(let i in splitedword){
        reversed.push(splitedword[i].split("").reverse().join(""))
    }
return reversed
}

let testCase=[
    {
        input:"Hello world!",
        expected:[ 'olleH', '!dlrow' ]
    },
    {
        input:"",
        expected:[""]
    },
    {
        input:123,
        expected:"Input must be a string"
    },
    {
        input:[1,2,3],
        expected:"Input must be a string"
    },
    {
        input:null,
        expected:"Input must be a string"
    },
    {
        input:undefined,
        expected:"Input must be a string"
    },
    {
        input:NaN,
        expected:'Input must be a string'
    },
    {
        input:"a",
        expected:["a"]
    },
    {
        input:true,
        expected:"Input must be a string"
    },
    {
        input:6/8,
        expected:"Input must be a string"
    },
    {
        input:[{}],
        expected:"Input must be a string"
    },
    {
        input:a=10,
        expected:"Input must be a string"
    },
    {
        input:{name:"Doe"},
        expected:"Input must be a string"
    } ,
    {
        input:{},
        expected:"Input must be a string"
    },
    {
        input:[],
        expected:"Input must be a string"
    }
]
testCase.forEach((num,index)=>{
    let output=stringReverse(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log(`Task :  ${index+1}`,pass?"Pass":"Fail")
    console.log("Expected",num.expected)
    console.log("Got",output)
    console.log("-----------------------------------------")
})
// function checkPass(params){
//     if(typeof(params)==="string"){
//         params.toString()
//     }else if(Array.isArray(params)){

//     }
// }

