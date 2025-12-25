/**3. Write a function SortByScoreRank(data) that takes an array of player scores and assigns ranks (ties get same rank).
Example:
Input: [100,100,90,80]
Output: [{score:100,rank:1},{score:100,rank:1},{score:90,rank:2},{score:80,rank:3}] */


function SortByScoreRank(data){
    let scoreCount={}
    let result=[]
    for(let i of data){
        scoreCount["score"]=i
        result.push(scoreCount)
    }
    return result
    
}
console.log(SortByScoreRank([100,100,90,80]))