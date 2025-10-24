
const students=[
    {name:"Alice",mark:42},
    {name:"Bob",mark:67},
    {name:"Charlie",mark:35}
]
// students.forEach((item)=>{
//     if(item.mark>50){
//         item.status="Pass"
//     }
//     else{
//         item.status="Fail"
//     }
//     delete item.mark
// })
// console.log(students)
const studentCopy=JSON.parse(JSON.stringify(students))
studentCopy.forEach(element => {
    if(element.mark>50){
        element.status="pass"
    }
    else{
        element.status="Fail"
    }
    delete element.mark
});
console.log(studentCopy)
console.log(students)


