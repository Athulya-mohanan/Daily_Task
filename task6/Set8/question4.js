function dateFormate(date,zone){
    const date1 = new Date(date)
    let formatedDate= new Intl.DateTimeFormat("en-US",{
        timeZone:zone,
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    })
    return formatedDate.format(date1)
    
}
console.log(dateFormate("2004-05-30",'Asia/Kolkata'))