function FindAvailableSeats(seatGrid:number[][],groupSize:number){
    let result:number[][]=[]
for(let subArr of seatGrid){
    for(let i=0;i<subArr.length;i++){
        let res:number[]=[]
        if(groupSize===1){
            if(subArr[i]===0){
                res.push(seatGrid.indexOf(subArr),i)
                result.push(res)
            }
        }
       if(subArr[i]===subArr[i+1]){
        
        res.push(seatGrid.indexOf(subArr),i)
        result.push(res)

       }
    }
}
return result
}
console.log(FindAvailableSeats([[0,0,1,0,1,0,0],[0,1],[1,0,0]],2))

// Not Completed