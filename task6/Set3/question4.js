import { utilFunction } from "../../util.js"

function addItem(arr,item){
    if(!Array.isArray(arr)||Array.isArray(item) ) return "Invalid input"
    if(typeof(item)==="string"){
        if(item.trim().length===0) return "Invalid input"
    }
    let newArr=JSON.parse(JSON.stringify(arr))
    newArr.push(item)
    // console.log("Orginal array",arr)
    return newArr
}

// console.log(addItem([1,2,3,[4,5,6]],10))
let testCase=[
    {
        input:[1,2,3,4,5],
        item:10,
        expect:[1,2,3,4,5,10]
    },
     {
        input:123,
        item:10,
        expect:"Invalid input"
    },
    {
        input:[1,2,3,4,5,6],
        item:[10],
        expect:"Invalid input"
    },
    {
        input:"hello",
        item:[10],
        expect:"Invalid input"
    },
    {
        input:[1,2,3],
        item:"10",
        expect:[ 1, 2, 3, '10' ]
    },
    {
        input:null,
        item:[10],
        expect:"Invalid input"
    },
    {
        input:undefined,
        item:[10],
        expect:"Invalid input"
    },
    {
        input:NaN,
        item:[10],
        expect:"Invalid input"
    },
    {
        input:{},
        item:[10],
        expect:"Invalid input"
    },
     {
        input:[],
        item:10,
        expect:[10]
    },
    {
        input:["hello","hey"],
        item:12,
        expect:[ 'hello', 'hey', 12 ]
    },
     {
        input:["hello","hey"],
        item:"there",
        expect:[ 'hello', 'hey', "there" ]
    },
    {
        input:["hello"],
        item:"",
        expect:"Invalid input"
    },
    {
        input:[1,2,3,4],
        item:"1234",
        expect:[1,2,3,4,"1234"]
    },
    {
        input:"",
        item:2,
        expect:"Invalid input"

    }

]
testCase.forEach((num,index)=>{
        let output=addItem(num.input,num.item)
       let pass=utilFunction(output,num.expect)
        console.log(`Test: ${index+1}`,pass)
        console.log("Input :",num.input)
        console.log("Expected :",num.expect)
        console.log("Got :",output)
        console.log("---------------------------------")
})

