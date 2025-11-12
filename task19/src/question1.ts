export function detectSymmetry(matrix: number[][]) {
  for (let i of matrix) {
    if (i.length !== matrix.length || !Array.isArray(i)) return "Invalid input";
  }
  let verticalFirst: number[] = [];
  let verticalLast: number[] = [];

  let len: number = matrix.length - 1;
  for (let i of matrix) {
    verticalFirst.push(i[0]);
    verticalLast.push(i[len]);
  }
  let verticalBool: boolean;
  for (let i = 0; i < verticalFirst.length; i++) {
    if (verticalFirst[i] !== verticalLast[i]) {
      verticalBool = false;
      break;
    } else {
      verticalBool = true;
    }
  }
  let horizondalfst: number[] = [];
  let horizondalst: number[] = [];

  horizondalfst.push(matrix[0]);
  horizondalst.push(matrix[len]);
  let horizondalFirst = horizondalfst.flat();
  let horizondalLast = horizondalst.flat();
  let horizondalBool;
  for (let i = 0; i < horizondalFirst.length; i++) {
    if (horizondalFirst[i] !== horizondalLast[i]) {
      horizondalBool = false;
      break;
    } else {
      horizondalBool = true;
    }
  }
  let cornerBool;
  let cornerArray: number[] = [];

  if (horizondalFirst[len] === horizondalLast[0]) cornerBool = true;
  else cornerBool = false;

  console.log(cornerArray);
  return {
    Vertical: verticalBool,
    Horizondal: horizondalBool,
    Diagonal: cornerBool,
  };
}
