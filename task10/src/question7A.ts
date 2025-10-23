/*
    7. Integrate Typescript with below mentioned previous day questions.
    i) 15-Oct - 3, 4, 8
    ii) 16-Oct - 1, 2, 4, 5
    iii) 17-Oct - 1, 5, 10
*/


// 15-Oct question-3


type Student={
    name:string,
    marks:number
}

const students:Student[]=[
   { name:"Alice",marks:42},
   {name:"Bob",marks:67},
   {name:"Charlie",marks:35}
];


students.forEach((data:Student&{status?:string})=>{
    if(data.marks>50){
        data.status="Pass"
    }
    else{
        data.status="Fail"
    }
    
})
 console.log(students)

