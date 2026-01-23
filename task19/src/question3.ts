export function SortByScoreRank(data:number[]) {
  if (!Array.isArray(data) || data.length === 0) return "Invalid input";
  for (let i of data) {
    if (typeof i !== "number" ) return "Invalid input";
  }
  let sortCount = [];
  let rankValue = 1;
  let sorted = data.sort((a, b) => b - a);
  for (let i of sorted) {
    sortCount.push({ score: i, rank: rankValue });
  }

  for (let i = 0; i < sortCount.length; i++) {
    for (let j =  i+1; j < sortCount.length; j++) {
      if (sortCount[i].score === sortCount[j].score) {
        sortCount[j].rank = sortCount[i].rank;
      } else {
        sortCount[j].rank = sortCount[i].rank + 1;
      }
    }
  }
  return sortCount;
} 

