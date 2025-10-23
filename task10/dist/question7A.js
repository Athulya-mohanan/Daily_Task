"use strict";
/*
    7. Integrate Typescript with below mentioned previous day questions.
    i) 15-Oct - 3, 4, 8
    ii) 16-Oct - 1, 2, 4, 5
    iii) 17-Oct - 1, 5, 10
*/
Object.defineProperty(exports, "__esModule", { value: true });
const students = [
    { name: "Alice", marks: 42 },
    { name: "Bob", marks: 67 },
    { name: "Charlie", marks: 35 }
];
students.forEach((data) => {
    if (data.marks > 50) {
        data.status = "Pass";
    }
    else {
        data.status = "Fail";
    }
});
console.log(students);
//# sourceMappingURL=question7A.js.map