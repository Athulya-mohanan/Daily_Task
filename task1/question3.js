import { objectComparison } from "../utilobj.js";

// const students=[
//     {name:"Alice",mark:42},
//     {name:"Bob",mark:67},
//     {name:"Charlie",mark:35}
// ]

function copyStudent(obj){
     let keys=[]
     for(let obs of obj){
        keys.push(Object.keys(obs))
     }
     console.log(keys)
    // if(typeof(obj.name)!=="string"||typeof(obj.mark)!=="number") return "Invalid input"
    // if((!keys.includes-------")
filtestCase.forEach((num,index)=>{
    let output=myFilter(num.i("name"))&& (!keys.includes("mark"))) return "Invalid input"
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

let testCase=[
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
    console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
    console.log(`Input`,obj.input)
    console.log(`Expected: `,obj.expect)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})



/*
task1 3rd
task3 3rd deepcopy

task5 q3 matrix
set8
task11 q5 counter
task12 q 3 full name *
 */

