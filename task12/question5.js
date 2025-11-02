
// 5. Write a function to check object equality. Which receives two objects as arguments, and it should return "Equal" if both contain same keys, values, "Not Equal" if not.

// Test cases:
// Input: { a: 1, b: 2 }, { b: 3, c: 4 }
// Output: "Not Equal"


 function checkObjectEquality(obj1,obj2){
    let result="equal"
    if(obj1===null||obj1===undefined|obj1===NaN||obj1===null||obj1===undefined|obj1===NaN) return "Invalid input"
  if(Array.isArray(obj1) ||Array.isArray(obj2) || typeof(obj1)!=="object"|| typeof(obj2)!=="object" ||Object.keys(obj1).length===0||Object.keys(obj2).length===0) return "Invalid input"
    // return JSON.stringify(obj1)===JSON.stringify(obj2)
  const obj1keys=Object.keys(obj1)
    const obj2keys=Object.keys(obj2)
    if(obj1keys.length!==obj2keys.length) result= "not equal"
    for(let keys of obj1keys){
        if(!obj1keys.includes(keys)) result= "not equal"
        if(obj1[keys]!==obj2[keys]) result="not equal"
    }  
return result
}
testCase=[
    {
        inp1:{ a:3,b:4},
        inp2:{ a: 3, b: 4 },
        expected:"equal"
    },
    {
        inp1:{ b:3,a:4},
        inp2:{ a:4,b:3},
        expected:"equal"
    },
    {
        inp1:{ b:3,a:4},
        inp2:{ b:4,a:3},
        expected:"not equal"
    },
    {
        inp1:[1,2],
        inp2:[3,4],
        expected:"Invalid input"
    },
     {
        inp1:{ b:3,a:4},
        inp2:{},
        expected:"Invalid input"
    },
    {
        inp1:123,
        inp2:{b:3,a:4},
        expected:"Invalid input"
    },
    {
        inp1:"hello",
        inp2:{b:3,a:5},
        expected:"Invalid input"
    },
     {
        inp1:null,
        inp2:{b:3,a:5},
        expected:"Invalid input"
    },
     {
        inp1:undefined,
        inp2:{b:3,a:5},
        expected:"Invalid input"
    },
     {
        inp1:-300,
        inp2:{b:3,a:5},
        expected:"Invalid input"
    },
     {
        inp1:{a:5},
        inp2:{b:3,a:5},
        expected:"not equal"
    },
      {
        inp1:{a:5},
        inp2:{b:3,a:5},
        expected:"not equal"
    },
    {
        inp1:[{}],
        inp2:{},
        expected:"Invalid input"
    },
    {
        inp1:"",
        inp2:"",
        expected:"Invalid input"
    },
    {
        inp1:{},
        inp2:{},
        expected:"Invalid input"
    }

]
// console.log(checkObjectEquality({ a:3,b:4}, { a: 3, b: 4 }))

testCase.forEach((num,index)=>{
        let output=checkObjectEquality(num.inp1,num.inp2)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.inp1,num.inp2)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})

