const date=new Date()

const kolkataFormate=new Intl.DateTimeFormat("en-GB",{
    timeZone:"Asia/Kolkata",
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit"
})

const newYorkFormate=new Intl.DateTimeFormat("en-US",{
    timeZone:"America/new_York",
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit"
})

console.log('Asia/Kolkata :',kolkataFormate.format(date))
console.log('America/New_York :',newYorkFormate.format(date))