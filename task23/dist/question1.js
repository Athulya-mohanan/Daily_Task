"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. Write a program to rotate an matrix by 90deg (clockwise).
function transpose(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = Array.from({ length: cols }, () => Array(rows).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
function rotate(matrix) {
    let transpo = transpose(matrix);
    for (let i of transpo) {
        i.reverse();
    }
    return transpo;
}
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
//# sourceMappingURL=question1.js.map