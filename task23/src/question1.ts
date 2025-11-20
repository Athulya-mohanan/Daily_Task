//1. Write a program to rotate an matrix by 90deg (clockwise).
function transpose(matrix:number[][]){
    let rows=matrix.length
    let cols=matrix[0].length;
    let result:number[][]=Array.from({length:cols},()=>Array(rows).fill(0))
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            result[j][i]=matrix[i][j]
        }
    }
    return result
}
function rotate(matrix:number[][]){
  let transpo:number[][]=  transpose(matrix)
  for(let i of transpo){
    i.reverse()
  }
return transpo
}
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))