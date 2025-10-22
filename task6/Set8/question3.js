const date=new Date()

const formatDate=new Intl.DateTimeFormat("en-GB",{
    dateStyle:'long',
    timeStyle:'short'
})

console.log("Formated time:",formatDate.format(date))