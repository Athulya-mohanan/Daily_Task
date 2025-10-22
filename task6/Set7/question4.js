function addDays(date,n){
    let date1=new Date(date)
    console.log(date1.toLocaleDateString())
    date1.setDate(date1.getDate()+n)

    return date1.toLocaleDateString()

}
console.log(addDays("2004-05-30",10))