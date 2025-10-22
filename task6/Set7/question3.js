function dayDifference(date1,date2){
    let dateA=new Date(date1)
    let dateB=new Date(date2)
    const differenceMin=Math.abs(dateA-dateB)
    console.log(differenceMin)
    const dayDifference=differenceMin/(1000*60*60*24)
console.log("days:",dayDifference)

    
}
dayDifference("2004-05-30", "2002-10-20")