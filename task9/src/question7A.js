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
const result = students.map((student) => {
    return {
        name: student.name,
        status: student.marks > 50 ? "Pass" : "Fail"
    };
});
console.log(result);
//# sourceMappingURL=question7A.js.map