/**2.Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
- maxTemp, minTemp, averageTemp
- coordinates of the hottest and coldest points.
Example:
Input: [[30,32,35],[28,40,33],[31,36,38]]
Output: { maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0] } */

export function analyzeHeatmap(heatmap1: number[][]) {
  let heatmap = structuredClone(heatmap1);
  let count = 0;
  if (!Array.isArray(heatmap)) return "Invalid input";
  for (let subarr of heatmap) {
    if (subarr.length === 0) {
      count++;
    }
    if (!Array.isArray(subarr)) return "Invalid input";
    for (let i of subarr) {
      if (typeof i !== "number") return "Invalid input";
    }
  }
  if (count === heatmap.length) return "Invalid input";
  let hottestPoint: number[] = [];
  let coldestPoint: number[] = [];
  let flatarr: number[];
  flatarr = heatmap.flat();
  let sorted: number[] = flatarr.sort((a, b) => b - a);

  let maxTemp: number = sorted[0];
  let minTemp: number = sorted[sorted.length - 1];
  let average = (
    flatarr.reduce((acc, curr) => acc + curr) / flatarr.length
  ).toFixed(1);
  let averageTemp: number = Number(average);
  let hotsub = [];
  let colsub = [];
  for (let subArr of heatmap) {
    for (let i = 0; i < subArr.length; i++) {
      if (subArr[i] === maxTemp) {
        hotsub.push(heatmap.indexOf(subArr), i);
      }
      if (subArr[i] === minTemp) {
        colsub.push(heatmap.indexOf(subArr), i);
      }
    }
  }
  hottestPoint = hotsub.toSpliced(2);
  coldestPoint = colsub.toSpliced(2);
  return {
    maxTemp: maxTemp,
    minTemp: minTemp,
    averageTemp: averageTemp,
    hottestPoint: hottestPoint,
    coldestPoint: coldestPoint,
  };
}

// console.log(AnalyzeHeatmap([[],[],[]]))
