function toBool(value){
    if(value===true||value==="yes"||value===1){
        return true
    }else{
        return false
    }
}
let testCase=[
    {
        input:true,
        expected:true
    },
     {
        input:"yes",
        expected:true
    },
     {
        input:1,
        expected:true
    },
    {
        input:"true",
        expected:false
    },
     {
        input:["yes"],
        expected:false
    },
     {
        input:"1",
        expected:false
    },

     {
        input:false,
        expected:false
    },
     {
        input:"hey",
        expected:false
    },
     {
        input:false,
        expected:false
    },
     {
        input:0.6,
        expected:false
    },
     {
        input:1/2,
        expected:false
    },
     {
        input:-10,
        expected:false
    },
     {
        input:{},
        expected:false
    },
    {
        input:[{}],
        expected:false
    },
    {
        input:0,
        expected:false
    }

]

testCase.forEach((num,index)=>{
        let output=toBool(num.input)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.input)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})