/**Write a function checkSameWeek(date1, date2) that:
Checks whether the two given dates fall in the same calendar week.
Example:
Input:
date1 = "2025-01-02"
date2 = "2025-01-05"
Output: false */
function checkSameWeek(date1:string,date2:string){
    let W1:number=new Date(date1).getDay()
    let W2:number=new Date(date2).getDay()
    let D1:number=new Date(date1).getDate()
    let D2:number=new Date(date2).getDate()
    if(D1>D2){
        if(W1>W2) return true
        else return false
    }
    else if(D1<D2){
        if(W1<W2) return true
        else return false
    }
}
console.log(checkSameWeek("2025-11-18","2025-11-15"))
console.log(checkSameWeek("2025-11-15","2025-11-18"))
console.log(checkSameWeek("2025-01-02","2025-01-05"))
console.log(checkSameWeek("2025-11-12","2025-11-13"))
