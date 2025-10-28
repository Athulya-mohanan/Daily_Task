
const students=[
    {name:"Alice",mark:42},
    {name:"Bob",mark:67},
    {name:"Charlie",mark:35}
]

function copyStudent(obj){
     if(!Array.isArray(obj)|| obj.length===0) return "Invalid input"
    const studentCopy=JSON.parse(JSON.stringify(obj));
    studentCopy.forEach((element) => {
    if(element.mark>50){
        element.status="pass"
    }
    else{
        element.status="Fail"
    }
    delete element.mark
});
return studentCopy
}
// console.log(copyStudent(students))

testCase=[
    {
        input:[{name:"Alice",mark:42},
            {name:"Bob",mark:67},
            {name:"Charlie",mark:35}
        ],
        expect:[
                { name: 'Alice', status: 'Fail' },
                { name: 'Bob', status: 'pass' },
            { name: 'Charlie', status: 'Fail' }
            ],        
    },
    
]
testCase.forEach((obj,index)=>{
    let output=copyStudent(obj.input)
    const pass=JSON.stringify(output)===JSON.stringify(obj.expect)
    console.log(`Test: ${index+1}`,pass?"Passed":"Failed")
    console.log(`Input`,obj.input)
    console.log(`Expected: `,obj.expect)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})



