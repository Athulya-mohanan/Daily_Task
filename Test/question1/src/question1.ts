/**1. Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
- maxTemp, minTemp, averageTemp
- coordinates of the hottest and coldest points.

Input: [[30,32,35],[28,40,33],[31,36,38]]
Output: { maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0] } */

export function AnalyzeHeatmap(heatmap: number[][]) {
    if(!Array.isArray(heatmap)) return "Invalid"
    for(let arr of heatmap){
        if(!Array.isArray(arr)) return "Invalid"
        for(let num of arr){
            if(typeof(num)!=="number" ||Number.isNaN(num)) return "Invalid"
        }
    }
  let flatten = heatmap.flat();
  let sortedarr = flatten.sort();
  let maxTemp = sortedarr[sortedarr.length - 1];
  let minTemp = sortedarr[0];
  let total = (
    sortedarr.reduce((acc, curr) => acc + curr) / sortedarr.length
  ).toFixed(1);
  let hottestPoint = [];
  let coldestPoint = [];
  for (let i = 0; i < heatmap.length; i++) {
    for (let j = 0; j < heatmap[i]?.length; j++) {
      if (heatmap[i][j] === maxTemp) {
        hottestPoint.push(i, j);
      }
      if (heatmap[i][j] === minTemp) {
        coldestPoint.push(i, j);
      }
    }
  }
  return {
    maxTemp: maxTemp,
    minTemp: minTemp,
    averageTemp: Number(total),
    hottestPoint: hottestPoint,
    coldestPoint: coldestPoint,
  };
}
// console.log(AnalyzeHeatmap([[30,32,35],[28,-40,33],[31,36,38]]))
